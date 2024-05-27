import { StaticImageData } from "next/image";

export interface ExperienceIconObjectI {
  title: string;
  icon: string | StaticImageData;
}

export interface ExperienceCardI {
  title: string;
  subtitle: string;
  list: string[];
  image: string;
}
