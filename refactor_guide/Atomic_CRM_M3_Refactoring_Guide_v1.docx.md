  
**ATOMIC CRM M3**  
Refactoring Guide

Material Design 3 Theme Implementation  
For Fresh Collective Ecosystem

Version 1.0  
December 2025

**freshhq/atomic-crm-m3**

# **1\. Executive Summary**

This guide provides step-by-step instructions for converting the Atomic CRM open-source project into a Material Design 3 (M3) themed template. The resulting repository (freshhq/atomic-crm-m3) will serve as a reusable foundation for all Fresh Collective applications.

## **1.1 Project Goals**

* Create a reusable M3-themed React/Supabase template

* Maintain 100% CSS variable-based theming for easy customization

* Preserve all Atomic CRM functionality while updating visuals

* Enable brand-switching via CSS variable overrides

* Support light and dark mode out of the box

## **1.2 Scope & Timeline**

| Phase | Activities | Duration |
| :---- | :---- | :---- |
| Phase 1: Foundation | Fork repo, setup CSS variables, Tailwind config | 4 hours |
| Phase 2: Components | Update all shadcn/ui components to M3 spec | 12 hours |
| Phase 3: Typography | Implement M3 type scale, add Roboto font | 2 hours |
| Phase 4: Polish | Dark mode, motion, elevation, testing | 6 hours |
| **TOTAL** |  | **\~24 hours (3 days)** |

# **2\. GitHub Repository Setup**

## **2.1 Fork the Repository**

1. Go to github.com/marmelab/atomic-crm  
2. Click 'Fork' button in top right  
3. Set owner to 'freshhq' organization  
4. Rename to 'atomic-crm-m3'  
5. Uncheck 'Copy the main branch only' to get all branches  
6. Click 'Create fork'

## **2.2 Repository Settings**

After forking, configure these settings:

* Settings → General → Check 'Template repository' (enables 'Use this template' button)

* Settings → Branches → Add branch protection rule for 'main'

* Settings → General → Update description: 'Material Design 3 themed CRM template for Fresh Collective'

* Add topics: material-design-3, m3, react, supabase, shadcn-ui, crm, template

## **2.3 Project Structure**

Key directories to modify:

atomic-crm-m3/  
├── src/  
│   ├── app/  
│   │   └── globals.css        ← M3 CSS variables (MAIN FILE)  
│   ├── components/  
│   │   └── ui/                ← shadcn/ui components to update  
│   │       ├── button.tsx  
│   │       ├── card.tsx  
│   │       ├── dialog.tsx  
│   │       ├── input.tsx  
│   │       └── ...  
│   └── lib/  
│       └── utils.ts           ← Tailwind merge utilities  
├── tailwind.config.ts         ← Extend with M3 tokens  
├── public/  
│   └── fonts/                 ← Add Roboto if self-hosting  
└── package.json

# **3\. M3 CSS Variables (globals.css)**

This is the core of the M3 theme system. All values are defined as CSS variables for maximum flexibility. Copy this entire block into your globals.css file.

## **3.1 Reference Tokens (Foundation)**

Reference tokens are the raw values that system tokens reference. They rarely change per-brand.

/\* ═══════════════════════════════════════════════════════════════════════════  
   MATERIAL DESIGN 3 \- COMPLETE TOKEN SYSTEM  
   Fresh Collective Design System v2.0  
   ═══════════════════════════════════════════════════════════════════════════ \*/  
   
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700\&display=swap');  
   
