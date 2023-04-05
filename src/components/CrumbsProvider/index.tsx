import React, { useCallback, useEffect, useMemo } from 'react';

import { ThemeContext } from '@theme/contexts';
import { darkTheme } from '@theme/dark';
import { lightTheme } from '@theme/light';
import { getThemeTokens } from '@theme/tokens';

import '../resetCss';

interface ICrumbsProviderProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  palette: { primary?: string };
  children: React.ReactNode;
}

const CrumbsProvider: React.FC<ICrumbsProviderProps> = ({ theme, setTheme, children }) => {
  const tokens = useMemo(() => getThemeTokens(theme), [theme]);
  const themeClass = useMemo(() => (theme === 'dark' ? darkTheme : lightTheme), [theme]);

  const toggleTheme = useCallback(
    (newTheme?: 'light' | 'dark') => {
      if (!newTheme) {
        setTheme(theme === 'light' ? 'dark' : 'light');
        return;
      }

      setTheme(newTheme);
    },
    [theme, setTheme],
  );

  useEffect(() => {
    const html = document.querySelector('html');

    if (html && !html.classList.contains(themeClass)) {
      html.classList.remove(lightTheme);
      html.classList.remove(darkTheme);

      html.classList.add(themeClass);
    }
  }, [themeClass]);

  return <ThemeContext.Provider value={{ theme, tokens, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default CrumbsProvider;
