const generateColorClass = (variable) => {
  return ({opacityValue}) =>
    opacityValue ?
      `rgba(var(--${variable}), ${opacityValue})` :
      `rgb(var(--${variable}))`;
};

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'app-bg': generateColorClass('color-bg-base'),
      'primary': generateColorClass('color-app-primary'),
      'secondary': generateColorClass('color-app-secondary'),
      'neutral-medium': generateColorClass('color-neutral-medium'),
      'neutral-light': generateColorClass('color-neutral-light'),
      'neutral-lighter': generateColorClass('color-neutral-lighter'),
      'neutral-lightest': generateColorClass('color-neutral-lightest'),
      'neutral-white': generateColorClass('color-neutral-white'),
    },
    extend: {
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundColor: {
        'app-bg-base': generateColorClass('color-bg-base'),
        'app-bg-primary': generateColorClass('color-bg-primary'),
        'app-bg-secondary': generateColorClass('color-bg-secondary'),
        // 'primary': generateColorClass('color-app-primary'),
        // 'secondary': generateColorClass('color-app-secondary'),
        // 'accent': generateColorClass('color-app-accent'),
        // 'error': generateColorClass('color-app-error'),
      },
      textColor: {
        'primary': generateColorClass('color-text-primary'),
        'secondary': generateColorClass('color-text-secondary'),
        'icon-primary': generateColorClass('color-app-primary'),
        'icon-secondary': generateColorClass('color-app-secondary'),
        'icon-accent': generateColorClass('color-app-accent'),
      },
      borderColor: {
        // 'primary': generateColorClass('color-app-primary'),
        // 'secondary': generateColorClass('color-app-secondary'),
        'accent': generateColorClass('color-app-accent'),
      },
    },
  },
  plugins: [],
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
};
