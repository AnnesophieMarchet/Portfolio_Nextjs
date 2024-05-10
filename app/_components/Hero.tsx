/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Code } from "./Code";
import Imagephto from "@/app/_components/photo_CV.png";

export const Hero = () => {
  const contenu = [
    {
      texte:
        "Après une carrière dans l'industrie pharmaceutique et chimique en tant que technicienne de fabrication, je me suis lancée dans le monde du développement web. Passionnée de technologie et avide d'apprendre, j'ai suivi des formations en ligne sur Codecademy (JavaScript, CSS, PHP, SQL) ainsi qu'un Bootcamp intensif de 6 mois à la Wild Code School de Lyon (Tailwind, React, Next.js, Express.js). Mes projets sont visibles sur ",
      lien: "https://github.com/AnnesophieMarchet",
      icone: <GitHubLogoIcon className="inline" />,
    },
    {
      texte:
        ". Je suis désormais à la recherche d'une opportunité à partir de septembre 2024 pour enrichir mon expérience et renforcer mes compétences dans le domaine du développement web. Vous trouverez plus de détails sur mon parcours sur ",
      lien: "https://www.linkedin.com/in/anne-sophie-marchet-3a9a58269/",
      icone: <LinkedInLogoIcon className="inline" />,
    },
    {
      texte: ". N'hésitez pas à me contacter.",
    },
  ];

  return (
    <Section className="flex max-md:flex-col items-start px-4 gap-4">
      <div className="flex-[3] flex flex-col w-full gap-2">
        <h2 className="font-caption text-5xl text-primary">
          Anne-sophie Marchet
        </h2>
        <h3 className="text-3xl font-caption">Développeuse Web Full-Stack</h3>
        <p className="text-base">
          {contenu.map((item, index) => (
            <span key={index}>
              {item.texte}
              {item.lien && (
                <Link href={item.lien} target="_blank">
                  <Code className="inline-flex items-center gap-1">
                    {item.icone}
                    {index === 0 ? "Github" : "Linkedin"}
                  </Code>
                </Link>
              )}
            </span>
          ))}
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://annesophiemarchet.github.io/assets/Photo%20CV.png"
          alt="photo anne sophie"
          className="w-full h-auto max-w-xs rounded-sm max-md:w-56"
        />
      </div>
    </Section>
  );
};
