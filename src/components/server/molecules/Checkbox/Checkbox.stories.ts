import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'server/molecules/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    checked: false,
    size: 'm',
    disabled: false,
    children: 'Accept terms and conditions',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Small: Story = {
  args: {
    size: 's',
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
  },
};

export const Large: Story = {
  args: {
    size: 'l',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
