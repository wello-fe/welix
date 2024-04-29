import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import {
  Button as RadixButton,
  type ButtonProps as RadixButtonProps,
} from '@radix-ui/themes';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/class';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2',
  {
    variants: {
      theme: {
        'primary-fill':
          'bg-deepblue-500 text-left text-lg font-bold leading-6 text-white hover:bg-deepblue-700 focus:ring-deepblue-500/50 disabled:hover:bg-deepblue-500',
        'primary-line':
          'border border-deepblue-500 bg-transparent text-left text-lg font-bold leading-6 text-deepblue-500 hover:bg-deepblue-50 focus:ring-deepblue-500/50 disabled:border-deepblue-500 disabled:text-deepblue-500 disabled:hover:bg-transparent',
        'primary-text':
          'bg-transparent text-left text-lg font-bold leading-6 text-deepblue-500 hover:bg-deepblue-50 disabled:text-deepblue-500 disabled:hover:bg-transparent',
        'sub-fill':
          'bg-grayscale-300 text-left text-lg font-bold leading-6 text-grayscale-800 hover:bg-grayscale-300 focus:ring-grayscale-300/50 disabled:hover:bg-grayscale-300',
        'sub-line':
          'border border-grayscale-300 bg-transparent text-left text-lg font-bold leading-6 text-grayscale-900 hover:bg-grayscale-300 focus:ring-grayscale-300/50 disabled:border-grayscale-300 disabled:text-grayscale-900 disabled:hover:bg-transparent',
        'sub-text':
          'bg-transparent text-left text-lg font-bold leading-6 text-grayscale-800 hover:bg-grayscale-200 disabled:text-grayscale-800 disabled:hover:bg-transparent',
      },
      height: {
        H56: 'h-14 gap-1.5 px-6 py-4',
        H48: 'h-12 gap-1.5 px-6 py-3',
        H40: 'h-10 gap-1 px-4 py-3',
        H32: 'h-8 gap-1 px-4 py-2',
        H26: 'h-6 gap-1 px-2.5 py-1',
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
  extends RadixButtonProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: RadixButtonProps['color'];
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
        className={cn(buttonVariants({ theme, height, roundness, className }), {
          'opacity-50 cursor-not-allowed': props.disabled,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
