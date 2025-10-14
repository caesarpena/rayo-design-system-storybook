// .storybook/manager.ts
import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Rayo UX',
    brandTarget: '_self',          // optional
    brandImage: '/caesarpena-logo.png',
  }),
});
