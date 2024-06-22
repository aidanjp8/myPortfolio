/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  mode: 'jit', // Just-in-Time mode for faster compilation (optional)
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    // Add more paths as needed for your project
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


