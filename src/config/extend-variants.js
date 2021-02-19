const extendVariants = () => {
  const variantsKeys = [
    'accessibility',
    'alignContent',
    'alignItems',
    'alignSelf',
    'animation',
    'appearance',
    'backgroundAttachment',
    'backgroundClip',
    'backgroundColor',
    'backgroundImage',
    'backgroundOpacity',
    'borderColor',
    'borderOpacity',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'boxShadow',
    'boxSizing',
    'clear',
    'container',
    'cursor',
    'display',
    'divideColor',
    'divideOpacity',
    'divideStyle',
    'divideWidth',
    'fill',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'float',
    'fontFamily',
    'fontSize',
    'fontSmoothing',
    'fontStyle',
    'fontVariantNumeric',
    'fontWeight',
    'gap',
    'gradientColorStops',
    'gridAutoColumns',
    'gridAutoFlow',
    'gridAutoRows',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'gridTemplateColumns',
    'gridTemplateRows',
    'height',
    'inset',
    'justifyContent',
    'justifyItems',
    'justifySelf',
    'letterSpacing',
    'lineHeight',
    'listStylePosition',
    'listStyleType',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'objectFit',
    'objectPosition',
    'opacity',
    'order',
    'outline',
    'overflow',
    'overscrollBehavior',
    'padding',
    'placeContent',
    'placeItems',
    'placeSelf',
    'placeholderColor',
    'placeholderOpacity',
    'pointerEvents',
    'position',
    'resize',
    'ringColor',
    'ringOffsetColor',
    'ringOffsetWidth',
    'ringOpacity',
    'ringWidth',
    'rotate',
    'scale',
    'skew',
    'space',
    'stroke',
    'strokeWidth',
    'tableLayout',
    'textAlign',
    'textColor',
    'textDecoration',
    'textOpacity',
    'textOverflow',
    'textTransform',
    'transform',
    'transformOrigin',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'translate',
    'userSelect',
    'verticalAlign',
    'visibility',
    'whitespace',
    'width',
    'wordBreak',
    'zIndex',
  ];

  const activeKeys = [
    'textColor',
    'transitionDuration',
    'backgroundColor',
    'backgroundOpacity',
    'boxShadow',
    'opacity',
    'textColor',
  ];

  const firstLastKeys = ['borderWidth'];

  const variants = {};
  variantsKeys.forEach((key) => {
    const addVariants = [];
    if (activeKeys.includes(key)) {
      addVariants.push(...['active']);
    }
    if (firstLastKeys.includes(key)) {
      addVariants.push(...['first', 'last']);
    }
    variants[key] = addVariants;
  });

  return variants;
};

module.exports = extendVariants;
