// src/stories/RayoText.stories.tsx
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createComponent } from '@lit/react';

// sample MDI icons (path data) for the icon select
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

import { RayoTextComponent } from 'rayo-ux-web-design-system/all';
import { sizes } from 'rayo-ux-web-design-system/enums/sizes';
import { colors } from 'rayo-ux-web-design-system/enums/colors';

const RayoText = createComponent({
  tagName: 'rayo-text',
  elementClass: RayoTextComponent,
  react: React,
  events: {},
});
(RayoText as any).displayName = 'rayo-text';

// curated icon set for the control
const mdiIconSet = {
  None: '',
  Home: mdiHome,
  'Info (Outline)': mdiInformationOutline,
  'Alert Circle': mdiAlertCircle,
  Account: mdiAccount,
  'Check Circle': mdiCheckCircle,
  Close: mdiClose,
  Plus: mdiPlus,
  Pencil: mdiPencil,
  'Trash Can': mdiTrashCan,
  'Search (Magnify)': mdiMagnify,
};
const iconOptions = Object.keys(mdiIconSet);

const meta: Meta<typeof RayoText> = {
  title: 'Rayo/Text',
  component: RayoText,
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
    text: { control: 'text' },
    tag: { control: 'select', options: ['h1','h2','h3','h4','h5','h6','span'] },
    appearance: { control: 'select', options: ['title','headline','headline-alt'] },
    size: { control: 'select', options: ['', ...Object.values(sizes)] },

    // 🔽 icon as a select with mapping
    icon: {
      control: { type: 'select' },
      options: iconOptions,
      mapping: mdiIconSet,
      description:
        'Sample MDI icons (mapped to SVG path). Full set: https://pictogrammers.com/library/mdi/',
    },

    // optional: make iconColor a select of your tokens, too
    iconColor: { control: 'select', options: ['', ...Object.values(colors)] },
    iconOpacity: { control: 'text' },
    htmlClass: { control: 'text' },
    htmlID: { control: 'text' },
  },
  args: {
    text: 'Hello Rayo',
    tag: 'span',
    appearance: 'title',
    size: '',
    icon: 'None',        // uses mapping → ''
    iconColor: '',
    iconOpacity: '',
    htmlClass: '',
    htmlID: '',
  },
};
export default meta;

type Story = StoryObj<typeof RayoText>;

export const Primary: Story = {};
export const HeadlineLg: Story = { args: { text: 'Headline', appearance: 'headline', size: sizes.lg, tag: 'h2' } };
export const TitleSm: Story = { args: { text: 'Section Title', appearance: 'title', size: sizes.sm, tag: 'h3' } };
export const WithIcon: Story = { args: { text: 'Info', icon: 'Info (Outline)', appearance: 'title', tag: 'span' } };
