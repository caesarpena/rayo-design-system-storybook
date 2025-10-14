// src/stories/RayoBadge.stories.tsx
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createComponent } from '@lit/react';

// pulls in the element class & registers custom elements
import { RayoBadgeComponent } from 'rayo-ux-web-design-system/all';
// ⤵️ Adjust these import paths to your package structure
import { sizes } from 'rayo-ux-web-design-system/enums/sizes';
import { colors } from 'rayo-ux-web-design-system/enums/colors';

const RayoBadge = createComponent({
  tagName: 'rayo-badge',
  elementClass: RayoBadgeComponent,
  react: React,
  events: {},
});
(RayoBadge as any).displayName = 'rayo-badge';
const sizeOptions = ['', ...Object.values(sizes)];
const colorOptions = ['', ...Object.values(colors)];

const meta: Meta<typeof RayoBadge> = {
  title: 'Rayo/Badge',
  component: RayoBadge,
  parameters: { layout: 'centered' },
  argTypes: {
    value: { control: 'text' },
    maxValue: { control: 'text' },
    size: { control: 'select', options: sizeOptions },
    badgeColor: { control: 'select', options: colorOptions, description: 'Color token from enum' },
    htmlClass: { control: 'text' },
    htmlID: { control: 'text' },
  },
  args: {
    value: '',
    maxValue: '',
    size: '',
    badgeColor: '',
    htmlClass: '',
    htmlID: '',
  },
};
export default meta;

type Story = StoryObj<typeof RayoBadge>;

export const Primary: Story = {
  args: { value: 120, maxValue: 99, size: sizes.md, badgeColor: colors.accent },
};

