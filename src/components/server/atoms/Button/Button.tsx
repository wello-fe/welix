import React from 'react';

import { Slot } from '@radix-ui/react-slot';
import {
  Button as RadixButton,
  type ButtonProps as RadixButtonProps,
} from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/class';

const buttonVariants = cva(
  'inline-flex items-center justify-center border rounded-lg text-sm font-medium transition ease-in-out duration-150 focus:outline-none focus:ring-2',
  {
    variants: {
      theme: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
        secondary:
          'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
      },
      size: {
        small: 'px-2 py-1 text-xs',
        medium: 'px-4 py-2',
        large: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      theme: 'primary',
      size: 'medium',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: RadixButtonProps['color'];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      theme = 'primary',
      size = 'medium',
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : RadixButton;
    return (
      <Comp
        className={cn(buttonVariants({ theme, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
