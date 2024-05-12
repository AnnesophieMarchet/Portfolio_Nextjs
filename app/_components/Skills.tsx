/* eslint-disable react/no-unescaped-entities */
import * as React from "react";

import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { NextJsLogo } from "./icons/NextJsLogo";
import { Code } from "./Code";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";

function Skills() {
  return (
    <Section className="flex flex-col  items-start gap-4 py-4">
      <Badge variant={"outline"} className="text-md">
        Hard Skills
      </Badge>
      <h2 className=" pb-2 text-3xl font-semibold  text-primary tracking-tight first:mt-0">
        Mes Compétences en Action
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Je me forme sur <Code>React</Code>, framework frontend
            incontournable.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            J' utilise le framework <Code>TailwindCSS</Code> pour créer de
            belles applications.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <NextJsLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
          <p className="text-sm text-muted-foreground">
            Pour le développement backend, j' utilise <Code> Next.js</Code>, un
            framework robuste et polyvalent.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
