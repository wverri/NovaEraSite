'use client';

import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-uo-crimson text-white hover:bg-red-900",
        secondary: "bg-uo-darkwood text-uo-parchment hover:bg-gray-800",
        gold: "bg-uo-gold text-uo-darkwood hover:bg-yellow-600",
        outline: "border border-uo-darkwood dark:border-uo-gold text-uo-darkwood dark:text-uo-mist hover:bg-uo-darkwood/10 dark:hover:bg-uo-gold/10",
        ghost: "hover:bg-uo-parchment/10 text-uo-darkwood dark:text-uo-mist hover:text-uo-crimson dark:hover:text-uo-gold",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants }; 