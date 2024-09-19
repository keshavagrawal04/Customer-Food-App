module.exports = {
  content: [
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FD631F",
        "black-light": "#00000080",
        light: "rgba(255, 238, 230, 1)",
        "secondary-green": "#2DAD78",
        "secondary-gray": "#3C3A45",
        "secondary-gray-light": "rgba(60, 58, 69, 0.5)",
        white: "#FFFFFF",
        light: "#0000001A",
        error: "#C1272D",
      },
      fontFamily: {
        "proxima-nova-regular": ["Proxima-Nova-Regular"],
        "proxima-nova-regular-italic": ["Proxima-Nova-Regular-Italic"],
        "proxima-nova-bold": ["Proxima-Nova-Bold"],
        "proxima-nova-semibold": ["Proxima-Nova-Semibold"],
        "montserrat-bold": ["Montserrat-Bold"],
        "montserrat-semibold": ["Montserrat-Semibold"],
        "montserrat-regular": ["Montserrat-Regular"],
      },
    },
  },
  plugins: [],
};
