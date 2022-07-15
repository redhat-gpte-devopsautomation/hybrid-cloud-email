# Newsletter builder - MJML

> Uses MJML syntax and Requires GrapesJS v0.14.62 or higher

This plugin enables the usage of [MJML](https://mjml.io/) components inside the GrapesJS environment. MJML components are rendered in real-time using the official v4 compiler (+ some mocks to make it run in the browser), therefore the result is, almost, the same as using the [MJML Live Editor](https://mjml.io/try-it-live).


## Generating HTML

If you want to generate a HTML from a .mjml file you need to do the following:
- Download the code and install dependencies `npm i`
- Ensure that in `index.html` file the `templateToLoad` variable is pointing to the desired mjml file
- Open the builder app `npm start`
- Click on the `view code` (3rd icon `</>`) on the `right-top` and you will see the respective `html` code.
- Use this HTML in your emails :)

