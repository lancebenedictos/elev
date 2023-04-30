/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/home-bg-2.png')",
        "hero-image-mobile": "url('/home-bg-mobile.png')",
        "hero-image-2": "url('/bg-2.png')",
        "hero-image-2-mobile": "url('/mobile-bg.png')",
        "second-shoe": "url('/second-shoe-m.png')",
      },

      backgroundColor: {
        blue: "#19CFF6",
      },
    },
  },
  plugins: [],
};
