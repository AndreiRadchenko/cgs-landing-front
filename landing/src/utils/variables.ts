import laptopIconIMG from "../../public/laptop.png";
import smartphoneIMG from "../../public/mobile.png";
import serverIMG from "../../public/database.png";
import blockChainIMG from "../../public/blockchain.png";
//partners
import homeLikeIMG from "../../public/homelike.png";
import spaceImpulseIMG from "../../public/spaceimpulse.png";
import ibmIMG from "../../public/ibm.png";
import sunPowerIMG from "../../public/sunpower.png";
import civiqIMG from "../../public/civiq.png";
import growthDayIMG from "../../public/growthDay.png";
import oneWelcomeIMG from "../../public/onewelcome.png";
import pandemicIMG from "../../public/pandemic.png";
import wIMG from "../../public/w-icon.png";
import trendCommanderIMG from "../../public/trenCommander.png";
import atlassianIMG from "../../public/atlassian.png";
import chilliIMG from "../../public/chilli.png";

//about
import astronautIMG from "../../public/cosmonaut.png";
import spaceIMG from "../../public/spaceAbout.png";
import starIMG from "../../public/starAbout.png";

//technologies
import technologyLaptopIMG from "../../public/laptop-tech.png";
import technologySmartPhoneIMG from "../../public/mobileTech.png";
import technologyDatabaseIMG from "../../public/databaseTech.png";
import technologyBlockchainIMG from "../../public/blockChainTech.png";

//ourteam
import bigOurTeamIMG from "../../public/ourTeamBig.jpg";
import smallOurTeamIMG from "../../public/ourTeam.jpg";

import { IFeedbackCardProps } from "../types/Feedback.types";

export const routers = {
  home: "/",
  careers: "/careers",
};

export const navigationRoutesNames = ["/home", "/careers"];

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
      "Python (Django / Flask)",
      "Golang",
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
    description: `We change the World in different areas by delivering the best technical solutions and helping people in turning their dreams into life qualitatively.`,
  },
  {
    url: smallOurTeamIMG,
    title: "our philosophy",
    description:
      "Stunning product is a high-quality code delivered in a timely manner. We take on challenges of any complexity and never give up. Thus our clients always get their needs satisfied.",
  },
];

//projects names
import ResealiseIMG from "../../public/projects_images/realise_me.jpg";
import myITIMG from "../../public/projects_images/my_ti.jpg";
import admyreIMG from "../../public/projects_images/admyre.jpg";
import denizenIMG from "../../public/projects_images/denizen.jpg";
import growthDayImage from "../../public/projects_images/growth_day.png";
import finMixImage from "../../public/projects_images/finmix.png";
import trenCommanderImage from "../../public/projects_images/trend_commander.jpg";
import cosunoImage from "../../public/projects_images/cosuno_ventures.png";
import liveAtMarketImage from "../../public/projects_images/live_art_market.png";
import sunPowerImage from "../../public/projects_images/sun_power.jpg";
import civiqImage from "../../public/projects_images/civiq.jpg";
import iWelcomeImage from "../../public/projects_images/i_welcome.png";
import goDaddyImage from "../../public/projects_images/go_daddy_poynt.png";
import homelikeImage from "../../public/projects_images/homelike.jpg";
import spaceImpulseImage from "../../public/projects_images/space_impulse.jpg";
import prsImage from "../../public/projects_images/prs.png";
import shelfImage from "../../public/projects_images/shelf.png";
import remetikImage from "../../public/projects_images/remetrik_inc.jpg";
import eeselImage from "../../public/projects_images/eesel.jpg";
import switchImage from "../../public/projects_images/switch.png";
import scobySocialImage from "../../public/projects_images/scoby_social.png";
import reviewImage from "../../public/projects_images/review.png";
import soCoolImage from "../../public/projects_images/so_cool.png";
import tokenGearImage from "../../public/projects_images/token_gear.png";

import { IModalProjectCardProps } from "../types/ModalCategory.types";

