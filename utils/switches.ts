import { AboutSectionEnum } from "./enums";

//switch for descriptions
export const returnAboutPassage = (selected: AboutSectionEnum) => {
  switch (selected) {
    case AboutSectionEnum.Photography:
      return `
      Beyond programming, I'm passionate about street photography, 
      capturing the vibrant energy of urban life through 
      candid and spontaneous moments. 
      This creative outlet adds a fresh perspective to my work, 
      influencing my approach to design and user experience.
        `;

    case AboutSectionEnum.Full:
      return `
            As a full-stack developer, I have honed my skills in TypeScript, 
            JavaScript, SQL, NoSQL, and frameworks like React and Next.js. 
            At FreedomCare, I led the development of the NextJS-based 
            MySteps onboarding portal, growing our user base by over 
            12,000 with optimized UI/UX and backend solutions. 
            I also directed the development of the CDPAP Connect app, 
            streamlining caregiver-patient connections with 
            advanced database integrations.
            `;

    case AboutSectionEnum.Mobile:
      return `
        I have growing skills in mobile development, having engineered
        the FreedomCare Plus Android app and played a 
        pivotal role in converting our flagship Android app to 
        React Native, unifying the cross-platform experience. 
        At Commit to Green, I managed the end-to-end development 
        of four eco-friendly mobile apps while optimizing UI/UX 
        designs for improved user satisfaction.
        `;

    default:
      return `
        As a full-stack developer, I have honed my skills in TypeScript, 
        JavaScript, SQL, NoSQL, and frameworks like React and Next.js. 
        At FreedomCare, I led the development of the NextJS-based 
        MySteps onboarding portal, growing our user base by over 
        12,000 with optimized UI/UX and backend solutions. 
        I also directed the development of the CDPAP Connect app, 
        streamlining caregiver-patient connections with 
        advanced database integrations.
        `;
  }
};
