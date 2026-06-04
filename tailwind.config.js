export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_backend/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'Arial', 'sans-serif'],
      },
      colors: {
        accent:   '#6366f1',
        'accent-light': '#818cf8',
        'accent-end': '#8b5cf6',
        'bg-primary': '#050c18',
        'bg-surface': '#0a1628',
      },
      animation: {
        'float': 'floatY 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%':   { 'background-position': '-200% center' },
          '100%': { 'background-position': '200% center' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
