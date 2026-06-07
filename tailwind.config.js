/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper:   { DEFAULT: '#F5F1EA', 2: '#FAF7F0', 3: '#EBE5DA', 4: '#DDD5C5' },
        ink:     { DEFAULT: '#1C1A17', 2: '#2A2620', 3: '#3A352E' },
        muted:   { DEFAULT: '#6E665C', 2: '#8E867B' },
        gold:    { DEFAULT: '#C8932E', soft: '#E8C36B', deep: '#8F6817' },
        clay:    { DEFAULT: '#C25C2E', soft: '#E89878' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Source Serif Pro', 'Georgia', 'serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'drift':      'drift 9s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%':      { transform: 'translateY(-8px) translateX(4px)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
      },
      boxShadow: {
        'paper':    '0 4px 24px -8px rgba(28,26,23,0.10), 0 2px 6px -2px rgba(28,26,23,0.06)',
        'paper-lg': '0 24px 64px -16px rgba(28,26,23,0.18), 0 8px 24px -8px rgba(28,26,23,0.08)',
      },
    },
  },
  plugins: [],
};
