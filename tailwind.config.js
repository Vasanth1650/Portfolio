/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Added jsx, ts, tsx for more flexibility
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: '#1E40AF',   // A rich blue color
        secondary: '#F59E0B', // A warm amber color
        accent: '#34D399',    // A vibrant green for accents
        neutral: '#F3F4F6',   // Light neutral for backgrounds
        dark: '#1F2937',      // Dark grey for text or background
      },
      fontFamily: {
        // Adding custom fonts
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        // Custom spacing for padding/margins
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        // Custom border radius
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
      },
      screens: {
        // Custom responsive breakpoints
        'xs': '480px',  // For extra small devices
        '3xl': '1920px', // For very large screens
      },
    },
  },
  plugins: [
  ],
}
