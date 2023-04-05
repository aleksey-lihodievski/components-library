import { createVar, keyframes, style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@theme/index';

export const childrenContent = createVar();
export const color = createVar();

const DEPTH = 5;

export const buttonBase = style({
  position: 'relative',
  top: -DEPTH,
  left: -DEPTH,

  color: vars.white,
  fontWeight: 'bold',
  fontSize: '1rem',

  border: '2px solid',
  borderColor: vars.black,
  willChange: 'scroll-position',

  // processing to `1px 1px 0px 0px ${vars.black}, 2px 2px 0px 0px ${vars.black}, 3px 3px 0px 0px ${vars.black}, 4px 4px 0px 0px ${vars.black}, 5px 5px 0px 0px ${vars.black}`
  boxShadow: Array(DEPTH + 1)
    .fill(true)
    .map((_, idx) => `${idx}px ${idx}px 0px 0px ${vars.black}`)
    .join(', '),

  padding: '0.5rem 1rem',

  transition: '0.3s all ease',
  cursor: 'pointer',

  outline: 'none',

  ':hover': {
    transition: '0.1s all ease',
  },

  ':focus': {
    transition: '0.1s all ease',
  },

  ':active': {
    boxShadow: '0px 0px 0px 0px',
    transform: `translate(${DEPTH}px, ${DEPTH}px)`,
  },
});

export const buttonColor = styleVariants({
  default: [
    {
      color: vars.black,
      background: vars.white,

      selectors: {
        '&:focus:not(:hover), &:hover:not(:focus)': {
          background: vars.gray.light,
        },
      },
    },
  ],

  primary: [
    {
      background: vars.primary.main,

      selectors: {
        '&:focus:not(:hover), &:hover:not(:focus)': {
          background: vars.primary.light,
        },
      },
    },
  ],

  secondary: [
    {
      background: vars.secondary.main,

      selectors: {
        '&:focus:not(:hover), &:hover:not(:focus)': {
          background: vars.secondary.light,
        },
      },
    },
  ],

  danger: [
    {
      background: vars.error.main,

      selectors: {
        '&:focus:not(:hover), &:hover:not(:focus)': {
          background: vars.error.light,
        },
      },
    },
  ],

  warning: [
    {
      background: vars.warning.main,

      selectors: {
        '&:focus:not(:hover), &:hover:not(:focus)': {
          background: vars.warning.light,
        },
      },
    },
  ],
});

export const buttonSize = styleVariants({
  small: [
    {
      padding: '0.5rem 1rem',
    },
  ],

  medium: [
    {
      padding: '0.8rem 1.2rem',
    },
  ],

  large: [
    {
      padding: '1rem 1.5rem',
    },
  ],
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',

  cursor: 'not-allowed',
});

export const spinner = style({
  animation: `${rotate} 1.5s linear infinite`,
});

export const buttonDisabled = style({
  boxShadow: '0px 0px 0px 0px',
  transform: `translate(${DEPTH}px, ${DEPTH}px)`,

  pointerEvents: 'none',

  transition: '0.1s',
});

export const spaceKeeper = style({
  color: 'transparent',
});

export const buttonDisableWrapper = style({
  cursor: 'not-allowed',
});
