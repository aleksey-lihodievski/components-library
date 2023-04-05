import { createThemeContract } from '@vanilla-extract/css';

import { getThemeTokens } from './tokens';

const tokensContract = getThemeTokens('light');

export const vars = createThemeContract({
  ...tokensContract,
});