:root {  
  /\* ═══════════════════════════════════════════════════════════  
     REFERENCE TOKENS \- Foundation Values (Rarely Changed)  
     ═══════════════════════════════════════════════════════════ \*/  
    
  /\* Typeface Reference \*/  
  \--md-ref-typeface-brand: 'Roboto', sans-serif;  
  \--md-ref-typeface-plain: 'Roboto', sans-serif;  
  \--md-ref-typeface-weight-regular: 400;  
  \--md-ref-typeface-weight-medium: 500;  
  \--md-ref-typeface-weight-bold: 700;  
   
  /\* Primary Palette (Purple \- Default M3) \*/  
  \--md-ref-palette-primary-0: \#000000;  
  \--md-ref-palette-primary-10: \#21005D;  
  \--md-ref-palette-primary-20: \#381E72;  
  \--md-ref-palette-primary-30: \#4F378B;  
  \--md-ref-palette-primary-40: \#6750A4;  
  \--md-ref-palette-primary-50: \#7F67BE;  
  \--md-ref-palette-primary-60: \#9A82DB;  
  \--md-ref-palette-primary-70: \#B69DF8;  
  \--md-ref-palette-primary-80: \#D0BCFF;  
  \--md-ref-palette-primary-90: \#EADDFF;  
  \--md-ref-palette-primary-95: \#F6EDFF;  
  \--md-ref-palette-primary-99: \#FFFBFE;  
  \--md-ref-palette-primary-100: \#FFFFFF;  
   
  /\* Secondary Palette \*/  
  \--md-ref-palette-secondary-0: \#000000;  
  \--md-ref-palette-secondary-10: \#1D192B;  
  \--md-ref-palette-secondary-20: \#332D41;  
  \--md-ref-palette-secondary-30: \#4A4458;  
  \--md-ref-palette-secondary-40: \#625B71;  
  \--md-ref-palette-secondary-50: \#7A7289;  
  \--md-ref-palette-secondary-60: \#958DA5;  
  \--md-ref-palette-secondary-70: \#B0A7C0;  
  \--md-ref-palette-secondary-80: \#CCC2DC;  
  \--md-ref-palette-secondary-90: \#E8DEF8;  
  \--md-ref-palette-secondary-95: \#F6EDFF;  
  \--md-ref-palette-secondary-99: \#FFFBFE;  
  \--md-ref-palette-secondary-100: \#FFFFFF;  
   
  /\* Tertiary Palette \*/  
  \--md-ref-palette-tertiary-0: \#000000;  
  \--md-ref-palette-tertiary-10: \#31111D;  
  \--md-ref-palette-tertiary-20: \#492532;  
  \--md-ref-palette-tertiary-30: \#633B48;  
  \--md-ref-palette-tertiary-40: \#7D5260;  
  \--md-ref-palette-tertiary-50: \#986977;  
  \--md-ref-palette-tertiary-60: \#B58392;  
  \--md-ref-palette-tertiary-70: \#D29DAC;  
  \--md-ref-palette-tertiary-80: \#EFB8C8;  
  \--md-ref-palette-tertiary-90: \#FFD8E4;  
  \--md-ref-palette-tertiary-95: \#FFECF1;  
  \--md-ref-palette-tertiary-99: \#FFFBFA;  
  \--md-ref-palette-tertiary-100: \#FFFFFF;  
   
  /\* Neutral Palette \*/  
  \--md-ref-palette-neutral-0: \#000000;  
  \--md-ref-palette-neutral-10: \#1D1B20;  
  \--md-ref-palette-neutral-20: \#322F35;  
  \--md-ref-palette-neutral-30: \#48464C;  
  \--md-ref-palette-neutral-40: \#605D64;  
  \--md-ref-palette-neutral-50: \#79767D;  
  \--md-ref-palette-neutral-60: \#938F96;  
  \--md-ref-palette-neutral-70: \#AEA9B1;  
  \--md-ref-palette-neutral-80: \#CAC5CD;  
  \--md-ref-palette-neutral-90: \#E6E0E9;  
  \--md-ref-palette-neutral-95: \#F5EFF7;  
  \--md-ref-palette-neutral-99: \#FFFBFE;  
  \--md-ref-palette-neutral-100: \#FFFFFF;  
   
  /\* Neutral Variant Palette \*/  
  \--md-ref-palette-neutral-variant-0: \#000000;  
  \--md-ref-palette-neutral-variant-10: \#1D1A22;  
  \--md-ref-palette-neutral-variant-20: \#322F37;  
  \--md-ref-palette-neutral-variant-30: \#49454F;  
  \--md-ref-palette-neutral-variant-40: \#605D66;  
  \--md-ref-palette-neutral-variant-50: \#79747E;  
  \--md-ref-palette-neutral-variant-60: \#938F99;  
  \--md-ref-palette-neutral-variant-70: \#AEA9B4;  
  \--md-ref-palette-neutral-variant-80: \#CAC4D0;  
  \--md-ref-palette-neutral-variant-90: \#E7E0EC;  
  \--md-ref-palette-neutral-variant-95: \#F5EEFA;  
  \--md-ref-palette-neutral-variant-99: \#FFFBFE;  
  \--md-ref-palette-neutral-variant-100: \#FFFFFF;  
   
  /\* Error Palette \*/  
  \--md-ref-palette-error-0: \#000000;  
  \--md-ref-palette-error-10: \#410E0B;  
  \--md-ref-palette-error-20: \#601410;  
  \--md-ref-palette-error-30: \#8C1D18;  
  \--md-ref-palette-error-40: \#B3261E;  
  \--md-ref-palette-error-50: \#DC362E;  
  \--md-ref-palette-error-60: \#E46962;  
  \--md-ref-palette-error-70: \#EC928E;  
  \--md-ref-palette-error-80: \#F2B8B5;  
  \--md-ref-palette-error-90: \#F9DEDC;  
  \--md-ref-palette-error-95: \#FCEEEE;  
  \--md-ref-palette-error-99: \#FFFBF9;  
  \--md-ref-palette-error-100: \#FFFFFF;

## **3.2 System Color Tokens \- Light Theme**

System tokens are the semantic color roles used in components. These reference the palette tokens.

  /\* ═══════════════════════════════════════════════════════════  
     SYSTEM COLOR TOKENS \- Light Theme (Default)  
     ═══════════════════════════════════════════════════════════ \*/  
    
  /\* Primary \*/  
  \--md-sys-color-primary: \#6750A4;  
  \--md-sys-color-on-primary: \#FFFFFF;  
  \--md-sys-color-primary-container: \#EADDFF;  
  \--md-sys-color-on-primary-container: \#21005D;  
  \--md-sys-color-inverse-primary: \#D0BCFF;  
    
  /\* Secondary \*/  
  \--md-sys-color-secondary: \#625B71;  
  \--md-sys-color-on-secondary: \#FFFFFF;  
  \--md-sys-color-secondary-container: \#E8DEF8;  
  \--md-sys-color-on-secondary-container: \#1D192B;  
    
  /\* Tertiary \*/  
  \--md-sys-color-tertiary: \#7D5260;  
  \--md-sys-color-on-tertiary: \#FFFFFF;  
  \--md-sys-color-tertiary-container: \#FFD8E4;  
  \--md-sys-color-on-tertiary-container: \#31111D;  
    
  /\* Error \*/  
  \--md-sys-color-error: \#B3261E;  
  \--md-sys-color-on-error: \#FFFFFF;  
  \--md-sys-color-error-container: \#F9DEDC;  
  \--md-sys-color-on-error-container: \#410E0B;  
    
  /\* Surface Hierarchy (M3's Container System) \*/  
  \--md-sys-color-surface: \#FEF7FF;  
  \--md-sys-color-on-surface: \#1D1B20;  
  \--md-sys-color-surface-variant: \#E7E0EC;  
  \--md-sys-color-on-surface-variant: \#49454F;  
  \--md-sys-color-surface-container-lowest: \#FFFFFF;  
  \--md-sys-color-surface-container-low: \#F7F2FA;  
  \--md-sys-color-surface-container: \#F3EDF7;  
  \--md-sys-color-surface-container-high: \#ECE6F0;  
  \--md-sys-color-surface-container-highest: \#E6E0E9;  
  \--md-sys-color-surface-dim: \#DED8E1;  
  \--md-sys-color-surface-bright: \#FEF7FF;  
  \--md-sys-color-inverse-surface: \#322F35;  
  \--md-sys-color-inverse-on-surface: \#F5EFF7;  
    
  /\* Background \*/  
  \--md-sys-color-background: \#FEF7FF;  
  \--md-sys-color-on-background: \#1D1B20;  
    
  /\* Outline \*/  
  \--md-sys-color-outline: \#79747E;  
  \--md-sys-color-outline-variant: \#CAC4D0;  
    
  /\* Shadow & Scrim \*/  
  \--md-sys-color-shadow: \#000000;  
  \--md-sys-color-scrim: \#000000;  
    
  /\* Surface Tint (used for elevation tinting) \*/  
  \--md-sys-color-surface-tint: \#6750A4;

## **3.3 Dark Theme Override**

Dark theme uses a media query or class-based override. All semantic tokens flip to their dark values.

  /\* ═══════════════════════════════════════════════════════════  
     DARK THEME \- Override via .dark class or prefers-color-scheme  
     ═══════════════════════════════════════════════════════════ \*/  
}  
   
.dark,  
\[data-theme="dark"\] {  
  /\* Primary \*/  
  \--md-sys-color-primary: \#D0BCFF;  
  \--md-sys-color-on-primary: \#381E72;  
  \--md-sys-color-primary-container: \#4F378B;  
  \--md-sys-color-on-primary-container: \#EADDFF;  
  \--md-sys-color-inverse-primary: \#6750A4;  
    
  /\* Secondary \*/  
  \--md-sys-color-secondary: \#CCC2DC;  
  \--md-sys-color-on-secondary: \#332D41;  
  \--md-sys-color-secondary-container: \#4A4458;  
  \--md-sys-color-on-secondary-container: \#E8DEF8;  
    
  /\* Tertiary \*/  
  \--md-sys-color-tertiary: \#EFB8C8;  
  \--md-sys-color-on-tertiary: \#492532;  
  \--md-sys-color-tertiary-container: \#633B48;  
  \--md-sys-color-on-tertiary-container: \#FFD8E4;  
    
  /\* Error \*/  
  \--md-sys-color-error: \#F2B8B5;  
  \--md-sys-color-on-error: \#601410;  
  \--md-sys-color-error-container: \#8C1D18;  
  \--md-sys-color-on-error-container: \#F9DEDC;  
    
  /\* Surface (Dark uses neutral tones) \*/  
  \--md-sys-color-surface: \#141218;  
  \--md-sys-color-on-surface: \#E6E0E9;  
  \--md-sys-color-surface-variant: \#49454F;  
  \--md-sys-color-on-surface-variant: \#CAC4D0;  
  \--md-sys-color-surface-container-lowest: \#0F0D13;  
  \--md-sys-color-surface-container-low: \#1D1B20;  
  \--md-sys-color-surface-container: \#211F26;  
  \--md-sys-color-surface-container-high: \#2B2930;  
  \--md-sys-color-surface-container-highest: \#36343B;  
  \--md-sys-color-surface-dim: \#141218;  
  \--md-sys-color-surface-bright: \#3B383E;  
  \--md-sys-color-inverse-surface: \#E6E0E9;  
  \--md-sys-color-inverse-on-surface: \#322F35;  
    
  /\* Background \*/  
  \--md-sys-color-background: \#141218;  
  \--md-sys-color-on-background: \#E6E0E9;  
    
  /\* Outline \*/  
  \--md-sys-color-outline: \#938F99;  
  \--md-sys-color-outline-variant: \#49454F;  
    
  /\* Surface Tint \*/  
  \--md-sys-color-surface-tint: \#D0BCFF;  
}  
   
@media (prefers-color-scheme: dark) {  
  :root:not(\[data-theme="light"\]) {  
    /\* Same dark values as above \- automatically applied for system preference \*/  
  }  
}

## **3.4 Typography Tokens**

M3 defines 15 typography styles across 5 categories (Display, Headline, Title, Body, Label) × 3 sizes (Large, Medium, Small).

:root {  
  /\* ═══════════════════════════════════════════════════════════  
     TYPOGRAPHY TOKENS \- M3 Type Scale  
     ═══════════════════════════════════════════════════════════ \*/  
    
  /\* Display (Largest \- Hero text, splash screens) \*/  
  \--md-sys-typescale-display-large-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-display-large-size: 57px;  
  \--md-sys-typescale-display-large-line-height: 64px;  
  \--md-sys-typescale-display-large-weight: 400;  
  \--md-sys-typescale-display-large-tracking: \-0.25px;  
    
  \--md-sys-typescale-display-medium-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-display-medium-size: 45px;  
  \--md-sys-typescale-display-medium-line-height: 52px;  
  \--md-sys-typescale-display-medium-weight: 400;  
  \--md-sys-typescale-display-medium-tracking: 0px;  
    
  \--md-sys-typescale-display-small-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-display-small-size: 36px;  
  \--md-sys-typescale-display-small-line-height: 44px;  
  \--md-sys-typescale-display-small-weight: 400;  
  \--md-sys-typescale-display-small-tracking: 0px;  
    
  /\* Headline (Page/Section titles) \*/  
  \--md-sys-typescale-headline-large-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-headline-large-size: 32px;  
  \--md-sys-typescale-headline-large-line-height: 40px;  
  \--md-sys-typescale-headline-large-weight: 400;  
  \--md-sys-typescale-headline-large-tracking: 0px;  
    
  \--md-sys-typescale-headline-medium-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-headline-medium-size: 28px;  
  \--md-sys-typescale-headline-medium-line-height: 36px;  
  \--md-sys-typescale-headline-medium-weight: 400;  
  \--md-sys-typescale-headline-medium-tracking: 0px;  
    
  \--md-sys-typescale-headline-small-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-headline-small-size: 24px;  
  \--md-sys-typescale-headline-small-line-height: 32px;  
  \--md-sys-typescale-headline-small-weight: 400;  
  \--md-sys-typescale-headline-small-tracking: 0px;  
    
  /\* Title (Card titles, list headers) \*/  
  \--md-sys-typescale-title-large-font: var(--md-ref-typeface-brand);  
  \--md-sys-typescale-title-large-size: 22px;  
  \--md-sys-typescale-title-large-line-height: 28px;  
  \--md-sys-typescale-title-large-weight: 400;  
  \--md-sys-typescale-title-large-tracking: 0px;  
    
  \--md-sys-typescale-title-medium-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-title-medium-size: 16px;  
  \--md-sys-typescale-title-medium-line-height: 24px;  
  \--md-sys-typescale-title-medium-weight: 500;  
  \--md-sys-typescale-title-medium-tracking: 0.15px;  
    
  \--md-sys-typescale-title-small-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-title-small-size: 14px;  
  \--md-sys-typescale-title-small-line-height: 20px;  
  \--md-sys-typescale-title-small-weight: 500;  
  \--md-sys-typescale-title-small-tracking: 0.1px;  
    
  /\* Body (Main content) \*/  
  \--md-sys-typescale-body-large-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-body-large-size: 16px;  
  \--md-sys-typescale-body-large-line-height: 24px;  
  \--md-sys-typescale-body-large-weight: 400;  
  \--md-sys-typescale-body-large-tracking: 0.5px;  
    
  \--md-sys-typescale-body-medium-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-body-medium-size: 14px;  
  \--md-sys-typescale-body-medium-line-height: 20px;  
  \--md-sys-typescale-body-medium-weight: 400;  
  \--md-sys-typescale-body-medium-tracking: 0.25px;  
    
  \--md-sys-typescale-body-small-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-body-small-size: 12px;  
  \--md-sys-typescale-body-small-line-height: 16px;  
  \--md-sys-typescale-body-small-weight: 400;  
  \--md-sys-typescale-body-small-tracking: 0.4px;  
    
  /\* Label (Buttons, badges, chips) \*/  
  \--md-sys-typescale-label-large-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-label-large-size: 14px;  
  \--md-sys-typescale-label-large-line-height: 20px;  
  \--md-sys-typescale-label-large-weight: 500;  
  \--md-sys-typescale-label-large-tracking: 0.1px;  
    
  \--md-sys-typescale-label-medium-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-label-medium-size: 12px;  
  \--md-sys-typescale-label-medium-line-height: 16px;  
  \--md-sys-typescale-label-medium-weight: 500;  
  \--md-sys-typescale-label-medium-tracking: 0.5px;  
    
  \--md-sys-typescale-label-small-font: var(--md-ref-typeface-plain);  
  \--md-sys-typescale-label-small-size: 11px;  
  \--md-sys-typescale-label-small-line-height: 16px;  
  \--md-sys-typescale-label-small-weight: 500;  
  \--md-sys-typescale-label-small-tracking: 0.5px;  
}

## **3.5 Shape, Elevation & Motion Tokens**

:root {  
  /\* ═══════════════════════════════════════════════════════════  
     SHAPE TOKENS \- M3 Corner Radius Scale  
     ═══════════════════════════════════════════════════════════ \*/  
  \--md-sys-shape-corner-none: 0px;  
  \--md-sys-shape-corner-extra-small: 4px;  
  \--md-sys-shape-corner-small: 8px;  
  \--md-sys-shape-corner-medium: 12px;  
  \--md-sys-shape-corner-large: 16px;  
  \--md-sys-shape-corner-extra-large: 28px;  
  \--md-sys-shape-corner-full: 9999px;  
   
  /\* ═══════════════════════════════════════════════════════════  
     ELEVATION TOKENS \- M3 Shadow Scale  
     ═══════════════════════════════════════════════════════════ \*/  
  \--md-sys-elevation-level0: none;  
  \--md-sys-elevation-level1: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15);  
  \--md-sys-elevation-level2: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15);  
  \--md-sys-elevation-level3: 0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15);  
  \--md-sys-elevation-level4: 0px 2px 3px rgba(0,0,0,0.3), 0px 6px 10px 4px rgba(0,0,0,0.15);  
  \--md-sys-elevation-level5: 0px 4px 4px rgba(0,0,0,0.3), 0px 8px 12px 6px rgba(0,0,0,0.15);  
   
  /\* ═══════════════════════════════════════════════════════════  
     MOTION TOKENS \- M3 Duration & Easing  
     ═══════════════════════════════════════════════════════════ \*/  
    
  /\* Duration \*/  
  \--md-sys-motion-duration-short1: 50ms;  
  \--md-sys-motion-duration-short2: 100ms;  
  \--md-sys-motion-duration-short3: 150ms;  
  \--md-sys-motion-duration-short4: 200ms;  
  \--md-sys-motion-duration-medium1: 250ms;  
  \--md-sys-motion-duration-medium2: 300ms;  
  \--md-sys-motion-duration-medium3: 350ms;  
  \--md-sys-motion-duration-medium4: 400ms;  
  \--md-sys-motion-duration-long1: 450ms;  
  \--md-sys-motion-duration-long2: 500ms;  
  \--md-sys-motion-duration-long3: 550ms;  
  \--md-sys-motion-duration-long4: 600ms;  
    
  /\* Easing \*/  
  \--md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);  
  \--md-sys-motion-easing-standard-decelerate: cubic-bezier(0, 0, 0, 1);  
  \--md-sys-motion-easing-standard-accelerate: cubic-bezier(0.3, 0, 1, 1);  
  \--md-sys-motion-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);  
  \--md-sys-motion-easing-emphasized-decelerate: cubic-bezier(0.05, 0.7, 0.1, 1);  
  \--md-sys-motion-easing-emphasized-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);  
  \--md-sys-motion-easing-linear: cubic-bezier(0, 0, 1, 1);  
   
  /\* ═══════════════════════════════════════════════════════════  
     STATE LAYER TOKENS \- M3 Interaction Feedback  
     ═══════════════════════════════════════════════════════════ \*/  
  \--md-sys-state-hover-opacity: 0.08;  
  \--md-sys-state-focus-opacity: 0.12;  
  \--md-sys-state-pressed-opacity: 0.12;  
  \--md-sys-state-dragged-opacity: 0.16;  
}

