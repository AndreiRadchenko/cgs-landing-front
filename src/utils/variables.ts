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

export const routers = {
  home: "/",
  vacancy: "/vacancy",
  partners: "/partners",
};

export const navigationRoutesNames = ["/home", "/vacancy", "/partners"];

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