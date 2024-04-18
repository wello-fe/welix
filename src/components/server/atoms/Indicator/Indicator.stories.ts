import type { Meta, StoryObj } from '@storybook/react';

import { Indicator } from './Indicator';

const meta = {
  title: 'server/atoms/Indicator',
  component: Indicator,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description:
        'The current value of the progress indicator, between 0 and 100.',
    },
  },
  args: {
    value: 50,
  },
} satisfies Meta<typeof Indicator>;

export default meta;

type Story = StoryObj<typeof Indicator>;

export const HalfFilled: Story = {
  args: {
    value: 50,
  },
  storyName: '50% Filled',
};

export const FullyFilled: Story = {
  args: {
    value: 100,
  },
  storyName: '100% Filled',
};

export const Empty: Story = {
  args: {
    value: 0,
  },
  storyName: 'Empty Filled',
};
