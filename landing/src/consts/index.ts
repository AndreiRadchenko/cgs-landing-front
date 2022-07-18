import LinkedIn from "../../public/linkedIn.svg";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";
import BlogBannerImage from "../../public/blog-banner.jpg";
import git from "../../public/FooterIcons/git.svg";
import co from "../../public/FooterIcons/co.svg";
import linkedin from "../../public/FooterIcons/in.svg";
import up from "../../public/FooterIcons/up.svg";

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

export const footerIcons = [
  { src: git.src },
  { src: up.src },
  { src: co.src },
  { src: linkedin.src },
];

export const blogItems = [
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BlogBannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BlogBannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BlogBannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BlogBannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BlogBannerImage.src,
  },
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
  position: "",
  vacancy: "",
  stars: 0,
  stack: [],
};

export enum ROUTE_KEYS {
  AdminPage = "AdminPage",
  AdminPortfolio = "/Admin/AdminPortfolio",
  AdminCareers = "AdminCareers",
  AdminPartners = "AdminPartners",
  AdminSettings = "AdminSettings",
  AdminVacancy = "/Admin/AdminVacancy",
  AdminBlog = "/Admin/AdminBlog",
  AdminBlockchain = "/Admin/AdminBlockchain",
  AdminPortfolioPage = "/Admin/AdminPortfolioPage",
}
