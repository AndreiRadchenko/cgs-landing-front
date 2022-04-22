import blockchain from "../public/blockchain.png";
import database from "../public/database.png";
import laptop from "../public/laptop.png";
import mobile from "../public/mobile.png";
import { logos } from "./logos";
import mainPhoto from "../public/mainLogo.png";
import star from "../public/starAbout.png";
import cosmonaut from "../public/cosmonaut.png";
import space from "../public/spaceAbout.png";
import bottle from "../public/illustration-technology.png";
import blockChainTech from "../public/blockChainTech.png";
import databaseTech from "../public/databaseTech.png";
import laptopTech from "../public/laptop-tech.png";
import mobileTech from "../public/mobileTech.png";
import ourTeamBig from "../public/ourTeamBig.png";
import ourTeam from "../public/ourTeam.png";
import how_we_work1_box from "../public/how_we_work1_box.png";
import how_we_work2_bg from "../public/how_we_work2_bg.png";
import how_we_work3_bg from "../public/how_we_work3_bg.png";
import how_we_work4_bg from "../public/how_we_work4_bg.png";
import github from "../public/github.svg";
import linked from "../public/linked.svg";
import upwork from "../public/upwork.svg";
import ci from "../public/ci.svg";

export const dataResponseImitation = {
  EditInformationBlock: {
    title: "EUREKA!",
    text: "The team of sharp-witted devs is on the brink of you.",
    text2:
      "//ready to cope with tasks of any complexity meeting the tightest deadlines",
    button: "get estimation",
    image: mainPhoto,
  },
  SubtitleBlock: {
    title: "3 theses about us",
    elements: [
      {
        text: "var: top-rated dev",
        image: star,
      },
      {
        text: "vquantity : 40+",
        image: cosmonaut,
      },
      {
        text: "status: available for hire",
        image: space,
      },
    ],
    firstText2: "<h2>",
    text3:
      "Bug-free code, juicy architecture, codebase optimisation, up-to-date maintenance, outstanding clear communication and fluent English rolled into one. Imagined that? You don't even need to imagine this with CGS-team, just see for real!",
    secondText2: "</h2>",
    image: bottle,
  },
  LogosBlock: logos,
  CardsBlock: {
    text4:
      "We provide end-to-end development using the MERN stack, which means our team adores Javascript. Furthermore, innovative ideas and new challenges are our passion.",
    button: "see all work",
    cards: [
      {
        subtitle: "web",
        text:
          "More than  30 successfully- executed projects in the last 4 years.",
        image: laptop,
      },
      {
        subtitle: "mobile",
        text:
          "We are ready to take care of all:from planning to maintenance processes!",
        image: mobile,
      },
      {
        subtitle: "server",
        text:
          "Making you sure that your users data is used in a reliable manner.",
        image: database,
      },
      {
        subtitle: "blockchain",
        text: "Yep, we are tweaking with all the freshest development trends.",
        image: blockchain,
      },
    ],
  },
  FeedbackBlock: {
    subtitle: "feedback",
    text3:
      "We are proud of what our clients say about us. These words sound even louder than any others!",
    feedbacks: [
      {
        stars: 5,
        name: "Pratibha Sharma",
        companyName: "Company name",
        role: "CEO",
        text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”`,
      },
    ],
  },
  TechnologyBlock: {
    subtitle: "technologies",
    techs: [
      {
        subtitle1: "web",
        text: "React\nAngular\nVue",
        image: laptopTech,
      },
      {
        subtitle1: "mobile",
        text: "React Native\nDart/Flutter",
        image: mobileTech,
      },
      {
        subtitle1: "server",
        text: "Node\nExpress\nSequelize\nAWS\nMongoDB\nMySQL\nDocker",
        image: databaseTech,
      },
      {
        subtitle1: "blockchain",
        text: "NFT\nSmart contracts\nBlockchain\nSolidity\nWeb3",
        image: blockChainTech,
      },
    ],
  },
  CorporateBlock: {
    blocks: [
      {
        subtitle: "our main goal:",
        text:
          "We change the World in different areas by delivering the\nbest technical solutions and helping people in turning their\ndreams into life qualitatively.",
      },
      {
        subtitle: "our philosophy:",
        text:
          "Stunning product is a high-quality code delivered\nin a timely manner.\nWe take on challenges of any complexity and never give up.\nThus our clients always get their needs satisfied.",
      },
    ],
    images: [ourTeamBig, ourTeam],
  },
  HowWeWorkBlock: {
    pageSignature: "//how we work",
    blocks: [
      {
        subtitle: "Let`s meet each other!",
        text:
          "First call is really important, because here we\ndiscuss your ideas in detail: from all non-tech nuances\nsuch as terms, freshest thoughts about project overall,\nfunctionality etc. to recommendations about stack we should use\nto meet all your expectations with an outstanding code quality.",
        image: how_we_work1_box,
      },
      {
        subtitle: "Accurate estimation",
        text:
          "Transparency is always a key to a strong\nrelationship, even if we develop a project :)\n\nSo we write down all the needed processes with a quantity\nof hrs for each, describing the number of devs needed for\neffective work and some delicious buns from our company which\nyou will definitely love! ;)",
        image: how_we_work2_bg,
      },
      {
        subtitle: "Build\nthe strongest\nteam you have\never dreamed of!",
        text:
          "First call is really important, because here we\ndiscuss your ideas in detail: from all non-tech nuances such as\nterms, freshest thoughts about project overall, functionality etc.\nto recommendations about stack we should use to meet allyour\nexpectations with an outstanding code quality.",
        image: how_we_work3_bg,
      },
      {
        subtitle: "To be continued..!",
        text:
          "In fact, it is the final call before getting started. \nWe clarify all the nuances about our cooperation, sign all \nthe needed docs, provide you with access to flows, documents\nand resources so you do not need to worry. Just chill and\nenjoy the process of development, \nhandled by CGS-team.",
        image: how_we_work4_bg,
      },
    ],
  },
  BuildRocketBlock: {
    subtitle:
      "And remember: that's the only beginning of one pleasant trip to the stratosphere :)",
    text: "Do you want to build a rocket with CGS-team?",
    button: "yes! begin!",
  },
  ContactFormBlock: {
    subtitle: "Let`s code!",
    inputs: ["Name", "E-mail", "Your message"],
  },
  FooterBlock: {
    Email: "sales.codegeneration@gmail.com",
    links: [
      { value: "https://www.linkedin.com/company/cgs-team/mycompany/" },
      { value: "https://www.linkedin.com/company/cgs-team/mycompany/" },
      { value: "https://www.linkedin.com/company/cgs-team/mycompany/" },
      { value: "https://www.linkedin.com/company/cgs-team/mycompany/" },
    ],
    images: [github, upwork, ci, linked],
  },
};
