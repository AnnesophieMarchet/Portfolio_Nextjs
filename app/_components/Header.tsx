import React from "react";
import { Sections } from "./Sections";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Sections className="flex item-baseline">
        <h1 className="text-lg font-bold text-primary-foreground">
          https://annesophiemarchet.github.io/
        </h1>
        <div className="flex-1 " />
        <ul>
          <Button className="size-6">
            <GithubIcon size={16} className="text-foreground" />
          </Button>
        </ul>
      </Sections>
    </header>
  );
};