# **4\. Tailwind Configuration**

Extend Tailwind to use M3 CSS variables. This creates utility classes like 'bg-primary', 'text-on-surface', 'rounded-md3-lg', etc.

// tailwind.config.ts  
import type { Config } from 'tailwindcss'  
   
const config: Config \= {  
  darkMode: \['class', '\[data-theme="dark"\]'\],  
  content: \[  
    './src/\*\*/\*.{js,ts,jsx,tsx,mdx}',  
    './components/\*\*/\*.{js,ts,jsx,tsx,mdx}',  
  \],  
  theme: {  
    extend: {  
      /\* ═══════════════════════════════════════════════════════════  
         COLORS \- Map M3 CSS Variables to Tailwind  
         ═══════════════════════════════════════════════════════════ \*/  
      colors: {  
        // Primary  
        primary: 'var(--md-sys-color-primary)',  
        'on-primary': 'var(--md-sys-color-on-primary)',  
        'primary-container': 'var(--md-sys-color-primary-container)',  
        'on-primary-container': 'var(--md-sys-color-on-primary-container)',  
        'inverse-primary': 'var(--md-sys-color-inverse-primary)',  
          
        // Secondary  
        secondary: 'var(--md-sys-color-secondary)',  
        'on-secondary': 'var(--md-sys-color-on-secondary)',  
        'secondary-container': 'var(--md-sys-color-secondary-container)',  
        'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',  
          
        // Tertiary  
        tertiary: 'var(--md-sys-color-tertiary)',  
        'on-tertiary': 'var(--md-sys-color-on-tertiary)',  
        'tertiary-container': 'var(--md-sys-color-tertiary-container)',  
        'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',  
          
        // Error  
        error: 'var(--md-sys-color-error)',  
        'on-error': 'var(--md-sys-color-on-error)',  
        'error-container': 'var(--md-sys-color-error-container)',  
        'on-error-container': 'var(--md-sys-color-on-error-container)',  
          
        // Surface Hierarchy  
        surface: 'var(--md-sys-color-surface)',  
        'on-surface': 'var(--md-sys-color-on-surface)',  
        'surface-variant': 'var(--md-sys-color-surface-variant)',  
        'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',  
        'surface-container-lowest': 'var(--md-sys-color-surface-container-lowest)',  
        'surface-container-low': 'var(--md-sys-color-surface-container-low)',  
        'surface-container': 'var(--md-sys-color-surface-container)',  
        'surface-container-high': 'var(--md-sys-color-surface-container-high)',  
        'surface-container-highest': 'var(--md-sys-color-surface-container-highest)',  
        'surface-dim': 'var(--md-sys-color-surface-dim)',  
        'surface-bright': 'var(--md-sys-color-surface-bright)',  
        'inverse-surface': 'var(--md-sys-color-inverse-surface)',  
        'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',  
          
        // Background  
        background: 'var(--md-sys-color-background)',  
        'on-background': 'var(--md-sys-color-on-background)',  
          
        // Outline  
        outline: 'var(--md-sys-color-outline)',  
        'outline-variant': 'var(--md-sys-color-outline-variant)',  
      },  
        
      /\* ═══════════════════════════════════════════════════════════  
         BORDER RADIUS \- M3 Shape Scale  
         ═══════════════════════════════════════════════════════════ \*/  
      borderRadius: {  
        'md3-none': 'var(--md-sys-shape-corner-none)',  
        'md3-xs': 'var(--md-sys-shape-corner-extra-small)',  
        'md3-sm': 'var(--md-sys-shape-corner-small)',  
        'md3-md': 'var(--md-sys-shape-corner-medium)',  
        'md3-lg': 'var(--md-sys-shape-corner-large)',  
        'md3-xl': 'var(--md-sys-shape-corner-extra-large)',  
        'md3-full': 'var(--md-sys-shape-corner-full)',  
      },  
        
      /\* ═══════════════════════════════════════════════════════════  
         BOX SHADOW \- M3 Elevation Scale  
         ═══════════════════════════════════════════════════════════ \*/  
      boxShadow: {  
        'md3-0': 'var(--md-sys-elevation-level0)',  
        'md3-1': 'var(--md-sys-elevation-level1)',  
        'md3-2': 'var(--md-sys-elevation-level2)',  
        'md3-3': 'var(--md-sys-elevation-level3)',  
        'md3-4': 'var(--md-sys-elevation-level4)',  
        'md3-5': 'var(--md-sys-elevation-level5)',  
      },  
        
      /\* ═══════════════════════════════════════════════════════════  
         FONT FAMILY  
         ═══════════════════════════════════════════════════════════ \*/  
      fontFamily: {  
        'md3-brand': 'var(--md-ref-typeface-brand)',  
        'md3-plain': 'var(--md-ref-typeface-plain)',  
      },  
        
      /\* ═══════════════════════════════════════════════════════════  
         TRANSITION \- M3 Motion  
         ═══════════════════════════════════════════════════════════ \*/  
      transitionDuration: {  
        'md3-short1': 'var(--md-sys-motion-duration-short1)',  
        'md3-short2': 'var(--md-sys-motion-duration-short2)',  
        'md3-short3': 'var(--md-sys-motion-duration-short3)',  
        'md3-short4': 'var(--md-sys-motion-duration-short4)',  
        'md3-medium1': 'var(--md-sys-motion-duration-medium1)',  
        'md3-medium2': 'var(--md-sys-motion-duration-medium2)',  
        'md3-medium3': 'var(--md-sys-motion-duration-medium3)',  
        'md3-medium4': 'var(--md-sys-motion-duration-medium4)',  
      },  
      transitionTimingFunction: {  
        'md3-standard': 'var(--md-sys-motion-easing-standard)',  
        'md3-emphasized': 'var(--md-sys-motion-easing-emphasized)',  
        'md3-decelerate': 'var(--md-sys-motion-easing-standard-decelerate)',  
        'md3-accelerate': 'var(--md-sys-motion-easing-standard-accelerate)',  
      },  
    },  
  },  
  plugins: \[\],  
}  
   
