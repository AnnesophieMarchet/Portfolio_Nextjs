import React from "react";
import { Section } from "./Section";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { EmailIcon } from "./icons/EmailIcon";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 py-4">
        <Section className="flex item-baseline ">
          <h1 className="text-lg font-bold text-primary">
            annesophiemarchet.github.io
          </h1>
          <div className="flex-1 " />
          <ul className="flex items-center gap-4">
            <Link
              href="https://github.com/AnnesophieMarchet"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcon size={18} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anne-sophie-marchet-3a9a58269/"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedinIcon size={18} className="text-foreground" />
            </Link>
            <Link
              href="mailto:annesophiemarchet@gmail.com"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <EmailIcon size={18} className="text-foreground" />
            </Link>
          </ul>
        </Section>
      </header>
    </>
  );
};
