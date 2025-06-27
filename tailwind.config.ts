import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.teal['300'],
          lighter: colors.teal['200'],
          dark: colors.teal['600'],
          'lighter-dark': colors.teal['500']
        },
        muted: {
          DEFAULT: colors.zinc['300'],
          dark: colors.zinc['700']
        }
      },
      spacing: {
        18: '4.5rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xs: '480px'
    }
  },
  plugins: []
} satisfies Config
