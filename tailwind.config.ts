import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '20px',
        md: '40px',
        lg: '60px',
        xl: '120px',
      },
    },
    colors: {
      black: '#080709',
      white: '#FFFFFF',
      'gray-100': '#FCFBFE',
      'gray-300': '#E5E5E6',
      'gray-500': '#CCCACD',
      'gray-700': '#99969C',
      'gray-900': '#7F7C83',
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
      'red-500': '#F50711',
      'green-500': '#0AC213',
      'yellow-500': '#F6F689',
    },
    extend: {
      strokeWidth: {
        '1.5': '1.5px',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
