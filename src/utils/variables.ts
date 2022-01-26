import laptopIconIMG from "../../public/laptop-icon.svg";
import smartphoneIMG from "../../public/phone-icon.svg";
import serverIMG from "../../public/database-icon.svg";
import blockChainIMG from "../../public/blockchain-icon.svg";
//partners
import homeLikeIMG from "../../public/homeLike-icon.svg";
import spaceImpulseIMG from "../../public/spaceImpulse-icon.svg";
import ibmIMG from "../../public/IBM-icon.svg";
import sunPowerIMG from "../../public/sunPower-icon.svg";
import civiqIMG from "../../public/civiq-icon.svg";
import growthDayIMG from "../../public/growthday-icon.svg";
import oneWelcomeIMG from "../../public/oneWelcome-icon.svg";
import pandemicIMG from "../../public/pandemicRelief-icon.svg";
import wIMG from "../../public/w-icon.svg";
import trendCommanderIMG from "../../public/trendCommnader-icon.svg";
import atlassianIMG from "../../public/atlassian-icon.svg";
import chilliIMG from "../../public/chilli-icon.svg";

//about
import astronautIMG from "../../public/astronaut-about-icon.svg";
import spaceIMG from "../../public/space-about-icon.svg";
import starIMG from "../../public/star-about-icon.svg";

//technologies
import technologyLaptopIMG from "../../public/technology-laptop-icon.svg";
import technologySmartPhoneIMG from "../../public/technology-smartphone-icon.svg";
import technologyDatabaseIMG from "../../public/technology-database-icon.svg";
import technologyBlockchainIMG from "../../public/technology-blockchain-icon.svg";

//ourteam
import bigOurTeamIMG from "../../public/bigOurTeam.svg";
import smallOurTeamIMG from "../../public/ourTeam.png";

//projects names
import REviewIMG from "../../public/review.svg";
import socialMediaIMG from "../../public/socialMedia.svg";
import growthdayIMG from "../../public/growthday.svg";
import chilliProjectIMG from "../../public/chilli.svg";
import { IFeedbackCardProps } from "../types/Feedback.types";

export const routers = {
  home: "/",
  careers: "/careers",
  partners: "/partners",
};

export const navigationRoutesNames = ["/home", "/careers", "/partners"];

export const modalNavigationRoutesNames = [
  "web",
  "mobile",
  "server",
  "blockchain",
];

export const partnersArr = [
  homeLikeIMG,
  spaceImpulseIMG,
  ibmIMG,
  sunPowerIMG,
  civiqIMG,
  growthDayIMG,
  oneWelcomeIMG,
  pandemicIMG,
  wIMG,
  trendCommanderIMG,
  atlassianIMG,
  chilliIMG,
];

export const aboutUsContainerVars = [
  {
    url: starIMG,
    description: "var",
    text: "top-rated devs",
  },
  {
    url: astronautIMG,
    description: "quantity",
    text: "40+",
  },
  {
    url: spaceIMG,
    description: "status",
    text: "available for hire",
  },
];

export const categoryThemesVars = [
  {
    title: "web",
    description:
      "More than  30 successfully- executed projects in the last 4 years.",
    url: laptopIconIMG,
  },
  {
    title: "mobile",
    description:
      "We are ready to take care of all: from planning to maintenance processes!",
    url: smartphoneIMG,
  },
  {
    title: "",
    description: "",
    url: "",
  },
  {
    title: "server",
    description:
      "Making you sure that your users data is used in a reliable manner.",
    url: serverIMG,
  },
  {
    title: "",
    description: "",
    url: "",
  },
  {
    title: "blockchain",
    description:
      "Yep, we are tweaking with all the freshest development trends.",
    url: blockChainIMG,
  },
];

