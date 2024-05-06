import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (props: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("max-w-7xl px-4 m-auto h-440", props.className)}>
      {props.children}
    </section>
  );
};
