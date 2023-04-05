import { createContext } from 'react';

import { getThemeTokens } from '..';

export const ThemeContext = createContext({
  theme: 'light' as 'light' | 'dark',
  tokens: getThemeTokens('light'),

  toggleTheme: (theme?: 'light' | 'dark') => {},
});
