import { createThemeContract } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { getThemeTokens } from './tokens.css';

const tokensContract = getThemeTokens('light');

export const vars = createThemeContract({
  ...tokensContract,
});

export const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    something: vars,
  },
});

export const sprinkles = createSprinkles(colorProperties);