export const projectsModalArr: IModalProjectCardProps[] = [
  {
    url: ResealiseIMG,
    title: "RealiseME",
    link: "https://apps.apple.com/ua/app/realiseme/id1456372856?l=ru",
    category: ["mobile"],
    description:
      "A platform that connects teachers (private licensed tutors) with students who are going to prepare for an exam or to get help for their homework. The platform is mutually beneficial for students and teachers both.",
  },
  {
    url: myITIMG,
    title: "myTI",
    link: "https://apps.apple.com/us/app/myti/id1329792134",
    category: ["mobile"],
    description:
      "SaaS medical platform that helps doctors and patients to organize documentation inside and outside the clinic. ScanBot is a distinguishing feature of the app - an AI network recognizes keywords in a document via smartphone camera.",
  },
  {
    url: admyreIMG,
    title: "Admyre",
    link: "https://play.google.com/store/apps/details?id=com.awesventures.admyre",
    category: ["mobile"],
    description:
      "This is an EDU platform that establishes communication between students and tutors. It is designed to help people improve their skills in narrow specialties or to learn something completely new whether it is language or any other skill.",
  },
  {
    url: denizenIMG,
    title: "Denizen",
    link: "https://apps.apple.com/ua/app/denizen/id1542599510?l=ru",
    category: ["mobile"],
    description:
      "The app allows you to find great locations and places for hosting events or just working in your neighborhood. It is currently available in Kreuzberg and Mitte. The process of booking is simple and will be convenient for any type of user.",
  },
  {
    url: growthDayImage,
    title: "GrowthDay",
    link: "https://apps.apple.com/be/app/growthday/id1543291315",
    category: ["mobile", "web"],
    description:
      "This platform aimed at motivating and increasing self-perception of people who need it by setting personal goals and achievements. Application allows you to track progress of other users and see your own based on completed tasks.",
  },
  {
    url: finMixImage,
    title: "FinMix",
    link: "https://www.finmix.com/home",
    category: ["blockchain", "server", "web"],
    description:
      "See your gainz and tendies in one platform. Account is free, you just need to get a referral code and start enjoying the world of crypto and stocks on FinMix!",
  },
  {
    url: trenCommanderImage,
    title: "TrendCommander",
    link: "https://trendcommander.com/",
    category: ["server", "web"],
    description:
      "This is an e-commerce platform for tracking stock charts of various companies. It is a dashboard that helps you to track all transactions in real time. So you can see all the live updates.",
  },
  {
    url: cosunoImage,
    title: "Cosuno Ventures GmbH",
    link: "https://www.cosuno.de/en/",
    category: ["blockchain", "web"],
    description:
      "This is a solution for procurement and subcontractor management in the construction industry of Germany. Expand a number of subcontractors from your contacts or find an ideal one in the base of 80000+ candidates. Then – one click and you’ve sent your tender.",
  },
  {
    url: liveAtMarketImage,
    title: "LiveArt Market inc.",
    link: "https://liveart.market/",
    category: ["blockchain", "web"],
    description:
      "Buy, sell, and discover art privately. Here, at Live Art Market inc. you can find the missing piece of your masterpiece collection, buy it and don’t worry about payment, logistics and any contracts. All could be handled without leaving the platform.",
  },
  {
    url: sunPowerImage,
    title: "SunPower",
    link: "https://us.sunpower.com/",
    category: ["server", "web"],
    description:
      "This is the platform for selling/exchanging/managing solar systems in the US. The distinguishing feature of this project is 3D rendering of each panel and its location through Python AI. Here you can leave feedback, participate in discussions etc.",
  },
  {
    url: civiqImage,
    title: "CIVIQ",
    link: "https://www.civiq.com/",
    category: ["server", "web"],
    description:
      "SaaS application which is aimed at simplifying the urban environment for people who work or study there. This application is used on specialized stations (large screens) throughout the city to buy a ticket for a bus, for example.",
  },
  {
    url: iWelcomeImage,
    title: "iWelcome",
    link: "https://www.iwelcome.com/",
    category: ["server", "web"],
    description:
      "iWelcome is Europe's leader in Consumer and B2C IAM solutions, designed with the complexity and security concerns of large organisations in mind. Our European roots guarantee a fully GDPR-compliant platform built with top-class private cloud technology.",
  },
  {
    url: goDaddyImage,
    title: "GoDaddy / Poynt",
    link: "https://uk.godaddy.com",
    category: ["server", "web"],
    description:
      "Who does not know this amazing marketplace? GoDaddy is a platform that helps you to review, select and buy the best online address and hosting for the lowest price! The main idea is to simplify the process of buying and setting up a hosting name.",
  },
  {
    url: homelikeImage,
    title: "HomeLike",
    link: "https://app.thehomelike.com",
    category: ["web"],
    description:
      "Platform for booking apartments in Europe.This project has a complex architecture and was implemented with usage of technologies as Google MAP API / Google maps, PDF parsers, template engines, AI (Artificial Intelligence) and many more.",
  },
  {
    url: spaceImpulseImage,
    title: "SpaceImpulse",
    link: "https://app.spaceimpulse.com",
    category: ["web"],
    description:
      "This is a social platform for people who work in the space industry, whether they are students, owners of enterprises, manufacturers for space rockets, satellites, drones, etc, scientists or Elon Musk. Main ideas – communication and trading.",
  },
  {
    url: prsImage,
    title: "PRS",
    link: "https://www.pandemicreliefsupply.com/",
    category: ["web"],
    description:
      "PRS is a project for COVID-19 vaccination procedure tracking in the USA. 12+ million people were protected with the help of this site. It has a shop, where you can buy all what is needed for COVID-19 protection: from gloves to air filtration systems.",
  },
  {
    url: shelfImage,
    title: "The Shelf",
    link: "https://theshelf.com/",
    category: ["web"],
    description:
      "It is a site, where you can find useful info about the creative agency – projects in portfolio, blog posts. If you need support – you’re welcome in a pop-up window. Or maybe, you need to schedule a call for building a profitable strategy? No problem, fill in the form and it’s done!",
  },
  {
    url: remetikImage,
    title: "Remetrik inc.",
    link: "https://remetrik.com/",
    category: ["web"],
    description:
      "Remetrik is a perfect solution for record labels, music distributors, and music publishers. It is a cloud-based platform that makes the entire analytic and accounting process more transparent and automated for master and publishing royalties both.",
  },
  {
    url: eeselImage,
    title: "Eesel Chrome Extension",
    link: "https://www.eesel.app/",
    category: ["web"],
    description:
      "Tool that can help to put all your work together in one place. Google docs, Figma designs, social media profiles and others will be saved in your “virtual organizer”, so you never lose something important. Eesel is free and doesn’t compromise on privacy – all your info will be protected.",
  },
  {
    url: switchImage,
    title: "Switch",
    link: "https://www.producthunt.com/posts/switch-1-0",
    category: ["web"],
    description:
      "This is a Browser Extension that adds a Sidebar to your browser and gives you the tools to switch between your apps, accounts, and workflows in one place. Switch instantly helps you to become more productive.",
  },
  {
    url: scobySocialImage,
    title: "ScobySocial",
    link: "https://www.scoby.social",
    category: ["web"],
    description:
      "With this app for real-time shared experiences you can put the Creator Economy to work for you. If you are passionate about your calling, love engaging with others, and are ready to rise to your destiny, you belong with the ScobySocial community.",
  },
  {
    url: reviewImage,
    title: "REview",
    link: "https://review-app.io/",
    category: ["web"],
    description:
      "When you’re an IT recruiter, you need to be attentive during the whole hiring process. This platform is going to be a helping hand for each recruiter and a comfy place where great professionals can get a pleasant REview for their work.",
  },
  {
    url: soCoolImage,
    title: "SO-COOL",
    link: "https://review-app.io/",
    category: ["blockchain"],
    description:
      "This Blockchain DeFi system uses Smart contracts to build a bridge between your web2 social channels and new web3. The core feature: non-crypto users availability. You just need Social / Premium Collectables to get access to the platform channels.",
  },
  {
    url: tokenGearImage,
    title: "Tokengear",
    link: "https://review-app.io/",
    category: ["blockchain"],
    description:
      "This marketplace is the Blockchain DeFi system where gamers interact with developers without giving away equity or IP. Usage of Smart contracts and Web3AUTH combined with some cluster work helped us to make it really unique, just see for yourselves!",
  },
];

