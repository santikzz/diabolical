/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesque-display': ['Grotesque Display', 'sans-serif'],
        'geist-mono': ['Geist mono', 'sans-serif'],
        'geist-sans': ['Geist sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

