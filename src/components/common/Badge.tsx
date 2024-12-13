import React from "react";
import { cva } from "class-variance-authority";
import { Label } from "@/components/common/Label";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

const badgeVariants = cva(
  "rounded-md w-min h-min  text-center flex items-center justify-center gap-1",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        unfulfilled: "bg-orange-200",
        fulfilled: "bg-green-300/50",
      },
      size: {
        default: "px-2 py-1",
        sm: "px-1 py-0.5",
        md: "px-2 py-2",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function Badge({
  size,
  children,
  className,
  labelClass,
  variant,
}: {
  size?: "default" | "sm" | "md" | "lg" | null | undefined;
  children: React.ReactNode;
  className?: string;
  labelClass?: string;
  variant?: "unfulfilled" | "fulfilled";
}) {
  if (variant === "unfulfilled") {
    return (
      <div className={cn(badgeVariants({ variant, size, className }))}>
        <Circle className="w-2 h-2  " />
        <Label size={"xs"} className={labelClass}>
          {children}
        </Label>
      </div>
    );
  } else if (variant === "fulfilled") {
    return (
      <div className={cn(badgeVariants({ variant, size, className }))}>
        <Circle className="w-2 h-2 bg-black rounded-full" />
        <Label size={"xs"} className={labelClass}>
          {children}
        </Label>
      </div>
    );
  } else
    return (
      <div className={cn(badgeVariants({ variant, size, className }))}>
        <Label
          size={"xs"}
          className={cn("text-primary-foreground", labelClass)}
        >
          {children}
        </Label>
      </div>
    );
}
