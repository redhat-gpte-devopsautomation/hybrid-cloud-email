const mjml2html = require('mjml');
const fs = require('fs');

const preMjml = '<mjml><mj-head><mj-font name="Red Hat Text" href="https://fonts.googleapis.com/css2?family=Red+Hat+Text&display=swap" /><mj-font name="Red Hat Display" href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap" /><mj-attributes><mj-text padding="0" /><mj-class name="red" color="#EE0000" /><mj-class name="big" font-size="16px" /></mj-attributes></mj-head><mj-body>';
const postMjml = '</mj-body></mjml>';

const args = process.argv.slice(2);
fs.readFile(args[0], 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const mjml = preMjml + data + postMjml;
    const html = mjml2html(mjml, { minify: true, keepComments: true });
    if (html.errors.length > 0) {
        console.error(html.errors);
    }
    fs.writeFile(args[1], html.html, err => {
        if (err) throw err;
        console.log('HTML file successfully saved');
    });
    return html;
});