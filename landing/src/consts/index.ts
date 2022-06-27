import LinkedIn from "../../public/linkedIn.svg";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";
import BannerImage from "../../public/blog-banner.jpg";

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
    title: "What is a project manager? The key to project success??",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success?",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BannerImage.src,
  },
  {
    title: "What is a project manager? The key to project success",
    description:
      "The role of a project manager is evolving as businesses evolve. The role of a project manager is evolving as businesses evolve.",
    image: BannerImage.src,
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

export enum ROUTE_KEYS {
  AdminPage = "AdminPage",
  AdminPortfolio = "/Admin/AdminPortfolio",
  AdminCareers = "AdminCareers",
  AdminPartners = "AdminPartners",
  AdminSettings = "AdminSettings",
  AdminVacancy = "/Admin/AdminVacancy",
  AdminBlog = "/Admin/AdminBlog",
  AdminPortfolioPage = "/Admin/AdminPortfolioPage",
}
