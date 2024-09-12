/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        app: "0.5rem",
        info: "1.5rem",
      },
      boxShadow: {
        custom: "0px 15px 12px 0px #15171C",
      },
      backgroundColor: {
        "app-dark": "#15171C",
      },
      opacity: {
        12: "0.12",
      },
    },
  },
  plugins: [],
};
