import { withThemes } from 'storybook-addon-themes/react';
import { withReactContext } from 'storybook-react-context';

// import CrumbsProvider from '../src/components/CrumbsProvider';
import CrumbsProvider from '../src/components/CrumbsProvider';
import { darkTheme } from '../src/theme/dark';
import { lightTheme } from '../src/theme/light';

export const parameters = {
  darkMode: {
    current: 'light',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  themes: {
    default: 'dark',
    list: [
      { name: 'light', class: lightTheme, color: '#fff', classTarget: 'html' },
      { name: 'dark', class: darkTheme, color: '#363636', classTarget: 'html' },
    ],
  },
};

export const decorators = [
  Story => (
    <CrumbsProvider theme={darkTheme}>
      <Story />
    </CrumbsProvider>
  ),
  withThemes,
  withReactContext,
];
