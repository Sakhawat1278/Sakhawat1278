/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#05060f',
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0764',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
        'inner-glow': 'inset 0 0 30px rgba(139, 92, 246, 0.15)',
        card: '0 24px 60px -25px rgba(15, 23, 42, 0.45)',
      },
      dropShadow: {
        glow: '0 35px 45px rgba(139, 92, 246, 0.35)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0, rgba(139, 92, 246, 0.04) 30%, transparent 70%)',
        'noise': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\" opacity=\"0.25\"/%3E%3C/svg%3E')",
        'radial': 'radial-gradient(circle at top, rgba(139, 92, 246, 0.2), rgba(15, 23, 42, 0.95))',
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite alternate',
        'float': 'float 10s ease-in-out infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-10px) translateX(10px)' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotate3d(1, 1, 0, 6deg)' },
          '50%': { transform: 'rotate3d(-1, -1, 0, 6deg)' },
        },
      },
    },
  },
  plugins: [],
}

