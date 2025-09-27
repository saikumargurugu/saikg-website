export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_backend/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Example: add a unique Google Font
        display: ['"Orbitron"', 'Arial', 'sans-serif'],
        body: ['"Quicksand"', 'Arial', 'sans-serif'],
      },
      colors: {
        reddishBrown: '#330000',
        taupe: '#73605B',
        peachyBrown: '#D09683',
        textDark: 'var(--color-text-dark)',
        textLight: 'var(--color-text-light)',
        black: '#000',
        white: '#fff',
      },
  backgroundImage: {},
      animation: {
        'bg-move': 'bgMove 10s ease-in-out infinite alternate',
        'glow-brown': 'glowBrown 2s infinite alternate',
        'border-glow-brown': 'borderGlowBrown 2s infinite alternate',
      },
      keyframes: {},
    },
  },
  darkMode: 'class',
  plugins: [],
}
