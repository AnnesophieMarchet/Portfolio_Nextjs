import { Card } from "@/components/ui/card";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start px-4 w-full gap-4">
      <div className="flex-[3]">
        <Card className=" w-full p-4 flex flex-col gap-2">
          {" "}
          <p className="text-lg text-muted-foreground">Mes projets</p>
        </Card>
      </div>
      <div className="flex-[2]  w-full h-full  flex flex-col gap-4">
        <Card className="p-4 flex-1">Word</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};
