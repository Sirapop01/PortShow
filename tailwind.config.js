/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-title": "#012E40",
        "primary-content": "#024959",
        "primary-subcontent": "#026773",
        "primary-base": "#3CA6A6",
        "primary-accent": "#FFFFFF",
        "primary-bg": "#F2E3D5",
        "primary-bghover": "#b6b6b6",
      },
    },
  },
  plugins: [],
};
