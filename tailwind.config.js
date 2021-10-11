module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
    },

    extend: {
      inset: {
        0: 0,
        // ...

        "10vh": "10vh",
      },

      height: (theme) => ({
        "screen-10": "10vh",
        "screen-20": "20vh",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
      }),
      minHeight: (theme) => ({
        "screen-10": "10vh",
        "screen-20": "20vh",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
        "100px": "100px",
      }),
    },
  },
  variants: {
    extend: {
      // ...
      width: ["hover", "focus"],
      height: ["hover"],
      minHeight: ["hover"],
      position: ["hover", "focus"],
      inset: ["hover", "focus"],
      borderWidth: ["hover", "focus", "last"],
    },
  },

  plugins: [require("./src/pulgins/Heigh.pulgin")],
};
