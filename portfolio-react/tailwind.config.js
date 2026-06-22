/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#1e1648',
        muted: '#6b6894',
        surface: '#ffffff',
        card: '#ffffff',
        accent: '#7c3aed',
        'accent-2': '#ec4899',
        'accent-3': '#06b6d4',
        pearl: '#f8f6ff',
        lavender: '#ede9fe',
        blush: '#fdf2f8',
        skywash: '#eff6ff',
        dusk: '#2a2640',
        'dusk-card': '#353050',
        'dusk-elevated': '#3f3a5c',
        'dusk-muted': '#b4b0cc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 28px rgba(124, 58, 237, 0.14)',
        'soft-lg': '0 12px 48px rgba(124, 58, 237, 0.18)',
        card: '0 8px 32px rgba(30, 22, 72, 0.07)',
        glow: '0 0 48px rgba(236, 72, 153, 0.18)',
        'dusk-soft': '0 4px 24px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
