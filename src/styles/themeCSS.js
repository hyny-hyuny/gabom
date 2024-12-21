import { css } from "lit";

/*
 *  html5resetcss
 */

export default css`
  :root {
    /* Color styles */
    --white: rgba(255, 255, 255, 1);
    --primary: rgba(255, 193, 50, 1);
    --secondary: rgba(255, 238, 199, 1);
    --tertairy: rgba(133, 70, 227, 1);
    --background: rgba(249, 249, 249, 1);
    --green: rgba(115, 234, 115, 1);

    --contents-black: rgba(0, 0, 0, 1);
    --contents-content-primary: rgba(30, 30, 30, 1);
    --contents-content-secondary: rgba(51, 51, 51, 1);
    --contents-content-tertiary: rgba(166, 166, 166, 1);

    --gray-50: rgba(245, 245, 245, 1);
    --gray-100: rgba(225, 225, 225, 1);
    --gray-200: rgba(196, 196, 196, 1);
    --gray-300: rgba(166, 166, 166, 1);
    --gray-400: rgba(137, 137, 137, 1);
    --gray-500: rgba(107, 107, 107, 1);
    --gray-600: rgba(86, 86, 86, 1);
    --gray-700: rgba(64, 64, 64, 1);
    --gray-800: rgba(43, 43, 43, 1);
    --gray-900: rgba(21, 21, 21, 1);
    --info-error: rgba(240, 63, 64, 1);

    /* font-size styles */
    --heading-sm: 0.875rem; /* 14px */
    --heading-md: 1rem; /* 16px */
    --heading-lg: 1.125rem; /* 18px */
    --heading-xl: 1.375rem; /* 22px */
    --heading-2xl: 1.75rem; /* 28px */
    --label-xs: 0.625rem; /* 10px */
    --label-sm: 0.75rem; /* 12px */
    --label-md: 1rem; /* 16px */
    --label-lg: 1.125rem; /* 18px */
    --label-xl: 1.375rem; /* 22px */
    --label-2xl: 1.5rem; /* 24px */
    --paragraph-2xs: 0.625rem; /* 10px */
    --paragraph-xs: 0.75rem; /* 12px */
    --paragraph-sm: 0.875rem; /* 14px */
    --paragraph-md: 1rem; /* 16px */
    --paragraph-lg: 1.375rem; /* 22px */
    --paragraph-xl: 1.75rem; /* 28px */

    /* spacing */
    --spacing-1: 0.25rem; /* 4px */
    --spacing-2: 0.375rem; /* 6px */
    --spacing-3: 0.5rem; /* 8px */
    --spacing-4: 0.75rem; /* 10px */
    --spacing-5: 0.75rem; /* 12px */
    --spacing-6: 1rem; /* 16px */
    --spacing-7: 1.25rem; /* 20px */
    --spacing-8: 1.5rem; /* 24px */
    --spacing-9: 2.25rem; /* 36px */
    --spacing-10: 2.75rem; /* 44px */

    /* radius */
    --radius-2xs: 0.25rem; /* 4px */
    --radius-xs: 0.375rem; /* 6px */
    --radius-sm: 0.5rem; /* 8px */
    --radius-md: 1.25rem; /* 20px */

    /* Effect styles */
    --shadow-medium: 0px 8px 16px rgba(0, 0, 0, 0.2);
    --shadow-low: 0px 2px 12px rgba(0, 0, 0, 0.12);
  }

  /* ------------------- font ------------------- */
  /* font-weight */
  /* Thin : 100, 200 */
  /* Light : 300 */
  /* Regular : 400 */
  /* Medium : 500 */
  /* Bold : 600 ~ 900 */

  /* heading  */
  .heading-sm {
    font-size: var(--heading-sm);
    font-weight: 900;
  }

  .heading-md {
    font-size: var(--heading-md);
    font-weight: 900;
  }

  .heading-lg {
    font-size: var(--heading-lg);
    font-weight: 900;
  }

  .heading-xl {
    font-size: var(--heading-xl);
    font-weight: 500;
  }

  .heading-2xl {
    font-size: var(--heading-2xl);
    font-weight: 500;
  }

  /* label  */
  .label-xs {
    font-size: var(--label-xs);
    font-weight: 500;
  }

  .label-sm {
    font-size: var(--label-sm);
    font-weight: 500;
  }

  .label-md {
    font-size: var(--label-md);
    font-weight: 500;
  }

  .label-lg {
    font-size: var(--label-lg);
    font-weight: 500;
  }

  .label-xl {
    font-size: var(--label-xl);
    font-weight: 500;
  }

  .label-2xl {
    font-size: var(--label-2xl);
    font-weight: 500;
  }

  /* paragraph  */
  .paragraph-2xs {
    font-size: var(--label-2xs);
    font-weight: 400;
  }

  .paragraph-xs {
    font-size: var(--label-xs);
    font-weight: 400;
  }

  .paragraph-sm {
    font-size: var(--label-sm);
    font-weight: 400;
  }

  .paragraph-md {
    font-size: var(--label-md);
    font-weight: 400;
  }

  .paragraph-lg {
    font-size: var(--label-lg);
    font-weight: 400;
  }

  .paragraph-xl {
    font-size: var(--label-xl);
    font-weight: 400;
  }
`;