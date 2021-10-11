const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  const buttons = {
    ".wrapper": {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      "@screen sm": { maxWidth: "640px" },
      "@screen md": { maxWidth: "768px" },
      "@screen sm": { maxWidth: "975px" },
    },
  };

  addComponents(buttons);
});
