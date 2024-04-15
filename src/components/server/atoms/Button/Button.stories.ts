import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'server/atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: [
        'primary-fill',
        'primary-line',
        'primary-text',
        'sub-fill',
        'sub-line',
        'sub-text',
      ],
    },
    height: {
      control: 'select',
      options: ['H56', 'H48', 'H40', 'H32', 'H26'],
    },
    roundness: {
      control: 'select',
      options: ['rectangle', 'capsule'],
    },
    asChild: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button Text',
    asChild: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    theme: 'primary-fill',
  },
};

export const Line: Story = {
  args: {
    theme: 'primary-line',
  },
};

export const Text: Story = {
  args: {
    theme: 'primary-text',
  },
};

export const Small: Story = {
  args: {
    height: 'H26',
  },
};

export const Rounded: Story = {
  args: {
    roundness: 'capsule',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
