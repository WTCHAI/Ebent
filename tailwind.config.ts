import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
        'bounce-delay-200': 'bounce 1s infinite 0.2s',
        'bounce-delay-400': 'bounce 1s infinite 0.4s',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        mobile: '0px',
      },
      colors: {
        coldGold: '#999966',
        primaryBlue: '#1A73E8',
        lightBlue: '#E8F0FE',
        baseGreen: '#74AA9C',
        midGreen: '#66A586',
        darkGreen: '#006241',
      },
    },
  },
  plugins: [],
};

export default config;
