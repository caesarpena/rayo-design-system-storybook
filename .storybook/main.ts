// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/react-vite', options: {} },
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials', // includes actions/controls; keep it
    '@storybook/addon-docs',       // ensure docs tab is available
  ],
   // turn on autodocs globally
};
export default config;
