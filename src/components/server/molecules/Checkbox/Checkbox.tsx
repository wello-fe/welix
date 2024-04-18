import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

import React from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/class';

const checkboxVariants = cva(
  [
    'rounded',
    'border',
    'flex items-center justify-center',
    'transition-colors duration-200 ease-in-out',
  ],
  {
    variants: {
      checked: {
        false: ['bg-white', 'border-grayscale-500'],
        true: ['bg-deepblue-500', 'border-none'],
      },
      size: {
        s: 'size-4',
        m: 'size-5',
        l: 'size-6',
        xl: 'size-7',
      },
      disabled: {
        true: [
          'bg-grayscale-300',
          'border-grayscale-500',
          'cursor-not-allowed',
        ],
        false: [],
      },
    },
    defaultVariants: {
      checked: false,
      size: 'm',
      disabled: false,
    },
  },
);

interface CheckboxProps
  extends Omit<RadixCheckboxProps, 'checked' | 'disabled'>,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = ({
  className,
  checked,
  size,
  disabled,

  children,
  ...props
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-1">
      <RadixCheckbox.Root
        id="checkbox"
        disabled={!!disabled}
        className={cn(checkboxVariants({ checked, size, disabled, className }))}
        {...props}
      >
        <RadixCheckbox.Indicator>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.56044L5.09182 7L11 1"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor="checkbox">{children}</label>
    </div>
  );
};

export { Checkbox, type CheckboxProps, checkboxVariants };
