module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: 'var(--black)',

        primary: {
          lighter: 'var(--primary-lighter)',
          light: 'var(--primary-light)',
          default: 'var(--primary-default)',
          dark: 'var(--primary-dark)',
        },

        secondary: {
          lighter: 'var(--secondary-lighter)',
          light: 'var(--secondary-light)',
          default: 'var(--secondary-default)',
          dark: 'var(--secondary-dark)',
        },

        error: {
          lighter: 'var(--error-lighter)',
          light: 'var(--error-light)',
          default: 'var(--error-default)',
          dark: 'var(--error-dark)',
        },

        warning: {
          lighter: 'var(--warning-lighter)',
          light: 'var(--warning-light)',
          default: 'var(--warning-default)',
          dark: 'var(--warning-dark)',
        },

        success: {
          lighter: 'var(--success-lighter)',
          light: 'var(--success-light)',
          default: 'var(--success-default)',
          dark: 'var(--success-dark)',
        },

        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-400)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },

        cadet: {
          50: 'var(--cadet-50)',
          100: 'var(--cadet-100)',
          200: 'var(--cadet-200)',
          300: 'var(--cadet-300)',
          400: 'var(--cadet-400)',
          500: 'var(--cadet-400)',
          600: 'var(--cadet-600)',
          700: 'var(--cadet-700)',
          800: 'var(--cadet-800)',
          900: 'var(--cadet-900)',
        },

        brown: {
          50: 'var(-brown-50)',
          100: 'var(--brown-100)',
          200: 'var(--brown-200)',
          300: 'var(--brown-300)',
          400: 'var(--brown-400)',
          500: 'var(--brown-500)',
          600: 'var(--brown-600)',
          700: 'var(--brown-700)',
          800: 'var(--brown-800)',
          900: 'var(--brown-900)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
