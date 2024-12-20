/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        redColour:'#eb0000',
        blackColour:'#0f100f'
      },
      fontFamily:{
        monoFonts:['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
      'infinite-scroll-r':'infinite-scroll-r 25s linear infinite',
      'infinite-scroll-benifits':'infinite-scroll-benifits 5s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'infinite-scroll-r':{
        from:{ transform: 'translateX(-100%)'},
        to: { transform: 'translateX(0%)' },
      },
      'infinite-scroll-benifits': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      
    }  
  },
  plugins: [],
}