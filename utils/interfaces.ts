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

export interface ProjectCardPropsI {
  title: string; // Title of the project
  description: string; // Description of the project
  techStack: string[]; // Array of technologies used in the project
  image: StaticImageData; // Image of the project
  demoLink: string; // Link to the project demo
  sourceLink: string; // Link to the project source code
}
