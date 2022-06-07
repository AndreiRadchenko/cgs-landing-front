import LinkedIn from "../../public/linkedIn.svg";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";
import BlogBannerImage from "../../public/blog-banner.jpg";
import BlockchainBannerImage from "../../public/blockchain-banner.png";

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

export enum ROUTE_KEYS {
  AdminPage = "AdminPage",
  AdminPortfolio = "/Admin/AdminPortfolio",
  AdminCareers = "AdminCareers",
  AdminPartners = "AdminPartners",
  AdminSettings = "AdminSettings",
  AdminVacancy = "/Admin/AdminVacancy",
  AdminBlog = "/Admin/AdminBlog",
  AdminBlockchain = "/Admin/AdminBlockchain",
}
