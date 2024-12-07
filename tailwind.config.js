/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}", // Untuk file App.tsx
    "./src/screens/**/*.{js,jsx,ts,tsx}", // Untuk file di dalam folder src/screens/
    "./src/navigation/**/*.{js,jsx,ts,tsx}", // Jika Anda menggunakan file di dalam folder navigation/
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}