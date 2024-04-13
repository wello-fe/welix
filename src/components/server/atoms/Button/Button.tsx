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
        'primary-fill':
          'bg-deepblue-500 text-white hover:bg-deepblue-700 focus:ring-deepblue-500/50 font-pretendard text-lg font-bold leading-6 text-left',
        'primary-line':
          'border border-deepblue-500 text-deepblue-500 bg-transparent hover:bg-deepblue-50 focus:ring-deepblue-500/50 font-pretendard text-lg font-bold leading-6 text-left',
        'primary-text':
          'text-deepblue-500 bg-transparent hover:bg-deepblue-50 font-pretendard text-lg font-bold leading-6 text-left',
        'sub-fill':
          'bg-grayscale-300 text-grayscale-800 hover:bg-grayscale-300 focus:ring-grayscale-300/50 font-pretendard text-lg font-bold leading-6 text-left',
        'sub-line':
          'border border-grayscale-300 text-grayscale-900 bg-transparent hover:bg-grayscale-300 focus:ring-grayscale-300/50 font-pretendard text-lg font-bold leading-6 text-left',
        'sub-text':
          'text-grayscale-800 bg-transparent hover:bg-grayscale-200 font-pretendard text-lg font-bold leading-6 text-left',
      },
      height: {
        H56: 'h-14 py-4 px-6',
        H48: 'h-12 py-3 px-6',
        H40: 'h-10 py-3 px-4',
        H32: 'h-8 py-2 px-4',
        H26: 'h-6.5 py-1 px-2.5',
      },
      roundness: {
        rectangle: 'rounded-lg',
        capsule: 'rounded-full',
      },
    },
    defaultVariants: {
      theme: 'primary-fill',
      height: 'H56',
      roundness: 'rectangle',
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
      theme,
      height,
      roundness,
      asChild = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : RadixButton;
    return (
      <Comp
        type={type}
        className={cn(buttonVariants({ theme, height, roundness, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
