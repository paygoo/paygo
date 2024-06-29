/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2157F7",
        },
        foreground: {
          DEFAULT: "#121212",
        },
        background: {
          DEFAULT: "#00000",
        },
        muted: {
          DEFAULT: "#B7C9C7",
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
