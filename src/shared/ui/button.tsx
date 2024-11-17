import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center w-full gap-2 rounded-[10px] text-[14px] font-bold leading-[19px] transition-colors outline-none disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-[#FFAF10] text-[#363636] gap-2 [@media(any-hover:hover){&:hover}]:bg-[#FFC043]",
        revert:
          "bg-transparent border border-[#D13A3A] text-[#D13A3A] [@media(any-hover:hover){&:hover}]:text-white [@media(any-hover:hover){&:hover}]:bg-[#D13A3A]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      addonLeft,
      addonRight,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {addonLeft && <span>{addonLeft}</span>}

        {children}

        {addonRight && <span>{addonRight}</span>}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
