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

//projects names
import companyName1 from "../../public/projects_images/realise_me.jpg";
import companyName2 from "../../public/projects_images/my_ti.jpg";
import companyName3 from "../../public/projects_images/admyre.jpg";
import companyName4 from "../../public/projects_images/denizen.jpg";
import companyName5 from "../../public/projects_images/growth_day.jpg";
import companyName6 from "../../public/projects_images/finmix.png";
import companyName7 from "../../public/projects_images/trend_commander.jpg";
import companyName8 from "../../public/projects_images/cosuno_ventures.png";
import companyName9 from "../../public/projects_images/live_art_market.png";
import companyName10 from "../../public/projects_images/sun_power.jpg";
import companyName11 from "../../public/projects_images/civiq.jpg";
import companyName12 from "../../public/projects_images/i_welcome.png";
import companyName13 from "../../public/projects_images/go_daddy_poynt.png";
import companyName14 from "../../public/projects_images/homelike.jpg";
import companyName15 from "../../public/projects_images/space_impulse.jpg";
import companyName16 from "../../public/projects_images/prs.png";
import companyName17 from "../../public/projects_images/shelf.png";
import companyName18 from "../../public/projects_images/remetrik_inc.jpg";
import companyName19 from "../../public/projects_images/eesel.jpg";
import companyName20 from "../../public/projects_images/switch.jpg";
import companyName21 from "../../public/projects_images/scoby_social.png";
import companyName22 from "../../public/projects_images/review.png";

import { IModalProjectCardProps } from "../types/ModalCategory.types";

