import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        " bg-accent/80 font-mono  border-accent p-0.5 rounded-sm text-primary",
        className
      )}
      {...props}
    ></span>
  );
};
