# Material Design 3 (M3) Design Tokens

**SupaCommand Center Design System**

*Complete Design Token Reference for Fresh Collective Ecosystem*

---

**Version:** 2.0  
**Date:** December 16, 2025  
**Author:** Tony (Director of Marketing)  
**Scope:** All apps in ecosystem (Half Bak'd, Buzz, Fruitia, Fresh Farms, Happi Hemp, SupaCommand)

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Token Architecture](#2-token-architecture)
3. [Color Tokens - Complete Reference](#3-color-tokens---complete-reference)
4. [Typography Tokens](#4-typography-tokens)
5. [Shape Tokens](#5-shape-tokens)
6. [Motion Tokens](#6-motion-tokens)
7. [Elevation Tokens](#7-elevation-tokens)
8. [State Layer Tokens](#8-state-layer-tokens)
9. [Component Token Examples](#9-component-token-examples)
10. [JSON Token Export](#10-json-token-export)
11. [Brand Customization Guide](#11-brand-customization-guide)
12. [Implementation Guide](#12-implementation-guide)
13. [Tools & Resources](#13-tools--resources)

---

## 1. Quick Start

### Copy-Paste CSS Variables

Copy this into your project's root CSS file to get started immediately:

```css
/* Material Design 3 - Complete Token Set */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

:root {
  /* ═══════════════════════════════════════════════════════════
     REFERENCE TOKENS - Foundation Values
     ═══════════════════════════════════════════════════════════ */
  
  /* Typeface */
  --md-ref-typeface-brand: 'Roboto', sans-serif;
  --md-ref-typeface-plain: 'Roboto', sans-serif;
  --md-ref-typeface-weight-regular: 400;
  --md-ref-typeface-weight-medium: 500;
  --md-ref-typeface-weight-bold: 700;

  /* ═══════════════════════════════════════════════════════════
     SYSTEM COLOR TOKENS - Light Theme (Default)
     ═══════════════════════════════════════════════════════════ */
  
  /* Primary */
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #EADDFF;
  --md-sys-color-on-primary-container: #21005D;
  --md-sys-color-inverse-primary: #D0BCFF;
  
  /* Secondary */
  --md-sys-color-secondary: #625B71;
  --md-sys-color-on-secondary: #FFFFFF;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-on-secondary-container: #1D192B;
  
  /* Tertiary */
  --md-sys-color-tertiary: #7D5260;
  --md-sys-color-on-tertiary: #FFFFFF;
  --md-sys-color-tertiary-container: #FFD8E4;
  --md-sys-color-on-tertiary-container: #31111D;
  
  /* Error */
  --md-sys-color-error: #B3261E;
  --md-sys-color-on-error: #FFFFFF;
  --md-sys-color-error-container: #F9DEDC;
  --md-sys-color-on-error-container: #410E0B;
  
  /* Surface Hierarchy */
  --md-sys-color-surface: #FEF7FF;
  --md-sys-color-on-surface: #1D1B20;
  --md-sys-color-surface-variant: #E7E0EC;
  --md-sys-color-on-surface-variant: #49454F;
  --md-sys-color-surface-container-lowest: #FFFFFF;
  --md-sys-color-surface-container-low: #F7F2FA;
  --md-sys-color-surface-container: #F3EDF7;
  --md-sys-color-surface-container-high: #ECE6F0;
  --md-sys-color-surface-container-highest: #E6E0E9;
  --md-sys-color-surface-dim: #DED8E1;
  --md-sys-color-surface-bright: #FEF7FF;
  --md-sys-color-inverse-surface: #322F35;
  --md-sys-color-inverse-on-surface: #F5EFF7;
  
  /* Background */
  --md-sys-color-background: #FEF7FF;
  --md-sys-color-on-background: #1D1B20;
  
  /* Outline */
  --md-sys-color-outline: #79747E;
  --md-sys-color-outline-variant: #CAC4D0;
  
  /* Shadow & Scrim */
  --md-sys-color-shadow: #000000;
  --md-sys-color-scrim: #000000;
  
  /* Surface Tint */
  --md-sys-color-surface-tint: #6750A4;

  /* ═══════════════════════════════════════════════════════════
     TYPOGRAPHY TOKENS
     ═══════════════════════════════════════════════════════════ */
  
  /* Display */
  --md-sys-typescale-display-large-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-large-size: 57px;
  --md-sys-typescale-display-large-line-height: 64px;
  --md-sys-typescale-display-large-weight: 400;
  --md-sys-typescale-display-large-tracking: -0.25px;
  
  --md-sys-typescale-display-medium-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-medium-size: 45px;
  --md-sys-typescale-display-medium-line-height: 52px;
  --md-sys-typescale-display-medium-weight: 400;
  --md-sys-typescale-display-medium-tracking: 0px;
  
  --md-sys-typescale-display-small-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-display-small-size: 36px;
  --md-sys-typescale-display-small-line-height: 44px;
  --md-sys-typescale-display-small-weight: 400;
  --md-sys-typescale-display-small-tracking: 0px;
  
  /* Headline */
  --md-sys-typescale-headline-large-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-large-size: 32px;
  --md-sys-typescale-headline-large-line-height: 40px;
  --md-sys-typescale-headline-large-weight: 400;
  --md-sys-typescale-headline-large-tracking: 0px;
  
  --md-sys-typescale-headline-medium-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-medium-size: 28px;
  --md-sys-typescale-headline-medium-line-height: 36px;
  --md-sys-typescale-headline-medium-weight: 400;
  --md-sys-typescale-headline-medium-tracking: 0px;
  
  --md-sys-typescale-headline-small-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-headline-small-size: 24px;
  --md-sys-typescale-headline-small-line-height: 32px;
  --md-sys-typescale-headline-small-weight: 400;
  --md-sys-typescale-headline-small-tracking: 0px;
  
  /* Title */
  --md-sys-typescale-title-large-font: var(--md-ref-typeface-brand);
  --md-sys-typescale-title-large-size: 22px;
  --md-sys-typescale-title-large-line-height: 28px;
  --md-sys-typescale-title-large-weight: 400;
  --md-sys-typescale-title-large-tracking: 0px;
  
  --md-sys-typescale-title-medium-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-title-medium-size: 16px;
  --md-sys-typescale-title-medium-line-height: 24px;
  --md-sys-typescale-title-medium-weight: 500;
  --md-sys-typescale-title-medium-tracking: 0.15px;
  
  --md-sys-typescale-title-small-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-title-small-size: 14px;
  --md-sys-typescale-title-small-line-height: 20px;
  --md-sys-typescale-title-small-weight: 500;
  --md-sys-typescale-title-small-tracking: 0.1px;
  
  /* Body */
  --md-sys-typescale-body-large-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-large-size: 16px;
  --md-sys-typescale-body-large-line-height: 24px;
  --md-sys-typescale-body-large-weight: 400;
  --md-sys-typescale-body-large-tracking: 0.5px;
  
  --md-sys-typescale-body-medium-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-medium-size: 14px;
  --md-sys-typescale-body-medium-line-height: 20px;
  --md-sys-typescale-body-medium-weight: 400;
  --md-sys-typescale-body-medium-tracking: 0.25px;
  
  --md-sys-typescale-body-small-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-body-small-size: 12px;
  --md-sys-typescale-body-small-line-height: 16px;
  --md-sys-typescale-body-small-weight: 400;
  --md-sys-typescale-body-small-tracking: 0.4px;
  
  /* Label */
  --md-sys-typescale-label-large-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-large-size: 14px;
  --md-sys-typescale-label-large-line-height: 20px;
  --md-sys-typescale-label-large-weight: 500;
  --md-sys-typescale-label-large-tracking: 0.1px;
  
  --md-sys-typescale-label-medium-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-medium-size: 12px;
  --md-sys-typescale-label-medium-line-height: 16px;
  --md-sys-typescale-label-medium-weight: 500;
  --md-sys-typescale-label-medium-tracking: 0.5px;
  
  --md-sys-typescale-label-small-font: var(--md-ref-typeface-plain);
  --md-sys-typescale-label-small-size: 11px;
  --md-sys-typescale-label-small-line-height: 16px;
  --md-sys-typescale-label-small-weight: 500;
  --md-sys-typescale-label-small-tracking: 0.5px;

  /* ═══════════════════════════════════════════════════════════
     SHAPE TOKENS
     ═══════════════════════════════════════════════════════════ */
  --md-sys-shape-corner-none: 0px;
  --md-sys-shape-corner-extra-small: 4px;
  --md-sys-shape-corner-small: 8px;
  --md-sys-shape-corner-medium: 12px;
  --md-sys-shape-corner-large: 16px;
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-shape-corner-full: 9999px;

  /* ═══════════════════════════════════════════════════════════
     MOTION TOKENS
     ═══════════════════════════════════════════════════════════ */
  
  /* Duration */
  --md-sys-motion-duration-short1: 50ms;
  --md-sys-motion-duration-short2: 100ms;
  --md-sys-motion-duration-short3: 150ms;
  --md-sys-motion-duration-short4: 200ms;
  --md-sys-motion-duration-medium1: 250ms;
  --md-sys-motion-duration-medium2: 300ms;
  --md-sys-motion-duration-medium3: 350ms;
  --md-sys-motion-duration-medium4: 400ms;
  --md-sys-motion-duration-long1: 450ms;
  --md-sys-motion-duration-long2: 500ms;
  --md-sys-motion-duration-long3: 550ms;
  --md-sys-motion-duration-long4: 600ms;
  --md-sys-motion-duration-extra-long1: 700ms;
  --md-sys-motion-duration-extra-long2: 800ms;
  --md-sys-motion-duration-extra-long3: 900ms;
  --md-sys-motion-duration-extra-long4: 1000ms;
  
  /* Easing */
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);
  --md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);
  --md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);
  --md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);
  --md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);

  /* ═══════════════════════════════════════════════════════════
     ELEVATION TOKENS
     ═══════════════════════════════════════════════════════════ */
  --md-sys-elevation-level0: none;
  --md-sys-elevation-level1: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);
  --md-sys-elevation-level2: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15);
  --md-sys-elevation-level3: 0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15);
  --md-sys-elevation-level4: 0px 2px 3px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15);
  --md-sys-elevation-level5: 0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15);

  /* ═══════════════════════════════════════════════════════════
     STATE LAYER OPACITY TOKENS
     ═══════════════════════════════════════════════════════════ */
  --md-sys-state-hover-state-layer-opacity: 0.08;
  --md-sys-state-focus-state-layer-opacity: 0.12;
  --md-sys-state-pressed-state-layer-opacity: 0.12;
  --md-sys-state-dragged-state-layer-opacity: 0.16;
}

/* ═══════════════════════════════════════════════════════════
   DARK THEME OVERRIDE
   ═══════════════════════════════════════════════════════════ */
[data-theme="dark"],
.dark,
@media (prefers-color-scheme: dark) {
  :root {
    /* Primary */
    --md-sys-color-primary: #D0BCFF;
    --md-sys-color-on-primary: #381E72;
    --md-sys-color-primary-container: #4F378B;
    --md-sys-color-on-primary-container: #EADDFF;
    --md-sys-color-inverse-primary: #6750A4;
    
    /* Secondary */
    --md-sys-color-secondary: #CCC2DC;
    --md-sys-color-on-secondary: #332D41;
    --md-sys-color-secondary-container: #4A4458;
    --md-sys-color-on-secondary-container: #E8DEF8;
    
    /* Tertiary */
    --md-sys-color-tertiary: #EFB8C8;
    --md-sys-color-on-tertiary: #492532;
    --md-sys-color-tertiary-container: #633B48;
    --md-sys-color-on-tertiary-container: #FFD8E4;
    
    /* Error */
    --md-sys-color-error: #F2B8B5;
    --md-sys-color-on-error: #601410;
    --md-sys-color-error-container: #8C1D18;
    --md-sys-color-on-error-container: #F9DEDC;
    
    /* Surface Hierarchy */
    --md-sys-color-surface: #141218;
    --md-sys-color-on-surface: #E6E0E9;
    --md-sys-color-surface-variant: #49454F;
    --md-sys-color-on-surface-variant: #CAC4D0;
    --md-sys-color-surface-container-lowest: #0F0D13;
    --md-sys-color-surface-container-low: #1D1B20;
    --md-sys-color-surface-container: #211F26;
    --md-sys-color-surface-container-high: #2B2930;
    --md-sys-color-surface-container-highest: #36343B;
    --md-sys-color-surface-dim: #141218;
    --md-sys-color-surface-bright: #3B383E;
    --md-sys-color-inverse-surface: #E6E0E9;
    --md-sys-color-inverse-on-surface: #322F35;
    
    /* Background */
    --md-sys-color-background: #141218;
    --md-sys-color-on-background: #E6E0E9;
    
    /* Outline */
    --md-sys-color-outline: #938F99;
    --md-sys-color-outline-variant: #49454F;
    
    /* Surface Tint */
    --md-sys-color-surface-tint: #D0BCFF;
  }
}
```

---

## 2. Token Architecture

### Three-Tier Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    COMPONENT TOKENS                              │
│  Applied to specific UI elements                                 │
│  Example: --md-filled-button-container-color: primary            │
├─────────────────────────────────────────────────────────────────┤
│                      SYSTEM TOKENS                               │
│  Semantic roles that define design system character              │
│  Example: --md-sys-color-primary: #6750A4                       │
├─────────────────────────────────────────────────────────────────┤
│                    REFERENCE TOKENS                              │
│  Raw values (hex colors, pixel sizes, font names)               │
│  Example: --md-ref-palette-primary40: #6750A4                   │
└─────────────────────────────────────────────────────────────────┘
```

### Token Naming Convention

```
--md-[tier]-[category]-[property]-[variant]

Tiers: ref, sys, [component-name]
Categories: color, typescale, shape, motion, elevation
```

---

## 3. Color Tokens - Complete Reference

### Color Role Overview (29 Roles)

| Role | Light Theme | Dark Theme | Usage |
|------|-------------|------------|-------|
| **Primary** | #6750A4 | #D0BCFF | Key actions, active states |
| **On Primary** | #FFFFFF | #381E72 | Text/icons on primary |
| **Primary Container** | #EADDFF | #4F378B | Secondary actions, FABs |
| **On Primary Container** | #21005D | #EADDFF | Text/icons on primary container |
| **Secondary** | #625B71 | #CCC2DC | Less prominent components |
| **On Secondary** | #FFFFFF | #332D41 | Text/icons on secondary |
| **Secondary Container** | #E8DEF8 | #4A4458 | Filter chips, toggles |
| **On Secondary Container** | #1D192B | #E8DEF8 | Text/icons on secondary container |
| **Tertiary** | #7D5260 | #EFB8C8 | Contrast accents |
| **On Tertiary** | #FFFFFF | #492532 | Text/icons on tertiary |
| **Tertiary Container** | #FFD8E4 | #633B48 | Tertiary backgrounds |
| **On Tertiary Container** | #31111D | #FFD8E4 | Text/icons on tertiary container |
| **Error** | #B3261E | #F2B8B5 | Error states |
| **On Error** | #FFFFFF | #601410 | Text/icons on error |
| **Error Container** | #F9DEDC | #8C1D18 | Error backgrounds |
| **On Error Container** | #410E0B | #F9DEDC | Text/icons on error container |
| **Surface** | #FEF7FF | #141218 | Main backgrounds |
| **On Surface** | #1D1B20 | #E6E0E9 | Primary text |
| **Surface Variant** | #E7E0EC | #49454F | Alternative backgrounds |
| **On Surface Variant** | #49454F | #CAC4D0 | Secondary text |
| **Outline** | #79747E | #938F99 | Borders, dividers |
| **Outline Variant** | #CAC4D0 | #49454F | Subtle borders |
| **Background** | #FEF7FF | #141218 | App background |
| **On Background** | #1D1B20 | #E6E0E9 | Text on background |
| **Inverse Surface** | #322F35 | #E6E0E9 | Snackbars, tooltips |
| **Inverse On Surface** | #F5EFF7 | #322F35 | Text on inverse surface |
| **Inverse Primary** | #D0BCFF | #6750A4 | Links on inverse surface |
| **Shadow** | #000000 | #000000 | Elevation shadows |
| **Scrim** | #000000 | #000000 | Modal overlays |

### Surface Container Hierarchy

```
Surface Container Hierarchy (lowest to highest elevation):
┌─────────────────────────────────────────────────────────┐
│ Lowest    │ Low       │ Default   │ High      │ Highest │
├───────────┼───────────┼───────────┼───────────┼─────────┤
│ #FFFFFF   │ #F7F2FA   │ #F3EDF7   │ #ECE6F0   │ #E6E0E9 │ Light
│ #0F0D13   │ #1D1B20   │ #211F26   │ #2B2930   │ #36343B │ Dark
└───────────┴───────────┴───────────┴───────────┴─────────┘
```

---

## 4. Typography Tokens

### Type Scale Summary

| Style | Size | Line Height | Weight | Tracking | Use Case |
|-------|------|-------------|--------|----------|----------|
| **Display Large** | 57px | 64px | 400 | -0.25px | Hero text |
| **Display Medium** | 45px | 52px | 400 | 0px | Large headlines |
| **Display Small** | 36px | 44px | 400 | 0px | Section headers |
| **Headline Large** | 32px | 40px | 400 | 0px | Page titles |
| **Headline Medium** | 28px | 36px | 400 | 0px | Section titles |
| **Headline Small** | 24px | 32px | 400 | 0px | Card titles |
| **Title Large** | 22px | 28px | 400 | 0px | App bar titles |
| **Title Medium** | 16px | 24px | 500 | 0.15px | List headers |
| **Title Small** | 14px | 20px | 500 | 0.1px | Tab labels |
| **Body Large** | 16px | 24px | 400 | 0.5px | Primary body text |
| **Body Medium** | 14px | 20px | 400 | 0.25px | Secondary body text |
| **Body Small** | 12px | 16px | 400 | 0.4px | Captions |
| **Label Large** | 14px | 20px | 500 | 0.1px | Buttons, chips |
| **Label Medium** | 12px | 16px | 500 | 0.5px | Input labels |
| **Label Small** | 11px | 16px | 500 | 0.5px | Badge text |

### Usage Classes (CSS)

```css
.text-display-large {
  font-family: var(--md-sys-typescale-display-large-font);
  font-size: var(--md-sys-typescale-display-large-size);
  line-height: var(--md-sys-typescale-display-large-line-height);
  font-weight: var(--md-sys-typescale-display-large-weight);
  letter-spacing: var(--md-sys-typescale-display-large-tracking);
}

.text-headline-large {
  font-family: var(--md-sys-typescale-headline-large-font);
  font-size: var(--md-sys-typescale-headline-large-size);
  line-height: var(--md-sys-typescale-headline-large-line-height);
  font-weight: var(--md-sys-typescale-headline-large-weight);
  letter-spacing: var(--md-sys-typescale-headline-large-tracking);
}

.text-body-large {
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  line-height: var(--md-sys-typescale-body-large-line-height);
  font-weight: var(--md-sys-typescale-body-large-weight);
  letter-spacing: var(--md-sys-typescale-body-large-tracking);
}

.text-label-large {
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  line-height: var(--md-sys-typescale-label-large-line-height);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
}
```

---

## 5. Shape Tokens

### Corner Radius Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `corner-none` | 0px | Rectangular elements |
| `corner-extra-small` | 4px | Text fields, chips |
| `corner-small` | 8px | Buttons, cards (small) |
| `corner-medium` | 12px | Cards, dialogs |
| `corner-large` | 16px | Large cards, sheets |
| `corner-extra-large` | 28px | FABs, navigation drawers |
| `corner-full` | 9999px | Circular buttons, avatars |

### Component Shape Mapping

```
┌─────────────────────────────────────────────────────────┐
│ Component          │ Shape Token                        │
├────────────────────┼────────────────────────────────────┤
│ Text Field         │ corner-extra-small (4px)           │
│ Chip               │ corner-small (8px)                 │
│ Button             │ corner-full (9999px)               │
│ Card               │ corner-medium (12px)               │
│ Dialog             │ corner-extra-large (28px)          │
│ Bottom Sheet       │ corner-extra-large (28px) top only │
│ FAB                │ corner-large (16px)                │
│ Extended FAB       │ corner-large (16px)                │
│ Navigation Drawer  │ corner-large (16px) end only       │
└────────────────────┴────────────────────────────────────┘
```

---

## 6. Motion Tokens

### Duration Scale

| Token | Duration | Use Case |
|-------|----------|----------|
| `short1` | 50ms | Micro-interactions |
| `short2` | 100ms | Icon changes |
| `short3` | 150ms | Button press |
| `short4` | 200ms | Fade transitions |
| `medium1` | 250ms | Expand/collapse |
| `medium2` | 300ms | Card transitions |
| `medium3` | 350ms | Modal entry |
| `medium4` | 400ms | Complex animations |
| `long1` | 450ms | Page transitions |
| `long2` | 500ms | Large reveal |
| `long3` | 550ms | Complex reveals |
| `long4` | 600ms | Hero animations |
| `extra-long1-4` | 700-1000ms | Large page transitions |

### Easing Functions

| Token | Curve | Use Case |
|-------|-------|----------|
| `standard` | cubic-bezier(0.2, 0, 0, 1) | Most transitions |
| `standard-decelerate` | cubic-bezier(0, 0, 0, 1) | Enter animations |
| `standard-accelerate` | cubic-bezier(0.3, 0, 1, 1) | Exit animations |
| `emphasized` | cubic-bezier(0.2, 0, 0, 1) | Hero animations |
| `emphasized-decelerate` | cubic-bezier(0.05, 0.7, 0.1, 1) | Enter with bounce |
| `emphasized-accelerate` | cubic-bezier(0.3, 0, 0.8, 0.15) | Exit with anticipation |
| `linear` | cubic-bezier(0, 0, 1, 1) | Color transitions |

---

## 7. Elevation Tokens

### Elevation Scale

| Level | Shadow Definition | Use Case |
|-------|-------------------|----------|
| **Level 0** | none | Flat surfaces |
| **Level 1** | 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15) | Cards, buttons |
| **Level 2** | 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15) | Elevated cards |
| **Level 3** | 0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15) | Menus, FABs |
| **Level 4** | 0px 2px 3px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15) | Navigation drawers |
| **Level 5** | 0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15) | Modals, dialogs |

### Tonal Elevation (Dark Theme)

In M3 dark theme, elevation is also expressed through **surface tint**:

```css
/* Dark theme tonal elevation */
.elevation-1-dark {
  background-color: color-mix(
    in srgb, 
    var(--md-sys-color-surface), 
    var(--md-sys-color-surface-tint) 5%
  );
}

.elevation-2-dark {
  background-color: color-mix(
    in srgb, 
    var(--md-sys-color-surface), 
    var(--md-sys-color-surface-tint) 8%
  );
}

.elevation-3-dark {
  background-color: color-mix(
    in srgb, 
    var(--md-sys-color-surface), 
    var(--md-sys-color-surface-tint) 11%
  );
}
```

---

## 8. State Layer Tokens

State layers communicate interaction states without changing the underlying color:

```css
/* State Layer Implementation */
.interactive-element {
  position: relative;
}

.interactive-element::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-color: currentColor;
  opacity: 0;
  transition: opacity var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.interactive-element:hover::before {
  opacity: var(--md-sys-state-hover-state-layer-opacity); /* 0.08 */
}

.interactive-element:focus::before {
  opacity: var(--md-sys-state-focus-state-layer-opacity); /* 0.12 */
}

.interactive-element:active::before {
  opacity: var(--md-sys-state-pressed-state-layer-opacity); /* 0.12 */
}

.interactive-element[data-dragging]::before {
  opacity: var(--md-sys-state-dragged-state-layer-opacity); /* 0.16 */
}
```

---

## 9. Component Token Examples

### Filled Button

```css
.md-button-filled {
  /* Container */
  background-color: var(--md-sys-color-primary);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  min-height: 40px;
  
  /* Label */
  color: var(--md-sys-color-on-primary);
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  
  /* Interaction */
  transition: all var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
  border: none;
  cursor: pointer;
}

.md-button-filled:hover {
  box-shadow: var(--md-sys-elevation-level1);
}

.md-button-filled:disabled {
  background-color: color-mix(in srgb, var(--md-sys-color-on-surface) 12%, transparent);
  color: color-mix(in srgb, var(--md-sys-color-on-surface) 38%, transparent);
}
```

### Card Component

```css
.md-card {
  background-color: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: 16px;
}

.md-card-elevated {
  background-color: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-level1);
  padding: 16px;
}

.md-card-outlined {
  background-color: var(--md-sys-color-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  border: 1px solid var(--md-sys-color-outline-variant);
  padding: 16px;
}

.md-card-title {
  font-family: var(--md-sys-typescale-title-large-font);
  font-size: var(--md-sys-typescale-title-large-size);
  line-height: var(--md-sys-typescale-title-large-line-height);
  color: var(--md-sys-color-on-surface);
  margin-bottom: 8px;
}

.md-card-body {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  line-height: var(--md-sys-typescale-body-medium-line-height);
  color: var(--md-sys-color-on-surface-variant);
}
```

### Text Field

```css
.md-text-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.md-text-field-container {
  display: flex;
  align-items: center;
  background-color: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0;
  border-bottom: 1px solid var(--md-sys-color-on-surface-variant);
  padding: 8px 16px;
  min-height: 56px;
  transition: border-color var(--md-sys-motion-duration-short4) var(--md-sys-motion-easing-standard);
}

.md-text-field-container:focus-within {
  border-bottom: 2px solid var(--md-sys-color-primary);
}

.md-text-field-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  color: var(--md-sys-color-on-surface);
  outline: none;
}

.md-text-field-label {
  font-family: var(--md-sys-typescale-body-small-font);
  font-size: var(--md-sys-typescale-body-small-size);
  color: var(--md-sys-color-on-surface-variant);
}
```

---

## 10. JSON Token Export

### For Design Tools & Other LLMs

```json
{
  "version": "2.0",
  "name": "Material Design 3 - SupaCommand",
  "tokens": {
    "color": {
      "light": {
        "primary": "#6750A4",
        "onPrimary": "#FFFFFF",
        "primaryContainer": "#EADDFF",
        "onPrimaryContainer": "#21005D",
        "secondary": "#625B71",
        "onSecondary": "#FFFFFF",
        "secondaryContainer": "#E8DEF8",
        "onSecondaryContainer": "#1D192B",
        "tertiary": "#7D5260",
        "onTertiary": "#FFFFFF",
        "tertiaryContainer": "#FFD8E4",
        "onTertiaryContainer": "#31111D",
        "error": "#B3261E",
        "onError": "#FFFFFF",
        "errorContainer": "#F9DEDC",
        "onErrorContainer": "#410E0B",
        "surface": "#FEF7FF",
        "onSurface": "#1D1B20",
        "surfaceVariant": "#E7E0EC",
        "onSurfaceVariant": "#49454F",
        "surfaceContainerLowest": "#FFFFFF",
        "surfaceContainerLow": "#F7F2FA",
        "surfaceContainer": "#F3EDF7",
        "surfaceContainerHigh": "#ECE6F0",
        "surfaceContainerHighest": "#E6E0E9",
        "outline": "#79747E",
        "outlineVariant": "#CAC4D0",
        "background": "#FEF7FF",
        "onBackground": "#1D1B20",
        "inverseSurface": "#322F35",
        "inverseOnSurface": "#F5EFF7",
        "inversePrimary": "#D0BCFF",
        "shadow": "#000000",
        "scrim": "#000000",
        "surfaceTint": "#6750A4"
      },
      "dark": {
        "primary": "#D0BCFF",
        "onPrimary": "#381E72",
        "primaryContainer": "#4F378B",
        "onPrimaryContainer": "#EADDFF",
        "secondary": "#CCC2DC",
        "onSecondary": "#332D41",
        "secondaryContainer": "#4A4458",
        "onSecondaryContainer": "#E8DEF8",
        "tertiary": "#EFB8C8",
        "onTertiary": "#492532",
        "tertiaryContainer": "#633B48",
        "onTertiaryContainer": "#FFD8E4",
        "error": "#F2B8B5",
        "onError": "#601410",
        "errorContainer": "#8C1D18",
        "onErrorContainer": "#F9DEDC",
        "surface": "#141218",
        "onSurface": "#E6E0E9",
        "surfaceVariant": "#49454F",
        "onSurfaceVariant": "#CAC4D0",
        "surfaceContainerLowest": "#0F0D13",
        "surfaceContainerLow": "#1D1B20",
        "surfaceContainer": "#211F26",
        "surfaceContainerHigh": "#2B2930",
        "surfaceContainerHighest": "#36343B",
        "outline": "#938F99",
        "outlineVariant": "#49454F",
        "background": "#141218",
        "onBackground": "#E6E0E9",
        "inverseSurface": "#E6E0E9",
        "inverseOnSurface": "#322F35",
        "inversePrimary": "#6750A4",
        "shadow": "#000000",
        "scrim": "#000000",
        "surfaceTint": "#D0BCFF"
      }
    },
    "typography": {
      "displayLarge": { "font": "Roboto", "size": 57, "lineHeight": 64, "weight": 400, "tracking": -0.25 },
      "displayMedium": { "font": "Roboto", "size": 45, "lineHeight": 52, "weight": 400, "tracking": 0 },
      "displaySmall": { "font": "Roboto", "size": 36, "lineHeight": 44, "weight": 400, "tracking": 0 },
      "headlineLarge": { "font": "Roboto", "size": 32, "lineHeight": 40, "weight": 400, "tracking": 0 },
      "headlineMedium": { "font": "Roboto", "size": 28, "lineHeight": 36, "weight": 400, "tracking": 0 },
      "headlineSmall": { "font": "Roboto", "size": 24, "lineHeight": 32, "weight": 400, "tracking": 0 },
      "titleLarge": { "font": "Roboto", "size": 22, "lineHeight": 28, "weight": 400, "tracking": 0 },
      "titleMedium": { "font": "Roboto", "size": 16, "lineHeight": 24, "weight": 500, "tracking": 0.15 },
      "titleSmall": { "font": "Roboto", "size": 14, "lineHeight": 20, "weight": 500, "tracking": 0.1 },
      "bodyLarge": { "font": "Roboto", "size": 16, "lineHeight": 24, "weight": 400, "tracking": 0.5 },
      "bodyMedium": { "font": "Roboto", "size": 14, "lineHeight": 20, "weight": 400, "tracking": 0.25 },
      "bodySmall": { "font": "Roboto", "size": 12, "lineHeight": 16, "weight": 400, "tracking": 0.4 },
      "labelLarge": { "font": "Roboto", "size": 14, "lineHeight": 20, "weight": 500, "tracking": 0.1 },
      "labelMedium": { "font": "Roboto", "size": 12, "lineHeight": 16, "weight": 500, "tracking": 0.5 },
      "labelSmall": { "font": "Roboto", "size": 11, "lineHeight": 16, "weight": 500, "tracking": 0.5 }
    },
    "shape": {
      "cornerNone": 0,
      "cornerExtraSmall": 4,
      "cornerSmall": 8,
      "cornerMedium": 12,
      "cornerLarge": 16,
      "cornerExtraLarge": 28,
      "cornerFull": 9999
    },
    "elevation": {
      "level0": "none",
      "level1": "0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)",
      "level2": "0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)",
      "level3": "0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)",
      "level4": "0px 2px 3px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15)",
      "level5": "0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15)"
    },
    "motion": {
      "duration": {
        "short1": 50, "short2": 100, "short3": 150, "short4": 200,
        "medium1": 250, "medium2": 300, "medium3": 350, "medium4": 400,
        "long1": 450, "long2": 500, "long3": 550, "long4": 600,
        "extraLong1": 700, "extraLong2": 800, "extraLong3": 900, "extraLong4": 1000
      },
      "easing": {
        "standard": "cubic-bezier(0.2, 0, 0, 1)",
        "standardDecelerate": "cubic-bezier(0, 0, 0, 1)",
        "standardAccelerate": "cubic-bezier(0.3, 0, 1, 1)",
        "emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "emphasizedDecelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
        "emphasizedAccelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
        "linear": "cubic-bezier(0, 0, 1, 1)"
      }
    },
    "state": {
      "hoverOpacity": 0.08,
      "focusOpacity": 0.12,
      "pressedOpacity": 0.12,
      "draggedOpacity": 0.16
    }
  }
}
```

---

## 11. Brand Customization Guide

### Generating Custom Themes

Use **Material Theme Builder** to generate brand-specific palettes:

1. Go to: https://material-foundation.github.io/material-theme-builder/
2. Input your brand's primary color (e.g., Half Bak'd purple)
3. Export as CSS, JSON, or Figma
4. Replace the reference and system tokens

### Fresh Collective Brand Colors

| Brand | Primary Source | Notes |
|-------|----------------|-------|
| **Half Bak'd** | `#______` | _[Add your hex]_ |
| **Buzz** | `#______` | _[Add your hex]_ |
| **Fruitia** | `#______` | _[Add your hex]_ |
| **Fresh Farms** | `#______` | _[Add your hex]_ |
| **Happi Hemp** | `#______` | _[Add your hex]_ |
| **SupaCommand** | `#6750A4` | Default M3 purple |

### Custom Brand Template

```css
/* Brand: [BRAND_NAME] */
/* Generated from source color: [HEX_COLOR] */

:root {
  /* Override system tokens */
  --md-sys-color-primary: /* generated */;
  --md-sys-color-on-primary: /* generated */;
  --md-sys-color-primary-container: /* generated */;
  --md-sys-color-on-primary-container: /* generated */;
  /* ... continue for all 29 color roles */
}
```

---

## 12. Implementation Guide

### Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--md-sys-color-primary)',
        'on-primary': 'var(--md-sys-color-on-primary)',
        'primary-container': 'var(--md-sys-color-primary-container)',
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',
        secondary: 'var(--md-sys-color-secondary)',
        'on-secondary': 'var(--md-sys-color-on-secondary)',
        'secondary-container': 'var(--md-sys-color-secondary-container)',
        tertiary: 'var(--md-sys-color-tertiary)',
        error: 'var(--md-sys-color-error)',
        'on-error': 'var(--md-sys-color-on-error)',
        surface: 'var(--md-sys-color-surface)',
        'on-surface': 'var(--md-sys-color-on-surface)',
        'surface-variant': 'var(--md-sys-color-surface-variant)',
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'surface-container': 'var(--md-sys-color-surface-container)',
        'surface-container-high': 'var(--md-sys-color-surface-container-high)',
        outline: 'var(--md-sys-color-outline)',
        'outline-variant': 'var(--md-sys-color-outline-variant)',
      },
      borderRadius: {
        'md3-xs': 'var(--md-sys-shape-corner-extra-small)',
        'md3-sm': 'var(--md-sys-shape-corner-small)',
        'md3-md': 'var(--md-sys-shape-corner-medium)',
        'md3-lg': 'var(--md-sys-shape-corner-large)',
        'md3-xl': 'var(--md-sys-shape-corner-extra-large)',
        'md3-full': 'var(--md-sys-shape-corner-full)',
      },
      boxShadow: {
        'md3-1': 'var(--md-sys-elevation-level1)',
        'md3-2': 'var(--md-sys-elevation-level2)',
        'md3-3': 'var(--md-sys-elevation-level3)',
        'md3-4': 'var(--md-sys-elevation-level4)',
        'md3-5': 'var(--md-sys-elevation-level5)',
      },
      transitionDuration: {
        'md3-short': 'var(--md-sys-motion-duration-short4)',
        'md3-medium': 'var(--md-sys-motion-duration-medium2)',
        'md3-long': 'var(--md-sys-motion-duration-long2)',
      },
      transitionTimingFunction: {
        'md3-standard': 'var(--md-sys-motion-easing-standard)',
        'md3-emphasized': 'var(--md-sys-motion-easing-emphasized)',
      },
    },
  },
}
```

### React Theme Provider

```typescript
// theme.ts
export const m3Theme = {
  colors: {
    primary: 'var(--md-sys-color-primary)',
    onPrimary: 'var(--md-sys-color-on-primary)',
    primaryContainer: 'var(--md-sys-color-primary-container)',
    onPrimaryContainer: 'var(--md-sys-color-on-primary-container)',
    secondary: 'var(--md-sys-color-secondary)',
    onSecondary: 'var(--md-sys-color-on-secondary)',
    secondaryContainer: 'var(--md-sys-color-secondary-container)',
    tertiary: 'var(--md-sys-color-tertiary)',
    error: 'var(--md-sys-color-error)',
    surface: 'var(--md-sys-color-surface)',
    onSurface: 'var(--md-sys-color-on-surface)',
    surfaceVariant: 'var(--md-sys-color-surface-variant)',
    onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
    outline: 'var(--md-sys-color-outline)',
  },
  typography: {
    displayLarge: 'var(--md-sys-typescale-display-large-font) var(--md-sys-typescale-display-large-weight) var(--md-sys-typescale-display-large-size)/var(--md-sys-typescale-display-large-line-height)',
    headlineLarge: 'var(--md-sys-typescale-headline-large-font) var(--md-sys-typescale-headline-large-weight) var(--md-sys-typescale-headline-large-size)/var(--md-sys-typescale-headline-large-line-height)',
    titleLarge: 'var(--md-sys-typescale-title-large-font) var(--md-sys-typescale-title-large-weight) var(--md-sys-typescale-title-large-size)/var(--md-sys-typescale-title-large-line-height)',
    bodyLarge: 'var(--md-sys-typescale-body-large-font) var(--md-sys-typescale-body-large-weight) var(--md-sys-typescale-body-large-size)/var(--md-sys-typescale-body-large-line-height)',
    labelLarge: 'var(--md-sys-typescale-label-large-font) var(--md-sys-typescale-label-large-weight) var(--md-sys-typescale-label-large-size)/var(--md-sys-typescale-label-large-line-height)',
  },
  shape: {
    small: 'var(--md-sys-shape-corner-small)',
    medium: 'var(--md-sys-shape-corner-medium)',
    large: 'var(--md-sys-shape-corner-large)',
    full: 'var(--md-sys-shape-corner-full)',
  },
};
```

---

## 13. Tools & Resources

### Official Resources

| Resource | URL | Description |
|----------|-----|-------------|
| M3 Docs | m3.material.io | Complete specification |
| Theme Builder | material-foundation.github.io/material-theme-builder | Generate themes from source color |
| Figma Kit | figma.com/community (search "Material 3") | Official M3 Figma library |
| Material Web | material-web.dev | Web components |
| GitHub Tokens | github.com/material-foundation/material-tokens | Official DSP (archived) |

### NPM Packages

```bash
# Material color utilities (generate palettes at runtime)
npm install @material/material-color-utilities

# Material Web Components
npm install @material/web
```

### Figma Plugin

Use **Tokens Studio for Figma** to sync design tokens:
1. Install from Figma Community
2. Import this JSON as token set
3. Sync changes between Figma and code

---

**Document Version:** 2.0  
**Last Updated:** December 16, 2025  
**Maintained By:** Tony @ Fresh Collective

---

*This document serves as the single source of truth for M3 design tokens across the SupaCommand Center ecosystem. Add to repos and share with LLMs for consistent design implementation.*