export const projectsModalArr: IModalProjectCardProps[] = [
  {
    url: companyName1,
    title: "RealiseME",
    link: "https://apps.apple.com/ua/app/realiseme/id1456372856?l=ru",
    category: ["mobile"],
    description:
      "This is a platform that connects teachers (private licensed tutors) and students, who will to prepare for an exam or get help for their homework. The platform is mutually beneficial for students and teachers.",
  },
  {
    url: companyName2,
    title: "myTI",
    link: "https://apps.apple.com/us/app/myti/id1329792134",
    category: ["mobile"],
    description:
      "This is a SaaS medical platform that helps doctors and patients to organize documentation inside and outside the clinic. In fact, this application was made for one specific clinic, but it can accessed anywhere by subscription. ScanBot is a distinguishing feature of the app - an AI network recognizes keywords in a document via smartphone camera.",
  },
  {
    url: companyName3,
    title: "Admyre",
    link: "https://play.google.com/store/apps/details?id=com.awesventures.admyre",
    category: ["mobile"],
    description:
      "This is an EDU platform that establishes communication between students and tutors. It is designed to help people improve their skills in narrow specialties or to learn something completely new, be it language or any other skill.",
  },
  {
    url: companyName4,
    title: "Denizen",
    link: "https://apps.apple.com/ua/app/denizen/id1542599510?l=ru",
    category: ["mobile"],
    description:
      "Denizen is available in both AppStore and Google Play Store. The app allows to find great locations and places for hosting events or just working in your neighborhood. It is currently available in Kreuzberg and Mitte. The process of booking is simple and will be convenient for any type of user.",
  },
  {
    url: companyName5,
    title: "GrowthDay",
    link: "https://apps.apple.com/be/app/growthday/id1543291315",
    category: ["mobile", "web"],
    description:
      "This is a platform aimed at motivating and increasing self-perception of people who need it by setting personal goals and achievements. The application allows you to track progress of other users and see their own based on the completed tasks.",
  },
  {
    url: companyName6,
    title: "FinMix",
    link: "https://www.finmix.com/home",
    category: ["blockchain", "server", "web"],
    description:
      "See your gainz and tendies in one platform. Account is free, you just need to get a referral code and start enjoying the world of crypto and stocks on FinMix!",
  },
  {
    url: companyName7,
    title: "TrendCommander",
    link: "https://trendcommander.com/",
    category: ["server", "web"],
    description:
      "This is a platform for tracking stock charts. This is an AI-powered, realtime dashboard to see which companies and products are gaining and losing in popularity with customers. It helps users to discover trending companies and products without having to do lots of research.",
  },
  {
    url: companyName8,
    title: "Cosuno Ventures GmbH",
    link: "https://www.cosuno.de/en/",
    category: ["blockchain", "web"],
    description:
      "This is a user-friendly solution for procurement and subcontractor management in the construction industry of Germany. Expand a number of subcontractors from your contacts or find an ideal one in the base of 80000+ candidates. Then – one click and you’ve sent your tender. Simplified procedure saves your time, all thanks to Cosuno.",
  },
  {
    url: companyName9,
    title: "LiveArt Market inc.",
    link: "https://liveart.market/",
    category: ["blockchain", "web"],
    description:
      "Buy, sell, and discover art privately. Here, at Live Art Market inc. you can find the missing piece of your masterpiece collection, buy it and don’t worry about payment, logistics and any contracts. All could be handled without leaving the platform.",
  },
  {
    url: companyName10,
    title: "SunPower",
    link: "https://us.sunpower.com/",
    category: ["server", "web"],
    description:
      "This is the platform for selling/exchanging/managing solar systems in the United States. The distinguishing feature of this project is 3D rendering of each panel and its location through Python AI. This is an e-commerce platform – a marketplace for solar system owners, where you can leave feedback, view particular systems, participate in discussions, and so on.",
  },
  {
    url: companyName11,
    title: "CIVIQ",
    link: "https://www.civiq.com/",
    category: ["server", "web"],
    description:
      "This is a common SaaS (Software as a Service) application, which is aimed at simplifying urban environment for people, who work or study there. This application is not for desktops, nor for smartphones – it is used on specialized stations (large screens) throughout the city. These stations allow you to buy bus, train or other transport tickets, pay utility bills, book some services and much more.",
  },
  {
    url: companyName12,
    title: "iWelcome",
    link: "https://www.iwelcome.com/",
    category: ["server", "web"],
    description:
      "iWelcome is Europe's leader in Consumer and B2C IAM solutions, designed with the complexity and security concerns of large organisations in mind. Our European roots guarantee a fully GDPR-compliant platform built with top-class private cloud technology. Millions of consumers and hundreds of thousands of employees - across industries like Financial Services, Energy & Mobility, Media & Publishing, Retail and other industries – rely on iWelcome on a daily basis.",
  },
  {
    url: companyName13,
    title: "GoDaddy / Poynt",
    link: "https://uk.godaddy.com",
    category: ["server", "web"],
    description:
      "Who does not know this amazing marketplace? GoDaddy is a platform that helps you to review, select and buy the best online address and hosting for the lowest price! The main idea is to simplify the process of buying and setting up a hosting name.",
  },
  {
    url: companyName14,
    title: "HomeLike",
    link: "app.thehomelike.com",
    category: ["web"],
    description:
      "This is a platform for booking apartments in Europe. A distinctive feature of this app is that rental period starts from 3-4 months only. The platform provides renting services for people who travel across Europe for an extended period of time. This project has a complex architecture and was implemented with usage of technologies as Google MAP API / Google maps, PDF parsers, template engines, AI (Artificial Intelligence) and many more.",
  },
  {
    url: companyName15,
    title: "SpaceImpulse",
    link: "app.spaceimpulse.com",
    category: ["web"],
    description:
      "This is a social platform for people, who work in the space industry, whether they are students, owners of enterprises, manufacturers for space rockets, satellites, drones, etc, analysts, scientists or Elon Musk. The main idea to create a place for communication (via chat) and trading (resale of related parts) in the space industry.",
  },
  {
    url: companyName16,
    title: "PRS",
    link: "pandemicreliefsupply.com/",
    category: ["web"],
    description:
      "PRS is a project for COVID-19 vaccination procedure tracking in the USA. More than 12 million people were protected with the help of this site. It has a shop, where you can buy all what is needed for COVID-19 protection: from gloves and masks to air filtration systems.",
  },
  {
    url: companyName17,
    title: "The Shelf",
    link: "theshelf.com/",
    category: ["web"],
    description:
      "Website of marketing agency. It is a comfy environment, where you can find useful info about this creative agency – their projects in portfolio, blog posts. We’ve tried to make it not only comfortable for users, but attractive too, with animations and graphics. Website should be the place with a maximum of info and if you need support on any question – you’re welcome in a pop-up window. Or maybe, you need to schedule a call for building a profitable strategy? No problem, fill in the form and it’s done!",
  },
  {
    url: companyName18,
    title: "Remetrik inc.",
    link: "remetrik.com/",
    category: ["web"],
    description:
      "Remetrik is a perfect solution for record labels, music distributors, and music publishers. It is a cloud-based platform that makes the entire analytic and accounting process more transparent and automated for master and publishing royalties both.",
  },
  {
    url: companyName19,
    title: "Eesel Chrome Extension",
    link: "https://www.eesel.app/",
    category: ["web"],
    description:
      "Eesel is a tool, that can help to put all your work together in one place. Google docs, Figma designs, social media profiles and other will be saved in your “virtual organizer”, so you never lose something important. Eesel is free and doesn’t compromise on privacy – all your information will be protected.",
  },
  {
    url: companyName20,
    title: "Switch",
    link: "https://www.producthunt.com/posts/switch-1-0",
    category: ["web"],
    description:
      "Switch adds a Sidebar to your browser and gives you the tools to switch between your apps, accounts, and workflows in one place. Switch instantly helps you to become more productive.",
  },
  {
    url: companyName21,
    title: "ScobySocial",
    link: "https://www.scoby.social",
    category: ["web"],
    description:
      "The world is going live. With Scoby Social, our app for real-time shared experiences, you can put the Creator Economy to work for you. Shared experiences have the power to transform, enlighten, surprise and delight. If you are passionate about your calling, love engaging with others, and are ready to rise to your destiny, you belong with us.g",
  },
  {
    url: companyName22,
    title: "REView",
    link: "https://review-app.io/",
    category: ["web"],
    description:
      "When you’re an IT recruiter, you need to be attentive during the whole hiring process. This platform is going to be a helping hand for each recruiter and a comfy place where great professionals can get a pleasant REview for their work.",
  },
];
