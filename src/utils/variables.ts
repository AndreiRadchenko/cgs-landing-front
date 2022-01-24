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



export const routers = {
  home: "/",
  vacancy: "/vacancy",
  partners: "/partners",
};

export const navigationRoutesNames = ["/home", "/vacancy", "/partners"];

export const partnersArr = [ homeLikeIMG, spaceImpulseIMG, ibmIMG, sunPowerIMG, civiqIMG, growthDayIMG, oneWelcomeIMG, pandemicIMG, wIMG, trendCommanderIMG, atlassianIMG, chilliIMG, ];


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
