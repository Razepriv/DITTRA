import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand color - teal from the design
        primary: {
          DEFAULT: '#14B8A6', // Teal-500
          light: '#2DD4BF',   // Teal-400
          dark: '#0D9488',    // Teal-600
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Tech/digital accent colors
        cyber: {
          DEFAULT: '#06B6D4',
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        tech: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          light: '#60A5FA',
          dark: '#2563EB',
        },
        // Neon/Futuristic accent colors
        neon: {
          cyan: '#00F0FF',
          teal: '#00FFD1',
          blue: '#00A3FF',
          purple: '#A855F7',
          pink: '#EC4899',
        },
        // Keep existing grays
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'grid-pattern': 'linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)',
        'radial-glow': 'radial-gradient(circle at center, rgba(20, 184, 166, 0.2) 0%, transparent 70%)',
        'cyber-grid': 'repeating-linear-gradient(0deg, rgba(20, 184, 166, 0.1) 0px, transparent 1px, transparent 40px, rgba(20, 184, 166, 0.1) 41px), repeating-linear-gradient(90deg, rgba(20, 184, 166, 0.1) 0px, transparent 1px, transparent 40px, rgba(20, 184, 166, 0.1) 41px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'magnetic-hover': 'magnetic-hover 0.3s ease-out',
        'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-flow': 'border-flow 3s linear infinite',
        'data-flow': 'data-flow 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
            opacity: '1'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.7), 0 0 60px rgba(0, 217, 255, 0.5)',
            opacity: '0.9'
          },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.4), 0 0 40px rgba(20, 184, 166, 0.2), inset 0 0 20px rgba(20, 184, 166, 0.1)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.8), 0 0 80px rgba(20, 184, 166, 0.4), inset 0 0 30px rgba(20, 184, 166, 0.2)',
            filter: 'brightness(1.1)'
          },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'border-flow': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'data-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
export default config