export const feedbackArr: IFeedbackCardProps[] = [
  {
    name: "Pratibha Sharma",
    company: "LiveOfficially",
    position: "Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Very sincere, professional and cooperative team. Analyses the business requirements and provides on time feedback and support to improve features. They have done a good job so far and looking forward to rehiring them again. ",
  },
  {
    name: "Rabi Boundi",
    company: "Space Impulse",
    position: "Co-Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Excellent work! Good communication in English, all requirements were correctly implemented, on time, and according to the specification.Will hire again in the future. Highly recommended!",
  },
  {
    name: "Josh M",
    company: "INHouse",
    position: "CEO",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 4.6,
    description:
      "They delivered good work on this development project. Communication was good, deadlines met, and skills were strong. At one point I asked for an additional milestone and he was very forthcoming that the additional work was outside his area of expertise. We found another freelancer to work with on that technicality. An additional milestone was asked and overtime performed to meet deadlines. Communication via Slack. Very professional. Able to take direction and build quickly in this very complicated project.",
  },
  {
    name: "Steven Popovich",
    company: "CIVIQ",
    position: "Co-Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Amazing Job! The entire team at Code Generation was great with communication, timely with all tasks and an overall pleasure to work with. I highly recommend to anyone seeking help with development to contract Code Generation ",
  },
  {
    name: "Steven George",
    company: "Joytec Labs LLC",
    position: "CTO",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Top Upwork team that I will definitely hire again. They were very professional in their work and approach, and I enjoyed working with them on my project.",
  },
  {
    name: "Cameron Ellis",
    company: "Awes Ventures",
    position: "Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "CGS-team is a professional organization and has helped us achieve our launch milestones well within our margin of error! We will continue our work with them.",
  },
  {
    name: "Blake Ogden",
    company: "Wynstn Travel Company, LLC",
    position: "Product Owner",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Great communication, easily able to understand scope of work and consistently in contact to ensure all objectives were met. Will be a return customer and fully recommend.",
  },
  {
    name: "Miriam Vergani",
    company: "KCS Biotech",
    position: "Co-Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 4.8,
    description:
      "They were really competent and delivered what we requested. Recommended a lot! Will definitely work with them in the future.",
  },
  {
    name: "Nick Spasoff",
    company: "GrowthDay",
    position: "Product Manager",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Danyyl from CGS-team possesses exceptional React skills. He works very efficiently and as part of a large scrum team. His code quality and understanding of the technology are exceptional. It was easy to communicate with him and he always managed to deliver on time. We look forward to working with CGS-team again on our next project.",
  },
  {
    name: "Nick Morgan",
    company: "Pandemic Relief Supply",
    position: "Head of Software Development",
    link: "https://clutch.co/profile/code-generation#reviews",
    rates: 5,
    description:
      "After the features are introduced, the internal team can now manage several operations in a centralized system. Code Generation has allowed the client to focus on a task-based management style to regularly monitors the project’s progress. Moreover, they’ve been impressively meeting the deadlines.",
  },
  {
    name: "Kristof Van Miegem",
    company: "Codifly",
    position: "Co-Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 4.8,
    description:
      "CGS has been trustworthy at every step. The developer has a thorough technical skillset and an up-to-date knowledge on the latest JavaScript trends. He exceeded our expectations by actively being engaged in conversations, discussing and finding solutions to issues. In short: a solid, knowledgable and highly motivated developer.",
  },
  {
    name: "Courtney Robinson",
    company: "RMGXYZ",
    position: "CEO",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "The team provided excellent service in delivering the project. They are intuitive in development and expert in execution. With deep technical knowledge and user-friendly communication, I would definitely recommend. We will be working with them again soon.",
  },
  {
    name: "Bertie I.",
    company: "Reverse Media Group",
    position: "Product Manager",
    link: "https://clutch.co/profile/code-generation#reviews",
    rates: 5,
    description:
      "CGS-team successfully implemented the solution in just two weeks. During the engagement, their project management and communication were excellent. They were responsive, fast, and cost-effective.",
  },
  {
    name: "Harry Newton",
    company: "Chilli",
    position: "Co-Founder",
    link: "https://www.upwork.com/o/companies/~01a24f185f6fd7afd0/",
    rates: 5,
    description:
      "Code Generation is a very professional agency with clear communication channels and strict guidelines. You can count on them for completing your requirements up to standard and as trusted partners.",
  },
  {
    name: "Doris Torchia",
    company: "Social Startup",
    position: "Co-Founder",
    link: "https://clutch.co/profile/code-generation#reviews",
    rates: 5,
    description:
      "After just three months of engagement, the team is able to come close to the client's expected results and meet their requirements. The team's workflow has been very efficient, fixing bugs and issues with agility, and improving its structure as the project develops further.",
  },
];

export const technologiesArr = [
  {
    url: technologyLaptopIMG,
    title: "web",
    technologies: ["React", "Angular", "Vue"],
  },
  {
    url: technologySmartPhoneIMG,
    title: "mobile",
    technologies: ["React Native", "Dart/Flutter"],
  },
  {
    url: technologyDatabaseIMG,
    title: "server",
    technologies: [
      "Node",
      "Express",
      "Sequelize",
      "AWS",
      "MongoDB",
      "MySQL",
      "Docker",
    ],
  },
  {
    url: technologyBlockchainIMG,
    title: "blockchain",
    technologies: ["NFT", "Smart contracts", "Blockchain", "Solidity", "Web3"],
  },
];

export const ourTeamArr = [
  {
    url: bigOurTeamIMG,
    title: "our main goal",
    description:
      "We change the World in different areas by delivering the best technical solutions and helping people in turning their dreams into life qualitatively.",
  },
  {
    url: smallOurTeamIMG,
    title: "our philosophy",
    description:
      "Stunning product is a high-quality code delivered in a timely manner. We take on challenges of any complexity and never give up. Thus our clients always get their needs satisfied.",
  },
];

export const projectsModalArr = [
  {
    url: socialMediaIMG,
    title: "ScobySocial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus velit, euismod a lacus fringilla, efficitur convallis mauris. Nam laoreet purus vitae massa interdum, a malesuada lacus luctus. ",
  },
  {
    url: REviewIMG,
    title: "REview",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus velit, euismod a lacus fringilla, efficitur convallis mauris. Nam laoreet purus vitae massa interdum, a malesuada lacus luctus.",
  },
  {
    url: growthdayIMG,
    title: "Growthday",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus velit, euismod a lacus fringilla, efficitur convallis mauris. Nam laoreet purus vitae massa interdum, a malesuada lacus luctus.",
  },
  {
    url: chilliProjectIMG,
    title: "chilli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus velit, euismod a lacus fringilla, efficitur convallis mauris. Nam laoreet purus vitae massa interdum, a malesuada lacus luctus.",
  },
];
