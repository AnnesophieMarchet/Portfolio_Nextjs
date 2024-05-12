import portrait from "../../public/photo_CV.png";
import Image from "next/image";

export default function ImagePortrait() {
  return (
    <Image
      src={portrait}
      alt="Picture of the author"
      className={`w-full h-auto max-w-xs rounded-sm max-md:w-56 `}
    />
  );
}
