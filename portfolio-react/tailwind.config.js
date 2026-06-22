/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1e1b4b',
        muted: '#64748b',
        surface: '#ffffff',
        card: '#ffffff',
        accent: '#7c3aed',
        'accent-2': '#ec4899',
        'accent-3': '#0ea5e9',
        cream: '#fffbf7',
        lavender: '#f5f3ff',
        peach: '#fff7ed',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(124, 58, 237, 0.08)',
        'soft-lg': '0 12px 48px rgba(124, 58, 237, 0.12)',
        card: '0 8px 32px rgba(30, 27, 75, 0.06)',
        glow: '0 0 40px rgba(236, 72, 153, 0.15)',
      },
    },
  },
  plugins: [],
};
