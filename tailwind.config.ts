import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '1.5rem',
  		screens: {
  			'2xl': '1200px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			display: ['"Archivo Black"', 'system-ui', 'sans-serif'],
  			body: ['Manrope', 'system-ui', 'sans-serif'],
  			marker: ['Caveat', 'cursive'],
  			sans: [
  				'Manrope',
  				'system-ui',
  				'sans-serif'
  			],
  		},
  		colors: {
  			vacuei: {
  				bg: 'hsl(var(--vacuei-bg))',
  				'bg-alt': 'hsl(var(--vacuei-bg-alt))',
  				paper: 'hsl(var(--vacuei-paper))',
  				ink: 'hsl(var(--vacuei-ink))',
  				'ink-soft': 'hsl(var(--vacuei-ink-soft))',
  				mint: 'hsl(var(--vacuei-mint))',
  				'mint-deep': 'hsl(var(--vacuei-mint-deep))',
  				pop: 'hsl(var(--vacuei-pop))',
  				'pop-text': 'hsl(var(--vacuei-pop-text))',
  				star: 'hsl(var(--vacuei-star))',
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))'
  			},
  			price: 'hsl(var(--price))',
  			'price-old': 'hsl(var(--price-old))',
  			discount: 'hsl(var(--discount))',
  			'surface-elevated': 'hsl(var(--surface-elevated))',
  			'surface-soft': 'hsl(var(--surface-soft))',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			xl: 'calc(var(--radius) + 4px)',
  			'2xl': 'calc(var(--radius) + 8px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
  			'fade-up': {
  				from: { opacity: '0', transform: 'translateY(20px)' },
  				to: { opacity: '1', transform: 'translateY(0)' }
  			},
  			marquee: {
  				from: { transform: 'translateX(0)' },
  				to: { transform: 'translateX(-50%)' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-up': 'fade-up 0.6s ease-out forwards',
  			'marquee': 'marquee 22s linear infinite',
  			'marquee-slow': 'marquee 28s linear infinite',
  		},
  		boxShadow: {
  			'2xs': 'var(--shadow-2xs)',
  			xs: 'var(--shadow-xs)',
  			sm: 'var(--shadow-sm)',
  			md: 'var(--shadow-md)',
  			lg: 'var(--shadow-lg)',
  			xl: 'var(--shadow-xl)',
  			'2xl': 'var(--shadow-2xl)',
  			'pop-sm': '3px 3px 0 hsl(var(--vacuei-ink))',
  			'pop-md': '4px 4px 0 hsl(var(--vacuei-ink))',
  			'pop-lg': '6px 6px 0 hsl(var(--vacuei-ink))',
  			'pop-xl': '8px 8px 0 hsl(var(--vacuei-ink))',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
