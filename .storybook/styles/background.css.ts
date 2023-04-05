import { createVar, style } from '@vanilla-extract/css';

export const backgroundColor = createVar();

export const background = style({
  position: 'absolute',
  top: 0,
  left: 0,

  minWidth: '100%',
  height: '100%',

  background: backgroundColor,

  padding: '16px',
  boxSizing: 'border-box',
});
