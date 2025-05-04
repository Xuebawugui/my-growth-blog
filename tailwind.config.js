/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            'h1,h2,h3,h4': {
              color: '#1a202c',
              fontWeight: '600',
              'scroll-margin-top': '100px',
            },
            code: {
              color: '#1a202c',
              backgroundColor: '#f7fafc',
              padding: '2px 4px',
              borderRadius: '4px',
              fontSize: '0.9em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1a202c',
              color: '#e2e8f0',
              overflow: 'auto',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #2d3748',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 