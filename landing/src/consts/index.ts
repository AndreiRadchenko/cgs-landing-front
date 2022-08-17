import LinkedIn from "../../public/linkedIn.svg";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";

import questionImage from "../../public/FAQDecorations/questionImage.svg";

export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong!",
}

export enum storeKeys {
  token = "TOKEN",
  role = "ROLE",
  profile = "PROFILE",
}

export const icons = [
  { src: LinkedIn.src },
  { src: Twitter.src },
  { src: Facebook.src },
];

export const blockchainProjectLogos = [
  {
    url: "https://landing-cgs.s3.amazonaws.com/63bfb474-00e2-4933-9f2c-a0ee5658c420.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/16ed2fa4-df56-4d33-9692-d1bff13a5873.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/c252881a-200f-4fa4-9f93-f02fc57bad4f.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/2f08902e-9b13-495e-a676-a507e5a64da9.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/3aebce2c-557b-4414-828b-1778dc92da35.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/1080bd9e-ec69-43e1-a659-860d27ed6655.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/454f2a44-59e6-4849-a51c-566f57d14e04.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/cc8e6de9-8980-49b7-b09c-136d52101712.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/931f1ee8-7d66-40e0-bc5d-f298def0283a.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/63f5dd4f-80d7-4edc-8739-b5b59afaa996.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/4fc784f2-7373-499e-a545-9b2d2343dd1a.png",
  },
  {
    url: "https://landing-cgs.s3.amazonaws.com/f177b111-a372-42a8-9f75-e448089bd37c.png",
  },
];

export const blockchainProjects = [
  {
    name: "SO-COL",
    text: "This Blockchain DeFi system uses smart contracts / NFT to build a reliable bridge between your web2 social channels and new trendy web3 (Web3AUTH, Web3JS). Core feature is that it is available for non-crypto users.",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/4d9af265-632e-40b6-a68f-914d41561656.png",
    },
  },
  {
    name: "Remetrik",
    text: "Perfect solution for record labels, music distributors and publishers. Cloud-based platform that makes the analytic and accounting process transparent and automated for master and publishing royalties both.",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/dc7649b1-81c8-4236-8603-ed9429a55bec.png",
    },
  },
  {
    name: "The Shelf",
    text: "Here you can find info about the creative agency – portfolio, blog posts etc. If you need support – you’re welcome in a pop-up window. You can schedule a call for building a profitable strategy by filling in the form.",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/fe9b791d-cd2f-4999-a408-582ac8895122.png",
    },
  },
  // {
  //   title: "What is a project manager? The key to project success",
  //   description:
  //     "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
  //   image: BannerImage.src,
  // },
  // {
  //   title: "What is a project manager? The key to project success",
  //   description:
  //     "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
  //   image: BannerImage.src,
  // },
];

export const initAdmin = {
  username: "",
  password: "",
};

export const feedbackInit = {
  link: "",
  companyName: "",
  role: "",
  text: "",
  name: "",
  stars: 1,
};

export const newReviewInit = {
  image: null,
  category: "",
  title: "",
  text: "",
  button: "",
};

export const newBlockchainProjectInit = {
  image: null,
  text: "",
  name: "",
};

export const newPageReviewInit = {
  image: null,
  category: "",
  title: "",
  text: "",
  button: "",
  feedback: {
    name: "",
    rating: "",
    company: "",
    feedbackText: "",
  },
};

export const newVacancy = {
  vacancy: "",
  position: "",
  stack: [],
  info: [
    {
      heading: "",
      values: [],
    },
  ],
  stars: 0,
};

