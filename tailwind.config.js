/* eslint-disable no-undef */

const primaryColors = {
  50: 'var(--color-primary-50)',
  100: 'var(--color-primary-100)',
  300: 'var(--color-primary-300)',
  500: 'var(--color-primary-500)',
  700: 'var(--color-primary-700)',
  900: 'var(--color-primary-900)',
}

const primaryInvertedColors = {
  50: 'var(--color-primary-inverted-50)',
  100: 'var(--color-primary-inverted-100)',
  300: 'var(--color-primary-inverted-300)',
  500: 'var(--color-primary-inverted-500)',
  700: 'var(--color-primary-inverted-700)',
  900: 'var(--color-primary-inverted-900)',
}

const primaryForegroundColors = {
  50: 'var(--color-primary-foreground-50)',
  100: 'var(--color-primary-foreground-100)',
  300: 'var(--color-primary-foreground-300)',
  500: 'var(--color-primary-foreground-500)',
  700: 'var(--color-primary-foreground-700)',
  900: 'var(--color-primary-foreground-900)',
}

const backgroundColors = {
  50: 'var(--color-background-50)',
  100: 'var(--color-background-100)',
  300: 'var(--color-background-300)',
  500: 'var(--color-background-500)',
  700: 'var(--color-background-700)',
  900: 'var(--color-background-900)',
  '50-backdrop': 'var(--color-background-50-backdrop)',
  '100-backdrop': 'var(--color-background-100-backdrop)',
  '500-backdrop': 'var(--color-background-500-backdrop)',
  '900-backdrop': 'var(--color-background-900-backdrop)',
  darken: 'var(--color-background-darken)',
}

const foregroundColors = {
  50: 'var(--color-foreground-50)',
  100: 'var(--color-foreground-100)',
  300: 'var(--color-foreground-300)',
  500: 'var(--color-foreground-500)',
  700: 'var(--color-foreground-700)',
  900: 'var(--color-foreground-900)',
}

module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './contexts/**/*.{js,ts,jsx,tsx}',
      './styles/**/*.{sass,scss,css}',
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Noto Serif JP', 'serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    // colors: {},
    extend: {
      screens: {
        xs: '400px',
      },
      textColor: {
        ...foregroundColors,
        primary: primaryColors,
        on: {
          primary: primaryInvertedColors,
        },
        fg: {
          primary: primaryForegroundColors,
        },
      },
      backgroundColor: {
        ...backgroundColors,
        primary: primaryColors,
        fg: {
          ...foregroundColors,
          primary: primaryColors,
        },
      },
      borderColor: {
        background: backgroundColors,
        foreground: foregroundColors,
        primary: primaryColors,
        bg: {
          primary: primaryColors,
        },
      },
      ringColor: {
        background: backgroundColors,
        foreground: foregroundColors,
        primary: primaryColors,
      },
      padding: {
        '1/3': '33.333%',
        '1/2': '50%',
        '2/3': '66.666%',
        full: '100%',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
