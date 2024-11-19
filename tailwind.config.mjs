/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
