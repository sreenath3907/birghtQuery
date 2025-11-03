import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      backgroundImage: {
        grid:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='minorGrid' width='8' height='8' patternUnits='userSpaceOnUse'><rect width='100%' height='100%' fill='%23ebf3fe'/><path d='M 8 0 L 0 0 0 8' fill='none' stroke='%23d6daea' stroke-opacity='0.35' stroke-width='1'/></pattern><pattern id='grid' width='64' height='64' patternUnits='userSpaceOnUse'><rect width='100%' height='100%' fill='url(%23minorGrid)'/><path d='M 64 0 L 0 0 0 64' fill='none' stroke='%23d6daea' stroke-opacity='0.7' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>\")",
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        info: {
          DEFAULT: '#d8c6ff',
          foreground: '#2d174d',
        },
        success: {
          DEFAULT: '#0a6b62',
          foreground: '#e6f4f2',
        },
        safeguard: {
          DEFAULT: '#19329b',
          foreground: '#e3ebff',
        },
        navy: '#0b1a4a',
        midnight: '#0b0f26',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        subtle: '0 20px 40px -24px rgba(13, 21, 48, 0.2)',
        card: '0 30px 60px -32px rgba(12, 23, 59, 0.24)',
        'inner-smooth': 'inset 0 1px 0 0 rgba(13, 21, 48, 0.08)',
        elevated:
          '0 32px 80px -20px rgba(12, 23, 59, 0.32), 0 18px 50px -30px rgba(12, 23, 59, 0.18), 0 0 0 1px rgba(12, 23, 59, 0.05)',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(to right, rgba(10, 20, 50, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(10, 20, 50, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config
