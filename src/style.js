export default (editor, opt = {}) => {
  if (opt.resetStyleManager) {
    const sectors = editor.StyleManager.getSectors();

    editor.on("load", () => {
      sectors.reset();
      sectors.add([
        {
          name: "Dimension",
          open: false,
          buildProps: [
            "width",
            "height",
            "max-width",
            "min-height",
            "margin",
            "padding"
          ],
          properties: [
            {
              property: "margin",
              properties: [
                { name: "Top", property: "margin-top" },
                { name: "Right", property: "margin-right" },
                { name: "Bottom", property: "margin-bottom" },
                { name: "Left", property: "margin-left" }
              ]
            },
            {
              property: "padding",
              detached: true,
              properties: [
                { name: "Top", property: "padding-top" },
                { name: "Right", property: "padding-right" },
                { name: "Bottom", property: "padding-bottom" },
                { name: "Left", property: "padding-left" }
              ]
            },
            {
              property: "icon-size",
              type: "integer",
              defaults: "20px",
              units: ["px", "%"]
            }
          ]
        },
        {
          name: "Typography",
          open: false,
          buildProps: [
            "font-family",
            "font-size",
            "font-weight",
            "letter-spacing",
            "color",
            "line-height",
            "text-align",
            "align",
            "text-decoration"
          ],
          properties: [
            {
              name: "Font",
              property: "font-family",
              list: [
                { name: "Red Hat Text", value: "Red Hat Text" },
                { name: "Red Hat Display", value: "Red Hat Display" },
                { name: "Roboto", value: "Roboto, Arial, Helvetica" },
                { name: "Arial", value: "Arial, Helvetica" },
                { name: "Arial Black", value: "Arial Black, Gadget" },
                { name: "Brush Script MT", value: "Brush Script MT" },
                { name: "Comic Sans MS", value: "Comic Sans MS, cursive" },
                { name: "Courier New", value: "Courier New, Courier" },
                { name: "Georgia", value: "Georgia, serif" },
                { name: "Helvetica", value: "Helvetica, serif" },
                { name: "Impact", value: "Impact, Charcoal" },
                {
                  name: "Lucida Sans Unicode",
                  value: "Lucida Sans Unicode, Lucida Grande"
                },
                { name: "Tahoma", value: "Tahoma, Geneva" },
                {
                  name: "Times New Roman",
                  value: "Times New Roman, Times, serif"
                },
                { name: "Trebuchet MS", value: "Trebuchet MS, Helvetica" },
                { name: "Verdana", value: "Verdana, Geneva" }
              ]
            },
            { name: "Weight", property: "font-weight" },
            { name: "Font color", property: "color" },
            {
              property: "text-align",
              type: "radio",
              defaults: "left",
              list: [
                { value: "left", name: "Left", className: "fa fa-align-left" },
                {
                  value: "center",
                  name: "Center",
                  className: "fa fa-align-center"
                },
                {
                  value: "right",
                  name: "Right",
                  className: "fa fa-align-right"
                },
                {
                  value: "justify",
                  name: "Justify",
                  className: "fa fa-align-justify"
                }
              ]
            },
            {
              property: "align",
              type: "radio",
              defaults: "left",
              list: [
                { value: "left", name: "Left", className: "fa fa-align-left" },
                {
                  value: "center",
                  name: "Center",
                  className: "fa fa-align-center"
                },
                {
                  value: "right",
                  name: "Right",
                  className: "fa fa-align-right"
                },
                {
                  value: "justify",
                  name: "Justify",
                  className: "fa fa-align-justify"
                }
              ]
            },
            {
              property: "text-decoration",
              type: "radio",
              defaults: "none",
              list: [
                { value: "none", name: "None", className: "fa fa-times" },
                {
                  value: "underline",
                  name: "underline",
                  className: "fa fa-underline"
                },
                {
                  value: "line-through",
                  name: "Line-through",
                  className: "fa fa-strikethrough"
                }
              ]
            }
          ]
        },
        {
          name: "Decorations",
          open: false,
          buildProps: [
            "background-color",
            "container-background-color",
            "background-url",
            "background-repeat",
            "background-size",
            "border-radius",
            "border"
          ],
          properties: [
            {
              name: "Background color",
              property: "container-background-color",
              type: "color"
            },
            {
              property: "background-url",
              type: "file"
            },
            {
              property: "border-radius",
              properties: [
                { name: "Top", property: "border-top-left-radius" },
                { name: "Right", property: "border-top-right-radius" },
                { name: "Bottom", property: "border-bottom-left-radius" },
                { name: "Left", property: "border-bottom-right-radius" }
              ]
            },
            {
              property: "border-detached",
              name: "Border detached",
              type: "composite",
              detached: true,
              properties: [
                { name: "Width", property: "border-width", type: "integer" },
                {
                  name: "Style",
                  property: "border-style",
                  type: "select",
                  list: [
                    { value: "none" },
                    { value: "solid" },
                    { value: "dotted" },
                    { value: "dashed" },
                    { value: "double" },
                    { value: "groove" },
                    { value: "ridge" },
                    { value: "inset" },
                    { value: "outset" }
                  ]
                },
                { name: "Color", property: "border-color", type: "color" }
              ]
            }
          ]
        }
      ]);
    });
  }
};
