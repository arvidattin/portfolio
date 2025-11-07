/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-accent': {
            
            DEFAULT: 'hsl(var(--portfolio-accent))', 
            light: 'hsl(var(--portfolio-accent-light))',
            foreground: 'hsl(var(--portfolio-accent-foreground))'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
  
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
      },
      accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
      },
      dark: {
        base: '#121212',
        accent: '#64ffda', 
        light: '#ccd6f6',
      },
      }
    },
  },
  plugins: [],
}