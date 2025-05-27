module.exports = {
  staticDirs: ["../public"],
  stories: ["../src/stories/**/*.stories.@(js|ts)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
  typescript: {
    check: false,
    checkOptions: {},
  },
  webpackFinal: async (config) => {
    // Add .ts support without replacing existing rules
    config.module.rules.push({
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true, // Faster builds
            appendTsSuffixTo: [/\.vue$/], // Only if using Vue
          },
        },
      ],
    });

    // Ensure .ts extensions are resolved
    config.resolve.extensions.push(".ts");

    return config;
  },
};
import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
};

export default config;