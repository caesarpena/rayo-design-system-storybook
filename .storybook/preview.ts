import type { Preview } from "@storybook/react-vite";
import 'rayo-ux-web-design-system/styles/css/main.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