export enum ROUTE_KEYS {
  AdminService = "AdminService",
  AdminPage = "AdminPage",
  AdminPortfolio = "AdminPortfolio",
  AdminCareers = "AdminCareers",
  AdminPartners = "AdminPartners",
  AdminSettings = "AdminSettings",
  AdminVacancy = "AdminVacancy",
  AdminBlog = "AdminBlog",
  AdminBlockchain = "AdminBlockchain",
  AdminPortfolioPage = "AdminPortfolioPage",
  AdminFaqPage = "AdminFaq",
  AdminAboutUs = "AdminAboutUs",
  AdminServiceMobile = "AdminServiceMobile",
  AdminServiceCloud = "AdminServiceCloud",
  AdminServiceWeb = "AdminServiceWeb",
  AdminServiceDb = "AdminServiceDb",
  AdminServiceBlockchain = "AdminServiceBlockchain",
}

export enum FaqPageTypes {
  Description = "Description",
  List = "List",
}

export const FaqPageQuestions = [
  {
    title: "How much time does the development take?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "You definitely need one of our free services — 8h estimation of a project. It will answer all your basic questions, give you insights and boost your desire to cooperate with us. To navigate you, MVP development takes from 1.5 to 2 months.",
      },
    ],
  },
  {
    title: "What technologies do you use?",
    content: [
      {
        type: FaqPageTypes.List,
        elements: [
          "BTC, ETH, Polygon, BSC, Solana, Near, Algorand, Hedera",
          "Web3.js, Ether.js, Solana Anchor",
          "Starknet / Cairo",
          "Web3auth, Opensea, Coingeco, Moralis,  Infura, Alchemy",
          "NFT, Launchpads, Metaverse, ICO, DeX, DeFI, Portfolio trackers",
          "JavaScript, TypeScript, NodeJS",
          "React Native, React, Redux, MobX, NextJS, Gatsby",
          "SQL (PostgreSQL / mySQL), noSQL (MongoDB) databases",
          "Docker, AWS, Heroku",
          "ExpressJS, NestJS, Firebase, GCP",
          "RX, GraphQL, Apollo, React Query",
          "REST API development",
        ],
      },
    ],
    image: { src: questionImage.src },
  },
  {
    title: "What is the cost of your services?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "Cost depends on several factors like deadlines, project’s complexity, industry, and client’s requirements. The price of MVP usually varies from 7000$ to 10000$.",
      },
    ],
  },
  {
    title: "What about the payment process?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "To make the estimation transparent, we work using the time-material scheme. Each task is evaluated separately by the development team in hours. It is discussed and agreed upon with the client. After the approval procedure, the hours are multiplied by the hourly rate. This way, we get the final amount. It's divided into monthly payments preliminarily accompanied by invoices from our legal team.",
      },
    ],
  },
  {
    title: "Does your work require prepayment?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "Yes, we highly appreciate our team's work, so the prepayment is a requirement. This amount of money becomes your two-week deposit and our safety net. It is made before starting. The only exception is working via Upwork.",
      },
    ],
  },
  {
    title: "How many people work on the project?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "CGS-team creates a custom team to meet all your needs and cover all the requirements. We usually connect front-end dev, back-end dev, QA engineer, UI/UX designer, and Project Manager to provide outstanding services to our clients.",
      },
    ],
  },
  {
    title: "How do we stay in touch with you?",
    content: [
      {
        type: FaqPageTypes.Description,
        text: "We believe this format allows you to be always up-to-date. Regular communication is a must for effective work.",
      },
      {
        type: FaqPageTypes.List,
        title: "Our proposal is to set up:",
        elements: [
          "meetings twice a week,",
          "daily team calls,",
          "weekly demo meetings (usually every Friday),",
          "retro meetings.",
        ],
      },
    ],
  },
  {
    title: "What are the guarantees of the qualitative results?",
    content: [
      {
        type: FaqPageTypes.List,
        title: "Our proposal is to set up:",
        elements: [
          "We conclude a contract previously agreed with the client's legal team. Then we make a two-sided signature to guarantee the provision of the services.",
          "We leave links to all our profiles on trading platforms. Our clients can always leave a review there, whether it's bad or great. We usually get the second option.",
          "Our reputation is the most vital security: 6 years of work, 54 large-scaled projects, and 0 unsuccessful cases. Don't believe it? Check it yourself. (link to our portfolio)",
        ],
      },
    ],
  },
];
