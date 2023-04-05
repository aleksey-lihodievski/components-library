import { createVar, style } from '@vanilla-extract/css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useEffect, useState } from 'react';
import { withReactContext } from 'storybook-react-context';

import CrumbsProvider from '../src/components/CrumbsProvider';
import { background, backgroundColor } from './styles';

function withColorScheme(Story, context) {
  const { scheme } = context.globals;
  const [theme, setTheme] = useState(scheme);

  useEffect(() => {
    setTheme(scheme);
  }, [scheme]);

  if (theme === 'dark') {
    return (
      <div className={background} style={assignInlineVars({ [backgroundColor]: '#333' })}>
        <CrumbsProvider theme={theme} setTheme={setTheme}>
          <Story />
        </CrumbsProvider>
      </div>
    );
  }

  return (
    <div className={background} style={assignInlineVars({ [backgroundColor]: '#fff' })}>
      <CrumbsProvider theme={theme} setTheme={setTheme}>
        <Story />
      </CrumbsProvider>
    </div>
  );
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withColorScheme, withReactContext];

// these are types for theme changer
export const globalTypes = {
  scheme: {
    name: 'Scheme',
    description: 'Select light or dark theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
};
