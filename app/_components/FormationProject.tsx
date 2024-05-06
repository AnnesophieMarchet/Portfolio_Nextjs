import Link from "next/link";

export type FormationProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
export const FormationProject = (props: FormationProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4  hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.image}
        className="w-10 h-10 object-contain rounded-sm"
      />

      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
