import { createTheme } from '@vanilla-extract/css';

import { getThemeTokens, vars } from '../.';

const lightTokens = getThemeTokens('light');

export const lightTheme = createTheme(vars, lightTokens);
