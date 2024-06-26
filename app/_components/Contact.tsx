import { Section } from "./Section";
import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";

function Contact() {
  return (
    <Section className="flex flex-col  items-start gap-4 py-4">
      <Badge variant={"outline"} className="text-md">
        Contact
      </Badge>

      <div className="flex max-md:flex-col  w-full gap-4">
        <ContactCard
          className="flex-1 text-sm"
          url="https://www.linkedin.com/in/anne-sophie-marchet-3a9a58269/"
          name="Anne-Sophie Marchet"
          image="https://media.licdn.com/dms/image/D4D03AQGpUtWKlXCt0w/profile-displayphoto-shrink_400_400/0/1705575348318?e=1720656000&v=beta&t=YzsyEQ3aX8lBQ7Gdz1SfWkn218P6Ye5GJOJA0afC45k"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          description="500 abonnés"
        />
        <ContactCard
          className="flex-1 text-sm "
          url="https://github.com/AnnesophieMarchet"
          name="Mon Github"
          image="https://media.licdn.com/dms/image/D4D03AQGpUtWKlXCt0w/profile-displayphoto-shrink_400_400/0/1705575348318?e=1720656000&v=beta&t=YzsyEQ3aX8lBQ7Gdz1SfWkn218P6Ye5GJOJA0afC45k"
          mediumImage="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
          description="Repository Github "
        />
        <ContactCard
          className="flex-1 text-sm"
          url="mailto:annesophiemarchet@gmail.com"
          name="Contacter moi"
          image="https://media.licdn.com/dms/image/D4D03AQGpUtWKlXCt0w/profile-displayphoto-shrink_400_400/0/1705575348318?e=1720656000&v=beta&t=YzsyEQ3aX8lBQ7Gdz1SfWkn218P6Ye5GJOJA0afC45k"
          mediumImage="https://thumbs.dreamstime.com/b/logo-gmail-google-llc-applications-de-logotypes-officiels-apps-kiev-ukraine-octobre-199945501.jpg"
          description="Mon adresse mail"
        />
      </div>
    </Section>
  );
}

export default Contact;
