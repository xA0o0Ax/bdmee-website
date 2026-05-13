/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bd: {
          text: '#b8f0cc',
          'text-muted': 'rgba(184, 240, 204, 0.45)',
          accent: '#00ff87',
          bright: '#39ff14',
          dim: '#00cc6a',
          teal: '#00e5b0',
          gene: '#b157ff',
          orange: '#ff7043',
          dark: '#010a06',
          surface: '#050f0a',
          'surface-2': '#091a11',
          border: 'rgba(0, 255, 135, 0.1)',
          'border-bright': 'rgba(0, 255, 135, 0.25)',
          green: '#00e676',
          yellow: '#ffb300',
          red: '#ff4444',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bio-pulse": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        "glow-float": {
          "0%, 100%": { transform: "translate(-50%, -50%) translateY(0)", opacity: "0.4" },
          "50%": { transform: "translate(-50%, -50%) translateY(-15px)", opacity: "0.8" },
        },
        "mycelium-grow": {
          "0%": { strokeDashoffset: "800" },
          "100%": { strokeDashoffset: "0" },
        },
        "scan-h": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.6", filter: "blur(12px)" },
          "50%": { opacity: "1", filter: "blur(20px)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "mask-path-reveal": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bio-pulse": "bio-pulse 3s ease-in-out infinite",
        "glow-float": "glow-float 6s ease-in-out infinite",
        "mycelium-grow": "mycelium-grow 4s ease-out forwards",
        "scan-h": "scan-h 3s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "scroll-bounce": "scroll-bounce 2s ease-in-out infinite",
        "float": "float 7s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
        "mask-path-reveal": "mask-path-reveal 12s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
