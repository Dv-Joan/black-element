/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0px, -8px, 0)" },
          "50%": { transform: "translate3d(0px, 8px, 0)" },
        },
      },
      boxShadow: {
        xs: "0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)",
        sm: "0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);",
        md: "0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);",
        lg: "0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);",
      },
      fontFamily: {
        sans: ["InterVariable", "sans-serif"],
        mono: [`"MD IO 0.5"`, "md-io-fallback", "monospace"],
        obviously: ["Obviously", "obviously-regular-fallback", "sans-serif"],
        "obviously-wide": [
          `"Obviously Wide", "obviously-wide-fallback", "sans-serif"`,
        ],
      },
      colors: {
        black: "#17191E",
        // TODO: replace with brand off-white color
        white: "#ffffff",
        "astro-gray": {
          100: "#F2F6FA",
          200: "#BFC1C9",
          300: "#858B98",
          400: "#545864",
          500: "#343841",
          600: "#23262D",
          700: "#17191E",
        },
        "astro-blue": "#3245FF",
        "astro-purple": "#BC52EE",
        "astro-red": "#D83333",
        "astro-pink": {
          light: "#E8C4F9",
          DEFAULT: "#F041FF",
        },
        "astro-orange": "#F8E42E",
        "astro-yellow": "#FF7D54",
        "astro-hover": "#E8C4F9",
      },
      backgroundImage: {
        "blue-purple-gradient":
          "linear-gradient(83.21deg, #3245FF 0%, #B845ED 100%)",
        "blue-green-gradient":
          "linear-gradient(247.23deg, #4AF2C8 0%, #2F4CB3 100%)",
        "red-pink-gradient":
          "linear-gradient(66.77deg, #D83333 0%, #F041FF 100%)",
        "orange-yellow-gradient":
          "linear-gradient(266.93deg, #F8E42E 0%, #FF7D54 100%)",
      },
      height: {
        header: "5rem",
      },
      lineHeight: {
        prose: 1.8125,
      },
      maxWidth: {
        prose: "70ch",
      },
      zIndex: {
        "white-button-fill": -1,
        noise: -2,
        grid: -3,
        blur: -4,
      },
    },
  },
  plugins: [],
};
