import { createTheme } from '@vanilla-extract/css';

import { getThemeTokens, vars } from '../.';

const darkTokens = getThemeTokens('dark');

export const darkTheme = createTheme(vars, darkTokens);
