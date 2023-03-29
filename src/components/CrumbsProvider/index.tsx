import React, { useEffect } from 'react';

import { darkTheme } from '../../theme/dark';
import { lightTheme } from '../../theme/light';
import '../resetCss';

interface ICrumbsProviderProps {
  theme: string;
  children: React.ReactNode;
}

const CrumbsProvider: React.FC<ICrumbsProviderProps> = ({ theme, children }) => {
  useEffect(() => {
    const html = document.querySelector('html');

    if (html && !html.classList.contains(theme)) {
      html.classList.remove(lightTheme);
      html.classList.remove(darkTheme);

      html.classList.add(theme);
    }
  }, [theme]);

  return <>{children}</>;
};

export default CrumbsProvider;
