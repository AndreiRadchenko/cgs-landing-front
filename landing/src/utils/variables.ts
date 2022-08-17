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
  "Ongoing Support // Maintenance": "",
  "Server & Databases": "/services/database-and-server-solutions",
  "UX/UI Design": "",
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
      "Ongoing Support // Maintenance",
      "Server & Databases",
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