export default config

# **5\. shadcn/ui Component Updates**

Each shadcn/ui component needs to be updated to use M3 tokens. Below are the key components with their M3 transformations.

## **5.1 Button Component**

M3 buttons have three main variants: Filled, Outlined, and Text. They use the label-large typography and md3-full radius for pills.

// components/ui/button.tsx  
import \* as React from "react"  
import { Slot } from "@radix-ui/react-slot"  
import { cva, type VariantProps } from "class-variance-authority"  
import { cn } from "@/lib/utils"  
   
const buttonVariants \= cva(  
  // Base styles  
  "inline-flex items-center justify-center whitespace-nowrap font-medium " \+  
  "transition-all duration-md3-short4 ease-md3-standard " \+  
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " \+  
  "disabled:pointer-events-none disabled:opacity-50",  
  {  
    variants: {  
      variant: {  
        // M3 Filled Button  
        default:   
          "bg-primary text-on-primary hover:shadow-md3-1 " \+  
          "hover:bg-primary/92 active:bg-primary/88",  
          
        // M3 Filled Tonal Button  
        secondary:   
          "bg-secondary-container text-on-secondary-container " \+  
          "hover:shadow-md3-1 hover:bg-secondary-container/92",  
          
        // M3 Outlined Button  
        outline:   
          "border border-outline bg-transparent text-primary " \+  
          "hover:bg-primary/8 active:bg-primary/12",  
          
        // M3 Text Button  
        ghost:   
          "text-primary hover:bg-primary/8 active:bg-primary/12",  
          
        // M3 Elevated Button  
        elevated:  
          "bg-surface-container-low text-primary shadow-md3-1 " \+  
          "hover:shadow-md3-2 hover:bg-surface-container",  
          
        // Destructive (Error color)  
        destructive:   
          "bg-error text-on-error hover:bg-error/92",  
          
        // Link style  
        link:   
          "text-primary underline-offset-4 hover:underline",  
      },  
      size: {  
        default: "h-10 px-6 py-2 text-sm rounded-md3-full",  
        sm: "h-8 px-4 text-xs rounded-md3-full",  
        lg: "h-12 px-8 text-base rounded-md3-full",  
        icon: "h-10 w-10 rounded-md3-full",  
      },  
    },  
    defaultVariants: {  
      variant: "default",  
      size: "default",  
    },  
  }  
)  
   
