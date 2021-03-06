// Specs: https://mjml.io/documentation/#mj-style
import mjml2html from "mjml";
import { isComponentType } from "./index.js";

export default (editor, { dc, coreMjmlModel, coreMjmlView, sandboxEl }) => {
  const type = "mj-style";
  dc.addType(type, {
    isComponent: isComponentType(type),

    model: {
      ...coreMjmlModel,
      defaults: {
        draggable: "[data-gjs-type=mj-head]"
      }
    },
    view: {
      ...coreMjmlView,
      tagName: "style",

      getMjmlTemplate() {
        return {
          start: `<mjml><mj-head>`,
          end: `</mj-head></mjml>`
        };
      },

      getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector("style").innerHTML;
      },

      renderStyle() {},

      getTemplateFromMjml() {
        let mjmlTmpl = this.getMjmlTemplate();
        let innerMjml = this.getInnerMjmlTemplate();
        const htmlOutput = mjml2html(`${mjmlTmpl.start}
          ${innerMjml.start}${innerMjml.end}${mjmlTmpl.end}`);
        let html = htmlOutput.html;
        let start = html.indexOf("<head>") + 6;
        let end = html.indexOf("</head>");
        html = html.substring(start, end).trim();
        sandboxEl.innerHTML = html;
        return this.getTemplateFromEl(sandboxEl);
      }
    }
  });
};
