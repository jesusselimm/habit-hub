/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        // HabitHub Color Palette - Sadece 7 renk
        black: 'var(--color-black)',
        'dark-blue': 'var(--color-dark-blue)',
        blue: 'var(--color-blue)',
        cream: 'var(--color-cream)',
        gray: 'var(--color-gray)',
        'light-gray': 'var(--color-light-gray)',
        white: 'var(--color-white)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