export interface ButtonProps  
  extends React.ButtonHTMLAttributes\<HTMLButtonElement\>,  
    VariantProps\<typeof buttonVariants\> {  
  asChild?: boolean  
}  
   
const Button \= React.forwardRef\<HTMLButtonElement, ButtonProps\>(  
  ({ className, variant, size, asChild \= false, ...props }, ref) \=\> {  
    const Comp \= asChild ? Slot : "button"  
    return (  
      \<Comp  
        className={cn(buttonVariants({ variant, size, className }))}  
        ref={ref}  
        {...props}  
      /\>  
    )  
  }  
)  
Button.displayName \= "Button"  
   
export { Button, buttonVariants }

## **5.2 Card Component**

M3 cards use surface containers for hierarchy and elevation for emphasis.

// components/ui/card.tsx  
import \* as React from "react"  
import { cn } from "@/lib/utils"  
   
const Card \= React.forwardRef\<  
  HTMLDivElement,  
  React.HTMLAttributes\<HTMLDivElement\> & {  
    variant?: 'elevated' | 'filled' | 'outlined'  
  }  
\>(({ className, variant \= 'elevated', ...props }, ref) \=\> (  
  \<div  
    ref={ref}  
    className={cn(  
      "rounded-md3-lg transition-shadow duration-md3-medium2 ease-md3-standard",  
      {  
        // M3 Elevated Card  
        'elevated': "bg-surface-container-low shadow-md3-1 hover:shadow-md3-2",  
        // M3 Filled Card  
        'filled': "bg-surface-container-highest",  
        // M3 Outlined Card  
        'outlined': "border border-outline-variant bg-surface",  
      }\[variant\],  
      className  
    )}  
    {...props}  
  /\>  
))  
Card.displayName \= "Card"  
   
