/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#007785",
        "primary-color-10": "rgba(0, 119, 133, 0.1)", // 10% opacity
        "primary-color-25": "rgba(0, 119, 133, 0.25)", // 25% opacity
        "primary-color-50": "rgba(0, 119, 133, 0.5)", // 50% opacity
        "primary-color-75": "rgba(0, 119, 133, 0.75)", // 75% opacity
        "secondary-color": "#00acb6",
        "third-color": "#015458",
        white: "#d8d8d8",
        black: "#151515",
      },
      borderRadius: {
        default: "20px",
        sm: "10px",
      },
      fontFamily: {
        blueocean: ["BlueOcean", "sans-serif"],
        gehili: ["GeHili", "sans-serif"],
      },
      transitionProperty: {
        default: "all",
      },
      transitionDuration: {
        default: "0.5s",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        "hero-bg": "url('/images/bg-1.jpg')",
      },
    },
    screens: {
      sm: "640px", // For small screens, set the max-width for container
      md: "768px", // For medium screens
      lg: "1024px", // For large screens
      xl: "1280px", // For extra-large screens
      "2xl": "1536px", // For extra-extra-large screens
    },
  },
  plugins: [],
};
