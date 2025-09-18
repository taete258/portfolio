import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = {
  base: "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default:
        "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary:
        "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground",
    },
    shape: {
      circle: "rounded-full aspect-square",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "circle",
  },
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants.variants.variant;
  shape?: keyof typeof badgeVariants.variants.shape;
}

function Badge({
  className,
  variant = "default",
  shape = "circle",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants.base,
        badgeVariants.variants.variant[variant],
        badgeVariants.variants.shape[shape],
        className
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