const CardHeader \= React.forwardRef\<  
  HTMLDivElement,  
  React.HTMLAttributes\<HTMLDivElement\>  
\>(({ className, ...props }, ref) \=\> (  
  \<div  
    ref={ref}  
    className={cn("flex flex-col space-y-1.5 p-6", className)}  
    {...props}  
  /\>  
))  
CardHeader.displayName \= "CardHeader"  
   
const CardTitle \= React.forwardRef\<  
  HTMLParagraphElement,  
  React.HTMLAttributes\<HTMLHeadingElement\>  
\>(({ className, ...props }, ref) \=\> (  
  \<h3  
    ref={ref}  
    className={cn(  
      "text-on-surface font-medium leading-none tracking-tight",  
      // M3 Title Large typography  
      "text-\[22px\] leading-7",  
      className  
    )}  
    {...props}  
  /\>  
))  
CardTitle.displayName \= "CardTitle"  
   
const CardDescription \= React.forwardRef\<  
  HTMLParagraphElement,  
  React.HTMLAttributes\<HTMLParagraphElement\>  
\>(({ className, ...props }, ref) \=\> (  
  \<p  
    ref={ref}  
    className={cn(  
      "text-on-surface-variant",  
      // M3 Body Medium typography  
      "text-sm leading-5",  
      className  
    )}  
    {...props}  
  /\>  
))  
CardDescription.displayName \= "CardDescription"  
   
