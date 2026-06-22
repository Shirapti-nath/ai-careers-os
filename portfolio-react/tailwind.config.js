/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#1e1b4b',
        muted: '#64748b',
        surface: '#ffffff',
        card: '#ffffff',
        accent: '#a78bfa',
        'accent-2': '#f472b6',
        'accent-3': '#38bdf8',
        cream: '#fff8f3',
        lavender: '#f3eeff',
        peach: '#fff4eb',
        dusk: '#12101c',
        'dusk-card': '#1a1828',
        'dusk-elevated': '#221f33',
        'dusk-muted': '#9b97b0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(109, 40, 217, 0.12)',
        'soft-lg': '0 12px 48px rgba(109, 40, 217, 0.16)',
        card: '0 8px 32px rgba(30, 27, 75, 0.08)',
        glow: '0 0 40px rgba(167, 139, 250, 0.15)',
        'dusk-soft': '0 4px 20px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
