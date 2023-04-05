import { useContext, useMemo } from 'react';

import { ThemeContext } from '@theme/contexts';

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const ret = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return ret;
};
