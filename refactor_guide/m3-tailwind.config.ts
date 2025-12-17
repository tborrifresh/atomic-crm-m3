import type { Config } from "tailwindcss";

/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * MATERIAL DESIGN 3 - TAILWIND CONFIGURATION
 * Fresh Collective Design System v2.0
 * 
 * Usage: Replace your existing tailwind.config.ts with this file
 * Repository: freshhq/atomic-crm-m3
 * Generated: December 2025
 * ═══════════════════════════════════════════════════════════════════════════════
 */

const config: Config = {
  // Dark mode: supports both .dark class and data-theme attribute
  darkMode: ["class", '[data-theme="dark"]'],
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // ─────────────────────────────────────────────────────────────────────────
      // M3 COLOR SYSTEM
      // Maps CSS variables from globals.css to Tailwind utilities
      // Usage: bg-primary, text-on-primary, border-outline, etc.
      // ─────────────────────────────────────────────────────────────────────────
      colors: {
        // PRIMARY - Main brand color
        primary: {
          DEFAULT: "var(--md-sys-color-primary)",
          container: "var(--md-sys-color-primary-container)",
        },
        "on-primary": {
          DEFAULT: "var(--md-sys-color-on-primary)",
          container: "var(--md-sys-color-on-primary-container)",
        },
        "inverse-primary": "var(--md-sys-color-inverse-primary)",
        
        // SECONDARY - Supporting color
        secondary: {
          DEFAULT: "var(--md-sys-color-secondary)",
          container: "var(--md-sys-color-secondary-container)",
        },
        "on-secondary": {
          DEFAULT: "var(--md-sys-color-on-secondary)",
          container: "var(--md-sys-color-on-secondary-container)",
        },
        
        // TERTIARY - Accent color
        tertiary: {
          DEFAULT: "var(--md-sys-color-tertiary)",
          container: "var(--md-sys-color-tertiary-container)",
        },
        "on-tertiary": {
          DEFAULT: "var(--md-sys-color-on-tertiary)",
          container: "var(--md-sys-color-on-tertiary-container)",
        },
        
        // ERROR - Error states
        error: {
          DEFAULT: "var(--md-sys-color-error)",
          container: "var(--md-sys-color-error-container)",
        },
        "on-error": {
          DEFAULT: "var(--md-sys-color-on-error)",
          container: "var(--md-sys-color-on-error-container)",
        },
        
        // SURFACE HIERARCHY - M3's layered surface system
        surface: {
          DEFAULT: "var(--md-sys-color-surface)",
          variant: "var(--md-sys-color-surface-variant)",
          dim: "var(--md-sys-color-surface-dim)",
          bright: "var(--md-sys-color-surface-bright)",
          "container-lowest": "var(--md-sys-color-surface-container-lowest)",
          "container-low": "var(--md-sys-color-surface-container-low)",
          container: "var(--md-sys-color-surface-container)",
          "container-high": "var(--md-sys-color-surface-container-high)",
          "container-highest": "var(--md-sys-color-surface-container-highest)",
        },
        "on-surface": {
          DEFAULT: "var(--md-sys-color-on-surface)",
          variant: "var(--md-sys-color-on-surface-variant)",
        },
        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        
        // BACKGROUND
        background: "var(--md-sys-color-background)",
        "on-background": "var(--md-sys-color-on-background)",
        
        // OUTLINE - Borders and dividers
        outline: {
          DEFAULT: "var(--md-sys-color-outline)",
          variant: "var(--md-sys-color-outline-variant)",
        },
        
        // SHADOW & SCRIM
        shadow: "var(--md-sys-color-shadow)",
        scrim: "var(--md-sys-color-scrim)",
        
        // SURFACE TINT
        "surface-tint": "var(--md-sys-color-surface-tint)",
        
        // EXTENDED SEMANTIC COLORS (not official M3)
        success: {
          DEFAULT: "var(--md-sys-color-success)",
          container: "var(--md-sys-color-success-container)",
        },
        "on-success": {
          DEFAULT: "var(--md-sys-color-on-success)",
          container: "var(--md-sys-color-on-success-container)",
        },
        warning: {
          DEFAULT: "var(--md-sys-color-warning)",
          container: "var(--md-sys-color-warning-container)",
        },
        "on-warning": {
          DEFAULT: "var(--md-sys-color-on-warning)",
          container: "var(--md-sys-color-on-warning-container)",
        },
        info: {
          DEFAULT: "var(--md-sys-color-info)",
          container: "var(--md-sys-color-info-container)",
        },
        "on-info": {
          DEFAULT: "var(--md-sys-color-on-info)",
          container: "var(--md-sys-color-on-info-container)",
        },
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 SHAPE SYSTEM
      // Corner radius scale from extra-small to full (pill)
      // Usage: rounded-md3-xs, rounded-md3-sm, rounded-md3-md, etc.
      // ─────────────────────────────────────────────────────────────────────────
      borderRadius: {
        "md3-none": "var(--md-sys-shape-corner-none)",        // 0px
        "md3-xs": "var(--md-sys-shape-corner-extra-small)",   // 4px
        "md3-sm": "var(--md-sys-shape-corner-small)",         // 8px
        "md3-md": "var(--md-sys-shape-corner-medium)",        // 12px
        "md3-lg": "var(--md-sys-shape-corner-large)",         // 16px
        "md3-xl": "var(--md-sys-shape-corner-extra-large)",   // 28px
        "md3-full": "var(--md-sys-shape-corner-full)",        // 9999px (pill)
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 ELEVATION SYSTEM
      // Shadow levels from 0 (flat) to 5 (highest)
      // Usage: shadow-md3-0, shadow-md3-1, shadow-md3-2, etc.
      // ─────────────────────────────────────────────────────────────────────────
      boxShadow: {
        "md3-0": "var(--md-sys-elevation-level0)",  // none
        "md3-1": "var(--md-sys-elevation-level1)",  // Cards, buttons
        "md3-2": "var(--md-sys-elevation-level2)",  // Hover state, menus
        "md3-3": "var(--md-sys-elevation-level3)",  // Dialogs
        "md3-4": "var(--md-sys-elevation-level4)",  // Navigation drawers
        "md3-5": "var(--md-sys-elevation-level5)",  // FAB, snackbars
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 TYPOGRAPHY
      // Font family references
      // Usage: font-md3-brand, font-md3-plain
      // ─────────────────────────────────────────────────────────────────────────
      fontFamily: {
        "md3-brand": "var(--md-ref-typeface-brand)",
        "md3-plain": "var(--md-ref-typeface-plain)",
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 MOTION - DURATION
      // Timing values for animations and transitions
      // Usage: duration-md3-short1, duration-md3-medium2, etc.
      // ─────────────────────────────────────────────────────────────────────────
      transitionDuration: {
        "md3-short1": "var(--md-sys-motion-duration-short1)",     // 50ms
        "md3-short2": "var(--md-sys-motion-duration-short2)",     // 100ms
        "md3-short3": "var(--md-sys-motion-duration-short3)",     // 150ms
        "md3-short4": "var(--md-sys-motion-duration-short4)",     // 200ms
        "md3-medium1": "var(--md-sys-motion-duration-medium1)",   // 250ms
        "md3-medium2": "var(--md-sys-motion-duration-medium2)",   // 300ms
        "md3-medium3": "var(--md-sys-motion-duration-medium3)",   // 350ms
        "md3-medium4": "var(--md-sys-motion-duration-medium4)",   // 400ms
        "md3-long1": "var(--md-sys-motion-duration-long1)",       // 450ms
        "md3-long2": "var(--md-sys-motion-duration-long2)",       // 500ms
        "md3-long3": "var(--md-sys-motion-duration-long3)",       // 550ms
        "md3-long4": "var(--md-sys-motion-duration-long4)",       // 600ms
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 MOTION - EASING
      // Timing functions for natural-feeling animations
      // Usage: ease-md3-standard, ease-md3-emphasized, etc.
      // ─────────────────────────────────────────────────────────────────────────
      transitionTimingFunction: {
        "md3-standard": "var(--md-sys-motion-easing-standard)",
        "md3-standard-decelerate": "var(--md-sys-motion-easing-standard-decelerate)",
        "md3-standard-accelerate": "var(--md-sys-motion-easing-standard-accelerate)",
        "md3-emphasized": "var(--md-sys-motion-easing-emphasized)",
        "md3-emphasized-decelerate": "var(--md-sys-motion-easing-emphasized-decelerate)",
        "md3-emphasized-accelerate": "var(--md-sys-motion-easing-emphasized-accelerate)",
        "md3-linear": "var(--md-sys-motion-easing-linear)",
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 STATE LAYERS
      // Opacity values for hover, focus, pressed states
      // Usage: opacity-md3-hover, opacity-md3-focus, etc.
      // ─────────────────────────────────────────────────────────────────────────
      opacity: {
        "md3-hover": "var(--md-sys-state-hover-opacity)",         // 0.08
        "md3-focus": "var(--md-sys-state-focus-opacity)",         // 0.12
        "md3-pressed": "var(--md-sys-state-pressed-opacity)",     // 0.12
        "md3-dragged": "var(--md-sys-state-dragged-opacity)",     // 0.16
        "md3-disabled": "var(--md-sys-state-disabled-opacity)",   // 0.38
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 SPACING
      // Standard spacing scale (optional - keep Tailwind defaults or customize)
      // ─────────────────────────────────────────────────────────────────────────
      spacing: {
        // Keep Tailwind defaults, add M3-specific if needed
        // "md3-1": "4px",
        // "md3-2": "8px",
        // etc.
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 HEIGHT (for inputs, buttons)
      // ─────────────────────────────────────────────────────────────────────────
      height: {
        "md3-input": "56px",      // M3 text field height
        "md3-button": "40px",     // M3 button height
        "md3-button-sm": "32px",  // Small button
        "md3-button-lg": "48px",  // Large button
        "md3-chip": "32px",       // Chip height
        "md3-nav-rail": "80px",   // Navigation rail width (used as height in some contexts)
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // M3 WIDTH
      // ─────────────────────────────────────────────────────────────────────────
      width: {
        "md3-nav-rail": "80px",           // Navigation rail width
        "md3-nav-drawer": "360px",        // Navigation drawer width
        "md3-side-sheet": "400px",        // Side sheet width
        "md3-dialog-sm": "280px",         // Small dialog
        "md3-dialog": "560px",            // Standard dialog
        "md3-dialog-lg": "800px",         // Large dialog
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // KEYFRAMES (for custom animations)
      // ─────────────────────────────────────────────────────────────────────────
      keyframes: {
        "md3-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "md3-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "md3-scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "md3-scale-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
        "md3-slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "md3-slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "md3-slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "md3-slide-out-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      
      // ─────────────────────────────────────────────────────────────────────────
      // ANIMATION UTILITIES
      // Usage: animate-md3-fade-in, animate-md3-scale-in, etc.
      // ─────────────────────────────────────────────────────────────────────────
      animation: {
        "md3-fade-in": "md3-fade-in var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-emphasized-decelerate)",
        "md3-fade-out": "md3-fade-out var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized-accelerate)",
        "md3-scale-in": "md3-scale-in var(--md-sys-motion-duration-medium2) var(--md-sys-motion-easing-emphasized-decelerate)",
        "md3-scale-out": "md3-scale-out var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized-accelerate)",
        "md3-slide-in-right": "md3-slide-in-right var(--md-sys-motion-duration-medium4) var(--md-sys-motion-easing-emphasized-decelerate)",
        "md3-slide-out-right": "md3-slide-out-right var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized-accelerate)",
        "md3-slide-in-bottom": "md3-slide-in-bottom var(--md-sys-motion-duration-medium4) var(--md-sys-motion-easing-emphasized-decelerate)",
        "md3-slide-out-bottom": "md3-slide-out-bottom var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-emphasized-accelerate)",
      },
    },
  },
  
  plugins: [
    // Add any Tailwind plugins here
    // require("tailwindcss-animate"),  // If using shadcn/ui animations
  ],
};

export default config;
