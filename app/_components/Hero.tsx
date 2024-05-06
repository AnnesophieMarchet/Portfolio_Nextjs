/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start px-4  gap-4">
      <div className="flex-[3] flex flex-col w-full gap-2">
        <h2 className="font-caption text-5xl text-primary">
          Anne-sophie Marchet
        </h2>
        <h3 className="text-3xl font-caption">Développeuse Web Full-Stack</h3>
        <p className="text-base">
          Mes projets son visible sur{" "}
          <Link href="https://github.com/AnnesophieMarchet" target="_blank">
            <Code className="inline-flex items-center gap-1">
              <GitHubLogoIcon className="inline" />
              Github
            </Code>
          </Link>
          . Raconte ta vie Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolor itaque alias quidem! Odit, quam maiores. Mon parcours est
          disponible sur{" "}
          <Link
            href="https://www.linkedin.com/in/anne-sophie-marchet-3a9a58269/"
            target="_blank"
          >
            <Code className="inline-flex items-center gap-1">
              <LinkedInLogoIcon className="inline" />
              Linkedin
            </Code>
          </Link>
          Mollitia fugit dolorem rem corporis eos adipisci reprehenderit quis,
          doloremque nemo amet distinctio vero provident animi recusandae
          facilis quod autem optio praesentium assumenda voluptates? Dolores!
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://annesophiemarchet.github.io/assets/Photo%20CV.png"
          alt="picture anne sophie"
          className="w-full h-auto max-w-xs rounded-sm max-md:w-56 "
        />
      </div>
    </Section>
  );
};
