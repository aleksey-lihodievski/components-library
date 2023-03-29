import { createContext } from 'react';

export const ThemeContext = createContext<{ theme: string }>({ theme: 'initial_theme' });
