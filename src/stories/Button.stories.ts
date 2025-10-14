// src/stories/RayoButton.stories.tsx
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
  mdiArrowRight,
} from '@mdi/js';

import { RayoButtonComponent } from 'rayo-ux-web-design-system/all';
import { sizes } from 'rayo-ux-web-design-system/enums/sizes';

const sizeOptions = ['', ...Object.values(sizes)];

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
  'Arrow Right': mdiArrowRight,
};
const iconOptions = Object.keys(mdiIconSet);

const RayoButton = createComponent({
  tagName: 'rayo-button',
  elementClass: RayoButtonComponent,
  react: React,
  events: {
    onClick: 'onClick',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onMouseover: 'onMouseover',
  },
});
(RayoButton as any).displayName = 'rayo-button';
const meta: Meta<typeof RayoButton> = {
  title: 'Rayo/Button',
  component: RayoButton,
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
    appearance: {
      control: 'select',
      options: ['solid', 'accent', 'quiet', 'outline', 'danger', 'link'],
    },
    alignment: { control: 'radio', options: ['', 'left', 'right'] },
    iconPlacement: { control: 'radio', options: ['left', 'right'] },
    htmlType: { control: 'select', options: ['button', 'submit', 'reset', 'menu'] },
    isDisabled: { control: 'boolean' },
    text: { control: 'text' },

    // 🔽 icon as a select with mapping
    icon: {
      control: { type: 'select' },
      options: iconOptions,
      mapping: mdiIconSet,
      description:
        'Sample MDI icons (mapped to SVG path). Full set: https://pictogrammers.com/library/mdi/',
    },

    size: { control: 'select', options: sizeOptions },
    hrefLink: { control: 'text' },
    htmlClass: { control: 'text' },
    htmlID: { control: 'text' },
    onClick: { action: 'clicked' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    onMouseover: { action: 'mouse-over' },
  },
  args: {
    appearance: 'solid',
    text: 'Button',
    icon: 'None',              // uses mapping → ''
    iconPlacement: 'left',
    isDisabled: false,
    alignment: '',
    htmlType: 'button',
    size: '',
    hrefLink: '',
    htmlClass: '',
    htmlID: '',
  },
};
export default meta;

type Story = StoryObj<typeof RayoButton>;

export const Primary: Story = {};

export const WithIconRight: Story = {
  args: { icon: 'Arrow Right', iconPlacement: 'right', text: 'Next' },
};

export const Disabled: Story = {
  args: { isDisabled: true, text: 'Disabled', icon: 'None' },
};
