import LinkedIn from "../../public/linkedIn.svg";
import Twitter from "../../public/twitter.svg";
import Facebook from "../../public/facebook.svg";

import SetOptions from "suneditor-react/dist/types/SetOptions";

export enum ErrorMessage {
  DEFAULT = "Oops, something went wrong!",
}

export enum storeKeys {
  token = "TOKEN",
  profile = "PROFILE",
  chatUserData = "CHAT",
}

export enum chat {
  privateKey = "Private-Key",
}

export const urlPattern =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

// Regular expression pattern
export const imageExtensionPattern =
  /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|avif)(\?.*)?$/i;

export const fileNameRegex = /\/([^\/?#]+)\.([a-zA-Z0-9]+)(\?.*)?$/;

export const options: SetOptions = {
  font: ["NAMU"],
  linkRelDefault: {
    default: undefined,
    check_new_window: "nofollow noopener",
  },
  buttonList: [
    [
      "formatBlock",
      "font",
      "fontSize",
      "fontColor",
      "align",
      "paragraphStyle",
      "blockquote",
    ],
    ["bold", "underline", "italic", "strike", "subscript", "superscript"],
    ["removeFormat"],
    ["outdent", "indent"],
    ["list"],
    ["link", "image", "video"],
    ["codeView"],
  ],
};

export const icons = [
  { src: LinkedIn.src },
  { src: Twitter.src },
  { src: Facebook.src },
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

export const testimonialsInit = {
  slideTitle: "",
  stars: 1,
  slideBanner: {
    image: null,
  },
  name: "",
  company: "",
  videoUrl: "",
  link: "",
  text: "",
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
  imageBanner: {
    image: null,
  },
  imageProjectBanner: {
    image: null,
  },
  categories: [],
  title: "",
  text: "",
  button: "",
  NDA: false,
  flag: "",
  country: "",
  projectDuration: "",
  projectTeam: "",
  showCaseTitle: "",
  industry: "",
  technologies: [],
  feedback: {
    name: "",
    position: "",
    feedbackText: "",
  },
  technologyNew: {
    name: "",
    image: null,
    main: false,
  },
};

export const newVacancy = {
  id: "",
  description: "",
  location: "",
  time: "",
  vacancy: "",
  position: "",
  image: { url: "" },
  _id: "",
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
  AdminPage = "AdminPage",
  AdminCareers = "AdminCareers",
  AdminBlog = "AdminBlog",
  AdminPortfolio = "AdminPortfolio",
  AdminFaqPage = "AdminFaq",
  AdminPrivacy = "AdminPrivacy",
  AdminAboutUs = "AdminAboutUs",
  AdminContact = "AdminContact",
  AdminServiceMobile = "AdminServiceMobile",
  AdminServiceCloud = "AdminServiceCloud",
  AdminServiceSupport = "AdminServiceSupport",
  AdminServiceWeb = "AdminServiceWeb",
  AdminServiceDb = "AdminServiceDb",
  AdminServiceBlockchain = "AdminServiceBlockchain",
  AdminServiceUxUi = "AdminServiceUxUi",
  AdminCalculator = "AdminCalculator",
  AdminServiceMobileAudit = "AdminServiceMobileAudit",
  AdminServiceWebAudit = "AdminServiceWebAudit",
  AdminServiceDappAudit = "AdminServiceDappAudit",
  AdminServiceAiSolutions = "AdminServiceAiSolutions",
  AdminEstimationForm = "AdminEstimationForm",
  AdminRateCard = "AdminRateCard",
  AdminSupportChat = "AdminSupportChat",
  AdminCVs = "AdminCVs",
}

export const newBlogArticle = {
  url: "",
  image: null,
  title: "",
  description: "",
  author: {
    image: null,
    name: "",
    specialization: "",
  },
  updatedOn: "",
  date: "",
  minutesToRead: 2,
  content: "",
  tags: [],
  disabled: false,
  draft: false,
  meta: {
    metaTitle: "",
    metaDescription: "",
    customHead: "",
  },
};

export const additionalEstimationFormQuestion = [
  "How do you want to process payments?",
  "What mobile features would you like to include?",
  "Your admin panel needs…",
];

export const conditionsToAppearanceQuestion = [
  {
    question:
      "Choose 3rd party integrations inside your application if you need them:",
    answer: "Payments",
  },
  {
    question: "What kind of app do you want to build?",
    answer: "Web (access via browser)",
  },
  {
    question: "Do you want to add an admin panel to the app?",
    answer: "Yes",
  },
];

export const BlogPageSize = 4;

export const PortfolioPageSize = 8;

export const AdminPortfolioPageSize = 6;

export const META_TITLE_MAX = 60;
export const META_DESCRIPTION_MAX = 160;

export const NewCv = {
  image: null,
  category: "",
  personal: {
    name: "",
    summary: "",
    role: "",
  },
  info: {
    title: "INFO:",
    content: [
      {
        subtitle: "Education",
        text: "",
      },
      {
        subtitle: "Timezone",
        text: "",
      },
      {
        subtitle: "English",
        text: "",
      },
      {
        subtitle: "Experience",
        text: "",
      },
    ],
  },
  skills: {
    title: "SKILLS:",
    card: [
      {
        subtitle: "",
        stack: [""],
      },
      {
        subtitle: "",
        stack: [""],
      },
      {
        subtitle: "",
        stack: [""],
      },
    ],
  },
  projects: {
    title: "PROJECTS:",
    project: [
      {
        projectName: "",
        role: "",
        date: "",
        summary: "",
        achievements: [""],
        technology: [],
      },
    ],
  },
};
