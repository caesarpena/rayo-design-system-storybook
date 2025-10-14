// src/stories/RayoIcon.stories.tsx
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createComponent } from '@lit/react';

// Sample MDI icons (path data from @mdi/js)
import {
  mdiHome,
  mdiInformationOutline,
  mdiAlertCircle,
  mdiAccount,
  mdiCheckCircle,
  mdiClose,
  mdiPlus,
  mdiPencil,
  mdiTrashCan,
  mdiMagnify,
} from '@mdi/js';

// pulls in the element class & registers custom elements
import { RayoIconComponent } from 'rayo-ux-web-design-system/all';
import { colors } from 'rayo-ux-web-design-system/enums/colors';

const RayoIcon = createComponent({
  tagName: 'rayo-icon',
  elementClass: RayoIconComponent,
  react: React,
  events: {},
});
(RayoIcon as any).displayName = 'rayo-icon';

// A small curated set for the select control (you can add more as needed)
const mdiIconSet = {
  'Home': mdiHome,
  'Info (Outline)': mdiInformationOutline,
  'Alert Circle': mdiAlertCircle,
  'Account': mdiAccount,
  'Check Circle': mdiCheckCircle,
  'Close': mdiClose,
  'Plus': mdiPlus,
  'Pencil': mdiPencil,
  'Trash Can': mdiTrashCan,
  'Search (Magnify)': mdiMagnify,
};

const iconOptions = Object.keys(mdiIconSet);
const colorOptions = ['', ...Object.values(colors)];

const meta: Meta<typeof RayoIcon> = {
  title: 'Rayo/Icon',
  component: RayoIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '',
      },
    },
  },
  argTypes: {
    // Icon as a select with mapping → returns the actual SVG path data
    icon: {
      control: { type: 'select' },
      options: iconOptions,
      mapping: mdiIconSet,
      description:
        'Sample set of MDI icons. Use the dropdown to pick one, or paste any SVG path from @mdi/js. ' +
        'Library: https://pictogrammers.com/library/mdi/',
    },
    size: { control: { type: 'number', min: 12, max: 128, step: 2 } },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },

    // Prefer fillColor for SVG fill; if your component still uses `color`, swap the name here.
    color: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'Fill color token (maps to CSS var: --color-<token>).',
    },

    htmlClass: { control: 'text' },
    htmlID: { control: 'text' },
  },
  args: {
    icon: 'Home', // uses mapping -> mdiHome path
    size: 24,
    opacity: 1,
    color: '',
    htmlClass: '',
    htmlID: '',
  },
};
export default meta;

type Story = StoryObj<typeof RayoIcon>;

export const Primary: Story = {};

export const InfoColored: Story = {
  args: { icon: 'Info (Outline)', color: colors.accent },
};

export const WarningLarge: Story = {
  args: { icon: 'Alert Circle', size: 48, color: colors.accent },
};

export const SemiTransparent: Story = {
  args: { icon: 'Home', opacity: 0.5 },
};
