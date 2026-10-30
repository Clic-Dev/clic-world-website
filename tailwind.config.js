/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Redesign palette — brand blue sampled from the CLIC logo (#00499C)
        navy: {
          700: '#183064',
          800: '#10224A',
          900: '#0A1733',
          950: '#060F24'
        },
        brand: {
          50: '#EEF4FC',
          100: '#D7E5F7',
          200: '#AFCBEF',
          300: '#7DA9E2',
          400: '#3F7FD0',
          500: '#1462BC',
          600: '#00499C',
          700: '#003B80',
          800: '#062F63',
          900: '#0A2448'
        },
        gold: {
          300: '#F3CB6B',
          400: '#E8B33A',
          500: '#E0A21B',
          600: '#B9820E'
        },
        paper: '#F5F7FA',
        // Token allocation chart (validated categorical order)
        chart: {
          1: '#1F5FB8',
          2: '#E0A21B',
          3: '#1A9E8A',
          4: '#7A5BC7'
        },
        'clic-green': {
          50: '#d1fae5',
          100: '#a7f3d0',
          200: '#6ee7b7',
          300: '#34d399',
          400: '#10b981',
          500: '#059669',
          600: '#047857',
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22'
        },
        'clic-gold': {
          50: '#fef3c7',
          100: '#fde68a',
          200: '#fcd34d',
          300: '#fbbf24',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03'
        },
        'clic-blue': {
          50: '#dbeafe',
          100: '#bfdbfe',
          200: '#93c5fd',
          300: '#60a5fa',
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e293b'
        }
      },
      fontFamily: {
        'display': ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'clic-gradient': 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        'clic-dark-gradient': 'linear-gradient(135deg, #065f46 0%, #1e40af 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    'bg-green-50',
    'bg-yellow-50', 
    'bg-blue-50',
    'bg-gray-50',
    'text-green-600',
    'text-yellow-600',
    'text-blue-600',
    'text-gray-600',
    'border-green-500',
    'border-yellow-500',
    'border-blue-500',
    'border-gray-500'
  ]
}
