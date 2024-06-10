import { AboutSectionItemI } from "./types";
import { AboutSectionEnum } from "./enums";
import {
  ExperienceCardI,
  ExperienceIconObjectI,
  ProjectCardPropsI,
} from "./interfaces";
import css from "/images/888847.png"; //
import startupImage from "/images/startup.png"; //
import picPoetImage from "/images/picpoetcrop.jpg"; //
import portfolioImage from "/images/elisite.png"; //
import stackImage from "/images/stack.png";

export const aboutArrs: AboutSectionItemI[] = [
  {
    title: "Full-Stack Developer",
    description: `
      I am a Full-Stack Developer with 5 years of experience in
      building web applications. I specialize in TypeScript,
      JavaScript, React, and AWS.
      `,
    icon: "/images/full-stack.png",
    section: AboutSectionEnum.Full,
  },
  {
    title: "Mobile Developer",
    description: `
      I am a Mobile Developer with 2 years of experience in
      building cross-platform apps. I specialize in React Native
      and Kotlin.
      `,
    icon: "/images/development.png",
    section: AboutSectionEnum.Mobile,
  },
  {
    title: "Photography",
    description: `
      I am a passionate photographer with a focus on nature,
      urban, and street photography.
      `,
    icon: "/images/camera.png",
    section: AboutSectionEnum.Photography,
  },
];

export const experienceIcons: ExperienceIconObjectI[] = [
  {
    title: "HTML 5",
    icon: "/images/html.png",
  },

  {
    title: "React",
    icon: "/images/structure.png",
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "Kotlin",
    icon: "/images/android.png",
  },
  {
    title: "Mongo DB",
    icon: "/images/mongo.png",
  },
  {
    title: "SQL",
    icon: "/images/sql.png",
  },
  {
    title: "Tailwind Css",
    icon: "/images/tailwind.png",
  },
  {
    title: "Bootstrap",
    icon: "/images/bootstrap.png",
  },
  {
    title: "Salesforce",
    icon: "/images/salesforce.png",
  },
];

export const experienceCards: ExperienceCardI[] = [
  {
    title: "Full-Stack Developer - FreedomCare",
    subtitle: "Oct 2021 - Apr 2024",
    list: [
      "Optimized UI and backend connectivity for the FreedomCare Plus Android app.",
      "Led development of the NextJS-based MySteps portal, growing user base by over 12,000.",
      "Directed CDPAP Connect app development, impacting 100+ caregivers.",
    ],
    image: "/images/freedomcareny_logo.jpg",
  },
  {
    title: "Technical Lead - Commit to Green",
    subtitle: "Jun 2021 - Oct 2021",
    list: [
      "Managed end-to-end development of four eco-friendly apps.",
      "Optimized UI/UX and backend designs for better user satisfaction.",
      "Provided critical updates to the CEO, aligning projects with goals.",
    ],
    image: "/images/commit_to_green_logo.jpg",
  },
  {
    title: "Software Engineer - PlateRate",
    subtitle: "Jun 2019 - Jun 2021",
    list: [
      "Architected CRM improvements for data management.",
      "Migrated app to React JS and NoSQL, reducing latency by 30%.",
      "Improved deployment cycles with Agile and DevOps practices.",
    ],
    image: "/images/platerate_logo.jpg",
  },
];

export const photos: {
  label: string;
  src: string;
}[] = [
  {
    label: "Urban Reflections",
    src: "https://i.imgur.com/6A8Zu0S.jpeg",
  },
  {
    label: "Whispers in the Gallery",
    src: "https://i.imgur.com/CP6I0sa.jpeg",
  },
  {
    label: "Golden Hour in Brooklyn",
    src: "https://i.imgur.com/JwEbgjr.png",
  },
  {
    label: "Urban Reflections",
    src: "https://i.imgur.com/6IuchMK.jpg",
  },
  {
    label: "Spectrum of Joy",
    src: "https://i.imgur.com/6IuchMK.jpg",
  },
  {
    label: "The wanderer",
    src: "https://i.imgur.com/CyNkDTe.jpg",
  },
];

export const projects: ProjectCardPropsI[] = [
  {
    title: "Pic Poet",
    description:
      "Pic Poet, an android app designed to add a touch of art to your day by transforming your pictures into classic American short poems.",
    techStack: ["GPT-4-Turbo", "React Native", "TypeScript"],
    image: picPoetImage,
    demoLink:
      "https://play.google.com/store/apps/details?id=com.cosmicavian.picpoet&pcampaignid=web_share",
    sourceLink:
      "https://play.google.com/store/apps/details?id=com.cosmicavian.picpoet&pcampaignid=web_share",
  },
  {
    title: "Startup",
    description:
      "A platform to help you get started with your next big idea. We use AI to give you some great ideas for programming projects to get you started coding with confidence. All you have to do to get started is enter the technologies you want to use, and a couple of filters for personalization, and Startup will do the rest.",
    techStack: ["React", "Chat-GPT", "Framer Motion", "Tailwind CSS"],
    image: startupImage,
    demoLink: "https://startup-b2b16225a684.herokuapp.com/",
    sourceLink: "https://github.com/Eli-BH/Startup/tree/main",
  },

  {
    title: "Portfolio 1",
    description:
      "My first portfolio, built with React, Tailwind CSS, and Framer Motion.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolioImage,
    demoLink: "https://elijahbrown-henderson.netlify.app/",
    sourceLink: "https://github.com/Eli-BH/Portfolio_2",
  },
  {
    title: "Stack",
    description:
      "A platform to help devs get started with their next app by giving them a list of technologies to use.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: stackImage,
    demoLink: "https://eli-stack.netlify.app/",
    sourceLink: "https://github.com/Eli-BH/Stack",
  },
];