//Careers reqirements
import helmetPhoto from "../../public/helmet.png";
export const careersCardArr = [
  {
    img: "Photo",
    header:
      "We know that finding your first job can be quite nerve-wracking and challenging, especially for young engineers, and therefore we will try our best to make this experience with us as smooth and enjoyable as possible.",
    title: "What would we like to see from a candidate?",
    arrayOfRequirements: [
      "The presence of inhuman enthusiasm and dedication :)",
      "Strong knowledge of JS / React",
      "Having your own pet-projects on JS / React",
      "Intermediate level of English",
      "Knowledge / understanding of NodeJS, React Native will be a huge plus, but not a requirement",
    ],
    text: "If you are a back-end developer and want to write a server - that's cool too and we'll be glad to see you in our team!",
  },
  {
    img: helmetPhoto,
    title: "What do we offer?",
    arrayOfRequirements: [
      "Competitive and high salary based on interview results",
      "100% paid webinars / seminars / courses / English",
      "Personal mentoring for 1 month by Tech. lead and senior developer, who will allow you to significantly upgrade your skills",
      "Provision of equipment necessary for work (Mac-Mini / MacBook)",
      "Paid vacation, sick days off, public holidays",
      "Work-life balance schedule. We focus solely on the result, not on time, and we believe that time trackers are the most nightmarish phenomenon on the planet :)",
      "0% bureaucracy (no need to go through 7 circles of hell to get equipment, sick leave, etc.)",
    ],
    text: "We sincerely believe that you are the one we are looking for! Submit your CV and we will definitely consider it!",
    footer: "With love, ",
    subFooter: "CGS-team",
  },
];
