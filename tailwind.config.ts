import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* M3 Semantic Colors */
        primary: {
          DEFAULT: "var(--md-sys-color-primary)",
          foreground: "var(--md-sys-color-on-primary)",
          container: "var(--md-sys-color-primary-container)",
          "on-container": "var(--md-sys-color-on-primary-container)",
          inverse: "var(--md-sys-color-inverse-primary)",
        },
        secondary: {
          DEFAULT: "var(--md-sys-color-secondary)",
          foreground: "var(--md-sys-color-on-secondary)",
          container: "var(--md-sys-color-secondary-container)",
          "on-container": "var(--md-sys-color-on-secondary-container)",
        },
        tertiary: {
          DEFAULT: "var(--md-sys-color-tertiary)",
          foreground: "var(--md-sys-color-on-tertiary)",
          container: "var(--md-sys-color-tertiary-container)",
          "on-container": "var(--md-sys-color-on-tertiary-container)",
        },
        error: {
          DEFAULT: "var(--md-sys-color-error)",
          foreground: "var(--md-sys-color-on-error)",
          container: "var(--md-sys-color-error-container)",
          "on-container": "var(--md-sys-color-on-error-container)",
        },
        background: {
          DEFAULT: "var(--md-sys-color-background)",
          foreground: "var(--md-sys-color-on-background)",
        },
        surface: {
          DEFAULT: "var(--md-sys-color-surface)",
          foreground: "var(--md-sys-color-on-surface)",
          variant: "var(--md-sys-color-surface-variant)",
          "on-variant": "var(--md-sys-color-on-surface-variant)",
          dim: "var(--md-sys-color-surface-dim)",
          bright: "var(--md-sys-color-surface-bright)",
          "inverse-surface": "var(--md-sys-color-inverse-surface)",
          "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
          tint: "var(--md-sys-color-surface-tint)",
        },
        "surface-container": {
          lowest: "var(--md-sys-color-surface-container-lowest)",
          low: "var(--md-sys-color-surface-container-low)",
          DEFAULT: "var(--md-sys-color-surface-container)",
          high: "var(--md-sys-color-surface-container-high)",
          highest: "var(--md-sys-color-surface-container-highest)",
        },
        outline: {
          DEFAULT: "var(--md-sys-color-outline)",
          variant: "var(--md-sys-color-outline-variant)",
        },
        shadow: {
          DEFAULT: "var(--md-sys-color-shadow)",
        },
        scrim: {
          DEFAULT: "var(--md-sys-color-scrim)",
        },

        /* shadcn/ui Compatibility Map */
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        none: "var(--md-sys-shape-corner-none)",
        xs: "var(--md-sys-shape-corner-extra-small)",
        sm: "var(--md-sys-shape-corner-small)",
        md: "var(--md-sys-shape-corner-medium)",
        lg: "var(--md-sys-shape-corner-large)",
        xl: "var(--md-sys-shape-corner-extra-large)",
        full: "var(--md-sys-shape-corner-full)",
        /* shadcn/ui compat */
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        none: "var(--md-sys-elevation-level0)",
        "md3-1": "var(--md-sys-elevation-level1)",
        "md3-2": "var(--md-sys-elevation-level2)",
        "md3-3": "var(--md-sys-elevation-level3)",
        "md3-4": "var(--md-sys-elevation-level4)",
        "md3-5": "var(--md-sys-elevation-level5)",
      },
      fontFamily: {
        sans: ["var(--md-sys-typescale-body-large-font)", "sans-serif"],
        brand: ["var(--md-ref-typeface-brand)", "sans-serif"],
        plain: ["var(--md-ref-typeface-plain)", "sans-serif"],
      },
      transitionDuration: {
        short1: "var(--md-sys-motion-duration-short1)",
        short2: "var(--md-sys-motion-duration-short2)",
        short3: "var(--md-sys-motion-duration-short3)",
        short4: "var(--md-sys-motion-duration-short4)",
        medium1: "var(--md-sys-motion-duration-medium1)",
        medium2: "var(--md-sys-motion-duration-medium2)",
        medium3: "var(--md-sys-motion-duration-medium3)",
        medium4: "var(--md-sys-motion-duration-medium4)",
        long1: "var(--md-sys-motion-duration-long1)",
        long2: "var(--md-sys-motion-duration-long2)",
        long3: "var(--md-sys-motion-duration-long3)",
        long4: "var(--md-sys-motion-duration-long4)",
        extralong1: "var(--md-sys-motion-duration-extra-long1)",
        extralong2: "var(--md-sys-motion-duration-extra-long2)",
        extralong3: "var(--md-sys-motion-duration-extra-long3)",
        extralong4: "var(--md-sys-motion-duration-extra-long4)",
      },
      transitionTimingFunction: {
        standard: "var(--md-sys-motion-easing-standard)",
        "standard-decelerate":
          "var(--md-sys-motion-easing-standard-decelerate)",
        "standard-accelerate":
          "var(--md-sys-motion-easing-standard-accelerate)",
        emphasized: "var(--md-sys-motion-easing-emphasized)",
        "emphasized-decelerate":
          "var(--md-sys-motion-easing-emphasized-decelerate)",
        "emphasized-accelerate":
          "var(--md-sys-motion-easing-emphasized-accelerate)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
