const { mergeConfig, loadConfigFromFile } = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths').default;
const path = require('path');
const vanillaExtractPlugin = require('@vanilla-extract/vite-plugin').vanillaExtractPlugin;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-themes',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async config => {
    config.plugins.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), 'tsconfig.aliases.json')],
      }),
      vanillaExtractPlugin(),
    );

    return config;
  },
};
