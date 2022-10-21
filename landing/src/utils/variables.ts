export const routers = {
  home: "/",
  careers: "/careers",
  blog: "/blog",
  portfolio: "/portfolio",
};

export const routersNew = ["/portfolio", "/services", "/company", "/blog"];

export const navigationRoutesNames = [
  "/portfolio",
  "/home",
  "/careers",
  "/blog",
];

/*
  You can pass here default links such as: https://youtube.com
  Or short links to navigate between pages such as: / - will move you to index page of the app
*/
export const navigationRoutesLinks = {
  "Crypto // Blockchain Development": "/services/blockchain",
  "Web // Desktop Development": "/services/web-development",
  "Mobile Development": "/services/mobile-app-development",
  "Cloud Solutions": "/services/cloud-solutions",
  "IT Support Services": "/services/it-support",
  "Server // Databases": "/services/database-and-server-solutions",
  "UX/UI Design": "/services/ux-ui-design",
  "About us": "/about-us",
  Careers: "/careers",
  FAQ: "/faq",
};

export const navigationRoutesNamesNew = [
  { route: "Portfolio", withDropdown: false },
  {
    route: "Services",
    withDropdown: true,
    tags: [
      "Crypto // Blockchain Development",
      "Web // Desktop Development",
      "Mobile Development",
      "Cloud Solutions",
      "IT Support Services",
      "Server // Databases",
      "UX/UI Design",
    ],
  },
  {
    route: "Company",
    withDropdown: true,
    tags: ["About us", "Careers", "FAQ"],
  },
  { route: "Blog", withDropdown: false },
];

export const modalNavigationRoutesNames = [
  "web",
  "mobile",
  "server",
  "blockchain",
];

export const howWeWorkColor: ("blue" | "orange" | "green")[] = [
  "blue",
  "orange",
  "green",
  "blue",
];

export const adminBlogHeaders = ["h2", "h3", "h4", "h5", "h6"];

export const portfolioCategories = ["web", "mobile", "server", "blockchain"];

export const LETTERS_NUMBERS = "abcdefghijklmnopqrstuvwyxz1234567890";
export const SPECIAL_CHARACTERS = `!@#$%^&*()_+-={}[]`;
export const SYMBOLS = LETTERS_NUMBERS + SPECIAL_CHARACTERS;

export const DEFAULT_SCRAMBLE_SPEED = 30;
export const DEFAULT_REVEAL_SPEED = 100;
export const DEFAULT_REVEAL_DELAY = 1000;

export const mobileServicesRoutes = [
  "mobile-app-development",
  "web-development",
  "database-and-server-solutions",
  "it-support",
  "ux-ui-design",
  "cloud-solutions",
  "blockchain",
];
