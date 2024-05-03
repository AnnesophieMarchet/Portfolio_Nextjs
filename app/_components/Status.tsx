import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Code, LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";
import { SunMoon } from "lucide-react";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start px-4 w-full gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          {" "}
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PORJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>

      <div className="flex-[2]  w-full h-full  flex flex-col gap-4">
        <Card className="p-4 flex-1">
          {" "}
          <p className="text-lg text-muted-foreground">Work</p>
        </Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const SIDE_PORJECTS = [
  {
    Logo: Code,
    title: "Pokdex",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat?",
  },
  {
    Logo: Camera,
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, saepe.",
  },
  {
    Logo: SunMoon,
    title: "Uniccorn Quizz",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio.",
  },
  {
    Logo: CircleHelp,
    title: "Quizz from Scractch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio.",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4  hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

export default Status;