const CardContent \= React.forwardRef\<  
  HTMLDivElement,  
  React.HTMLAttributes\<HTMLDivElement\>  
\>(({ className, ...props }, ref) \=\> (  
  \<div ref={ref} className={cn("p-6 pt-0", className)} {...props} /\>  
))  
CardContent.displayName \= "CardContent"  
   
const CardFooter \= React.forwardRef\<  
  HTMLDivElement,  
  React.HTMLAttributes\<HTMLDivElement\>  
\>(({ className, ...props }, ref) \=\> (  
  \<div  
    ref={ref}  
    className={cn("flex items-center p-6 pt-0", className)}  
    {...props}  
  /\>  
))  
CardFooter.displayName \= "CardFooter"  
   
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

## **5.3 Input Component**

M3 text fields use outlined style by default with proper focus states.

// components/ui/input.tsx  
import \* as React from "react"  
import { cn } from "@/lib/utils"  
   
export interface InputProps  
  extends React.InputHTMLAttributes\<HTMLInputElement\> {}  
   
const Input \= React.forwardRef\<HTMLInputElement, InputProps\>(  
  ({ className, type, ...props }, ref) \=\> {  
    return (  
      \<input  
        type={type}  
        className={cn(  
          // Base styles  
          "flex h-14 w-full px-4 py-2",  
          // M3 Outlined style  
          "rounded-md3-xs border border-outline bg-transparent",  
          // Typography \- Body Large  
          "text-base text-on-surface placeholder:text-on-surface-variant",  
          // Focus state  
          "focus-visible:outline-none focus-visible:border-primary focus-visible:border-2",  
          // Hover state  
          "hover:border-on-surface",  
          // Disabled state  
          "disabled:cursor-not-allowed disabled:opacity-38 disabled:border-on-surface/12",  
          // Transition  
          "transition-colors duration-md3-short4 ease-md3-standard",  
          // File input  
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",  
          className  
        )}  
        ref={ref}  
        {...props}  
      /\>  
    )  
  }  
)  
Input.displayName \= "Input"  
   
export { Input }

## **5.4 Dialog Component**

M3 dialogs use surface-container-high with extra-large radius.

// components/ui/dialog.tsx (key changes)  
const DialogContent \= React.forwardRef\<  
  React.ElementRef\<typeof DialogPrimitive.Content\>,  
  React.ComponentPropsWithoutRef\<typeof DialogPrimitive.Content\>  
\>(({ className, children, ...props }, ref) \=\> (  
  \<DialogPortal\>  
    \<DialogOverlay /\>  
    \<DialogPrimitive.Content  
      ref={ref}  
      className={cn(  
        "fixed left-\[50%\] top-\[50%\] z-50 grid w-full max-w-lg translate-x-\[-50%\] translate-y-\[-50%\]",  
        // M3 Surface  
        "bg-surface-container-high",  
        // M3 Shape \- Extra Large  
        "rounded-md3-xl",  
        // M3 Elevation  
        "shadow-md3-3",  
        // M3 Motion  
        "duration-md3-medium2",  
        // Animation  
        "data-\[state=open\]:animate-in data-\[state=closed\]:animate-out",  
        "data-\[state=closed\]:fade-out-0 data-\[state=open\]:fade-in-0",  
        "data-\[state=closed\]:zoom-out-95 data-\[state=open\]:zoom-in-95",  
        className  
      )}  
      {...props}  
    \>  
      {children}  
    \</DialogPrimitive.Content\>  
  \</DialogPortal\>  
))

# **6\. Complete Component Mapping**

This table shows how each shadcn/ui component maps to M3 specifications.

| Component | M3 Equivalent | Key Token Changes |
| :---- | :---- | :---- |
| Button | Filled/Outlined/Text | bg-primary, rounded-md3-full, shadow-md3-1 |
| Card | Card (Elevated/Filled) | bg-surface-container-low, rounded-md3-lg, shadow-md3-1 |
| Dialog | Dialog | bg-surface-container-high, rounded-md3-xl, shadow-md3-3 |
| Sheet | Side Sheet | bg-surface-container-low, shadow-md3-2 |
| Input | Text Field (Outlined) | border-outline, rounded-md3-xs, h-14 |
| Select | Menu | bg-surface-container, rounded-md3-xs, shadow-md3-2 |
| Checkbox | Checkbox | bg-primary when checked, rounded-md3-xs |
| Radio | Radio Button | border-primary, border-2 |
| Switch | Switch | bg-primary, rounded-md3-full, h-8 w-14 |
| Badge | Badge | bg-primary-container, rounded-md3-sm |
| Avatar | Avatar | rounded-md3-full |
| Tabs | Tabs | border-b-2 border-primary (active) |
| Table | Data Table | bg-surface, border-outline-variant |
| Toast | Snackbar | bg-inverse-surface, rounded-md3-xs |
| Tooltip | Tooltip | bg-inverse-surface, rounded-md3-xs |
| Dropdown | Menu | bg-surface-container, shadow-md3-2, rounded-md3-xs |
| Navigation | Navigation Rail/Bar | bg-surface-container, w-20 (rail) |
| Progress | Progress Indicator | bg-primary, rounded-md3-full, h-1 |

