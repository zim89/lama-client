import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '20px',
        md: '20px',
        lg: '32px',
        xl: '120px'
      }
    },
    colors: {
      //   black: '#080709',
      //   white: '#FFFFFF',
      // 'gray-100': '#FCFBFE',
      // 'gray-300': '#E5E5E6',
      // 'gray-500': '#CCCACD',
      // 'gray-700': '#99969C',
      // 'gray-900': '#727076',
      'violet-300': '#FAF6FD',
      'violet-500': '#CD9EFF',
      'violet-700': '#A663EE',
      'amber-300': '#FBF3E9',
      'amber-500': '#F0D2AC',
      'indigo-300': '#EBEEFA',
      'indigo-500': '#BFCCF8',
      'indigo-700': '#9DAEE7',
      'pink-300': '#FBE9F1',
      'pink-500': '#FBBBD7',
      'pink-700': '#EB92B9',
      'blue-500': '#1F93ED',
      'blue-700': '#1977BF',
      // 'red-500': '#F50711',
      // 'green-500': '#0AC213',
      // 'yellow-500': '#F6F689',

      // *** NEW PALLETTE ***
      // Black & White
      black: '#000000',
      white: '#FFFFFF',

      // Gray
      'gray-100': '#FAFAFC',
      'gray-300': '#DEDEE0',
      'gray-500': '#BBBBBD',
      'gray-700': '#8C8C8F',
      'gray-900': '#616161',

      // Alerts
      'red-500': '#EF473A',
      'green-500': '#4CBB4A',
      'yellow-500': '#FAD850',

      // Boy
      'boy-300': '#E6F3FA',
      'boy-500': '#B4E0FA',
      'boy-700': '#99D3FF',

      // Girl
      'girl-300': '#FBE9F1',
      'girl-500': '#FBC4DC',
      'girl-700': '#FFAED2',

      // Secondary
      'secondary-100': '#EDFAF8',
      'secondary-300': '#D5F7F1',
      'secondary-500': '#89CCC1',
      'secondary-700': '#6BBFB2',

      // Accent
      'accent-100': '#F7F8FF',
      'accent-300': '#EDEFFD',
      'accent-500': '#95A1F2',
      'accent-700': '#7381EE',

      //Links
      'link-500': '#1F93ED',
      'link-700': '#1977BF',

      // Text
      muted: '#616161'
    },

    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
  // future: {
  //   hoverOnlyWhenSupported: true
  // }
} satisfies Config

export default config
