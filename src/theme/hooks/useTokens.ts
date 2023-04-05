import { useContext } from 'react';

import { ThemeContext } from '@theme/contexts';

export const useTokens = () => {
  const { tokens } = useContext(ThemeContext);

  return tokens;
};