# **7\. Testing & Validation Checklist**

## **7.1 Visual Testing**

* All buttons render with correct M3 styling (filled, outlined, text)  
* Cards show proper elevation shadows  
* Inputs have 56px height with proper border states  
* Dialogs use extra-large radius (28px)  
* Typography matches M3 type scale  
* Color contrast meets WCAG AA (4.5:1 for text)

## **7.2 Dark Mode Testing**

* Toggle dark mode via class (.dark) works  
* Toggle dark mode via data attribute (\[data-theme='dark'\]) works  
* System preference (prefers-color-scheme) auto-detection works  
* All colors flip correctly (primary becomes D0BCFF in dark)  
* Surface hierarchy inverts properly

## **7.3 Motion Testing**

* Button hover/active states have smooth transitions  
* Dialog open/close animations work correctly  
* Card hover elevation change is smooth  
* Reduced motion preference (prefers-reduced-motion) respected

## **7.4 Responsive Testing**

* Components render correctly on mobile (375px)  
* Components render correctly on tablet (768px)  
* Components render correctly on desktop (1440px)  
* Touch targets are minimum 48px on mobile

# **8\. Brand Customization**

To create a brand-specific variant, override the CSS variables. Use Material Theme Builder (material-foundation.github.io/material-theme-builder) to generate palettes from a source color.

## **8.1 Example: Half Bak'd Theme**

/\* Half Bak'd Brand Override \*/  
/\* Source color: \#\[YOUR\_HEX\] \- Generate at Theme Builder \*/  
   
\[data-brand="halfbakd"\] {  
  /\* Override primary palette \*/  
  \--md-sys-color-primary: \#\[GENERATED\];  
  \--md-sys-color-on-primary: \#\[GENERATED\];  
  \--md-sys-color-primary-container: \#\[GENERATED\];  
  \--md-sys-color-on-primary-container: \#\[GENERATED\];  
    
  /\* Override secondary \*/  
  \--md-sys-color-secondary: \#\[GENERATED\];  
  \--md-sys-color-on-secondary: \#\[GENERATED\];  
  \--md-sys-color-secondary-container: \#\[GENERATED\];  
  \--md-sys-color-on-secondary-container: \#\[GENERATED\];  
    
  /\* ... continue for all color roles \*/  
}

## **8.2 Brand Colors to Generate**

| Brand | Source Color | Data Attribute |
| :---- | :---- | :---- |
| Half Bak'd | \#\_\_\_\_\_\_ (TBD) | data-brand="halfbakd" |
| Buzz | \#\_\_\_\_\_\_ (TBD) | data-brand="buzz" |
| Fruitia | \#\_\_\_\_\_\_ (TBD) | data-brand="fruitia" |
| Fresh Farms | \#\_\_\_\_\_\_ (TBD) | data-brand="freshfarms" |
| Happi Hemp | \#\_\_\_\_\_\_ (TBD) | data-brand="happihemp" |
| HiJoy | \#\_\_\_\_\_\_ (TBD) | data-brand="hijoy" |
| SupaCommand | \#6750A4 (Default) | data-brand="supacommand" |

To apply a brand theme, add the data attribute to the HTML element:

\<html data-brand="halfbakd" data-theme="light"\>  
  \<\!-- App content \--\>  
\</html\>

# **9\. Complete File Change List**

This is the complete list of files to create or modify for the M3 refactor.

| File Path | Action | Priority |
| :---- | :---- | :---- |
| src/app/globals.css | REPLACE | 🔴 Critical \- Do first |
| tailwind.config.ts | MODIFY | 🔴 Critical \- Do second |
| src/components/ui/button.tsx | MODIFY | 🟠 High |
| src/components/ui/card.tsx | MODIFY | 🟠 High |
| src/components/ui/input.tsx | MODIFY | 🟠 High |
| src/components/ui/dialog.tsx | MODIFY | 🟠 High |
| src/components/ui/sheet.tsx | MODIFY | 🟡 Medium |
| src/components/ui/select.tsx | MODIFY | 🟡 Medium |
| src/components/ui/badge.tsx | MODIFY | 🟡 Medium |
| src/components/ui/table.tsx | MODIFY | 🟡 Medium |
| src/components/ui/tabs.tsx | MODIFY | 🟡 Medium |
| src/components/ui/checkbox.tsx | MODIFY | 🟢 Low |
| src/components/ui/radio-group.tsx | MODIFY | 🟢 Low |
| src/components/ui/switch.tsx | MODIFY | 🟢 Low |
| src/components/ui/tooltip.tsx | MODIFY | 🟢 Low |
| src/components/ui/avatar.tsx | MODIFY | 🟢 Low |
| README.md | MODIFY | 🟢 Low \- Update docs |

# **10\. Appendix**

## **10.1 Resources**

* Material Design 3 Specification: m3.material.io

* Material Theme Builder: material-foundation.github.io/material-theme-builder

* shadcn/ui Documentation: ui.shadcn.com

* Atomic CRM Repository: github.com/marmelab/atomic-crm

* Tailwind CSS Documentation: tailwindcss.com

## **10.2 Token Sources**

The CSS variables in this guide are derived from three source files:

* m3-design-tokens.json — Complete M3 token specification

* m3-expressive-tokens.json — M3 Expressive enhancements (optional)

* m3-design-tokens-fresh-collective.md — Fresh Collective implementation guide

## **10.3 Version History**

| Version | Date | Changes |
| :---- | :---- | :---- |
| 1.0 | December 2025 | Initial release with complete M3 token system |

*— End of Document —*