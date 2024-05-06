/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import {
  Atom,
  BriefcaseBusiness,
  Code,
  MessageCircleQuestion,
} from "lucide-react";

import { SideProject, SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard";
import { FormationProject, FormationProps } from "./FormationProject";

export const Status = () => {
  return (
    <Section className=" h-full flex max-md:flex-col items-start px-4 w-full gap-4 ">
      <div className="h-full flex-[3] w-full">
        <Card className=" w-full  p-4 flex flex-col gap-2  ">
          {" "}
          <p className="text-lg text-muted-foreground ">Mes projets</p>
          <div
            className="flex  justify-around flex-col gap-4  "
            style={{ height: "410px" }}
          >
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
          <p className="text-lg text-muted-foreground  mb-2">Formation</p>
          <div className="flex flex-col gap-4">
            {FORMATION_PORJECTS.map((formation, index) => (
              <FormationProject
                key={index}
                image={formation.image}
                title={formation.title}
                role={formation.role}
                date={formation.date}
                url={formation.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          {" "}
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactCard
            url="https://www.linkedin.com/in/anne-sophie-marchet-3a9a58269/"
            name="Anne-Sophie Marchet"
            image="https://media.licdn.com/dms/image/D4D03AQGpUtWKlXCt0w/profile-displayphoto-shrink_400_400/0/1705575348318?e=1720656000&v=beta&t=YzsyEQ3aX8lBQ7Gdz1SfWkn218P6Ye5GJOJA0afC45k"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="500 abonné"
          />
          <ContactCard
            url="mailto:annesophiemarchet@gmail.com"
            name="Mon adresse email"
            image="https://media.licdn.com/dms/image/D4D03AQGpUtWKlXCt0w/profile-displayphoto-shrink_400_400/0/1705575348318?e=1720656000&v=beta&t=YzsyEQ3aX8lBQ7Gdz1SfWkn218P6Ye5GJOJA0afC45k"
            mediumImage="https://thumbs.dreamstime.com/b/logo-gmail-google-llc-applications-de-logotypes-officiels-apps-kiev-ukraine-octobre-199945501.jpg"
            description="email"
          />
        </Card>
      </div>
    </Section>
  );
};
const SIDE_PORJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Pokedex",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, placeat?",
    url: "/",
  },
  {
    Logo: BriefcaseBusiness,
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, saepe.",
    url: "/",
  },
  {
    Logo: Atom,
    title: "Unicorn Quiz",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio.",
    url: "/",
  },
  {
    Logo: MessageCircleQuestion,
    title: "Quizz from Scratch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio.",
    url: "/",
  },
  // {
  //   Logo: MessageCircleQuestion,
  //   title: "Quizz from Scratch",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, optio.",
  //   url: "/",
  // },
];

const FORMATION_PORJECTS: FormationProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/C4E0BAQEg35p6Oy3alQ/company-logo_100_100/0/1674818904314/wild_code_school_alumni__students_logo?e=1723075200&v=beta&t=WkoXE6x2uKbppZKFk1FU7nijVaF-TELcoQKmEittlEo",
    title: "Wild Code School",
    role: " Bootcamp Développeur Full-Stack",
    date: "février 2024 - juillet 2024 ",
    url: "https://www.wildcodeschool.com/fr-fr/",
  },

  // {
  //   image:
  //     "https://media.licdn.com/dms/image/C4D0BAQGpDiS3imrIZA/company-logo_100_100/0/1638451286700/ldigital_logo?e=1723075200&v=beta&t=9PQwp_vrsGgc1XPZwWnC5-k6x9DTTswJoVHMW2frIBk",
  //   title: "L Digital",
  //   role: "Parcours L-transit",
  //   date: "janvier 2024 - février 2024 ",
  //   url: "https://www.ldigital.org/",
  // },
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQHQ2d_UpqzPHg/company-logo_100_100/0/1688566825101/codecademy_logo?e=1723075200&v=beta&t=nCZ2B8geZQNLBE6pSZYkeQkGctKqREeLRgchTEOBUiU",
    title: "Codecademy",
    role: " Développeur Back-end",
    date: "juillet 2023 - janvier 2024 ",
    url: "https://www.codecademy.com/",
  },
];
export default Status;
