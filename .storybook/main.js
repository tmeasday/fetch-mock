module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: (config) => {
    config.resolve.alias['isomorphic-fetch'] = require.resolve(
      '../src/__mocks__/isomorphic-fetch.js'
    );
    return config;
  },
};
