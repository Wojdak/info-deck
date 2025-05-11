// src/components/ui/button.tsx
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Button Variants using CVA (Class Variance Authority)
const buttonVariants = cva(
  "group inline-flex items-center justify-center rounded whitespace-nowrap font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 active:scale-[0.99] duration-500",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:bg-green-500 transition",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-zinc-300 bg-transparent text-zinc-900 dark:border-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800",
        secondary:
          "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50",
        ghost: "hover:bg-zinc-200 dark:hover:bg-zinc-700",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  hideIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      rightIcon,
      leftIcon,
      hideIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className })) + " relative overflow-hidden"}
        ref={ref}
        {...props}
      >
        {/* Left Icon (Optional) */}
        {leftIcon && (
          <span className="w-0 mr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:mr-1 group-hover:opacity-100">
            {leftIcon}
          </span>
        )}
        
        {/* Button Text */}
        <Slottable>{props.children}</Slottable>

        {/* Animated Right Icon (Continuous Animation) */}
        {rightIcon && (
          <motion.span
            className="ml-3 flex items-center"
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            {rightIcon}
          </motion.span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
