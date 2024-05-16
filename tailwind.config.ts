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
        coldGold : '#999966',
        primaryBlue: '#1A73E8',
        lightBlue: '#E8F0FE',
        baseGreen :'#74AA9C',
        midGreen: '#66A586' ,
        DarkGreen: '#006241',
      }     
    },

  },
  plugins: [],
}
export default config
