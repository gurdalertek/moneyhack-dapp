module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f4f5f5",
        secondary: "#4F46E5",
        secondarylight: "#8B5CF6",
        black: "#041727",
        white: "#f4f5f5",
        gray: "#ccd0d3",
        purple: "#a877c8",
        green: "a2db5a",
        gold: "#f7bb29",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
