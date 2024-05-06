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
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className=" pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je fait
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
            J utilise<Code>React</Code>comme framework frontend.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
          <p className="text-sm text-muted-foreground">
            J utilise<Code>Next.js</Code>comme framework backend.
          </p>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <NextJsLogo
            size={42}
            className="animate-spin"
            style={{ animationDuration: "10s" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            J utilise<Code>TailwindCSS</Code>pour créer de belles applications.
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
