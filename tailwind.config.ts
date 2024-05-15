import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        mobile : '0px'
      },
      colors: {
        poseidon : '#133955',
        navy: '#333366',
        gold: '#FFD700',
        iNavy: '#D1DB98',
        coldGold : '#999966',
        DarkBlueGray : '#646AA2',
        primaryBlue: '#1A73E8',
        lightBlue: '#E8F0FE',
        white: '#FFFFFF',
        darkBlue: '#174EA6',
      }     
    },

  },
  plugins: [],
}
export default config
