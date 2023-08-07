import { CvData } from "../types/Admin/AdminCv.types";

export const cvData: CvData = {
  image: {
    url: "https://d2qrnmx3qcgrup.cloudfront.net/e65da4da-1c4c-4539-ba39-9d0dfeb059ab.png",
  },
  personal: {
    name: "Oleksii Makovei",
    summary:
      "High-performing software engineer capable of working in a highly agile software development process. Experienced in covering complex tasks with tight deadlines.",
    role: "Full-stack developer",
  },
  info: {
    title: "info",
    content: [
      {
        subtitle: "Education",
        text: '<p>Faculty of Applied Math ^<span style="color: #8F8E93;">Kyiv National Polytechnical University<span></p>',
      },
      {
        subtitle: "English",
        text: "Advanced",
      },
      {
        subtitle: "Timezone",
        text: "Warsaw, Poland",
      },
      {
        subtitle: "Experience",
        text: "6+ years",
      },
    ],
  },
  skills: {
    title: "Skills",
    card: [
      {
        subtitle: "Front-end Skills",
        stack: [
          "TypeScript / JavaScript",
          "React",
          "NextJS",
          "Redux",
          "React Query",
          "React Native",
          "Webpack",
          "Apollo client",
          "Styled components / Tailwind API",
          "MobX",
          "MobX-state-tree",
          "Jest",
          "React Testing Library",
        ],
      },
      {
        subtitle: "Back-end Skills",
        stack: [
          "NodeJS",
          "NestJS",
          "ExpressJS",
          "MongoDB",
          "PostgreSQL",
          "typeORM",
          "GraphQL",
        ],
      },
      {
        subtitle: "Cloud-Deployment",
        stack: ["AWS", "Firebase", "GitLab / GitHub actions"],
      },
    ],
  },
  projects: {
    title: "Projects",
    project: [
      {
        projectName: "Chili | Web",
        role: "Full-stack developer",
        date: "Aug `22 - Jan `23 • (6 months)",
        summary:
          "High-performing software engineer capable of working in a highly agile software development process. Experienced in covering complex tasks with tight deadlines.",
        achievements: [
          "Implemented online ordering system",
          "Implemented remote payments via NFC tag",
          "Implemented a feature for leaving a tip for a waiter online",
        ],
        technology: [
          "TypeScript",
          "Heroku",
          "AWS",
          "Firebase",
          "React Native",
          "Bootstrap",
          "Angular",
        ],
      },
      {
        projectName: "Chili | Web",
        role: "Full-stack developer",
        date: "Aug `22 - Jan `23 • (6 months)",
        summary:
          "High-performing software engineer capable of working in a highly agile software development process. Experienced in covering complex tasks with tight deadlines.",
        achievements: [
          "Implemented online ordering system",
          "Implemented remote payments via NFC tag",
          "Implemented a feature for leaving a tip for a waiter online",
          "Implemented fully-customizable admin panel",
          "Implemented the system from scratch",
          "Implemented a feature for leaving a tip for a waiter online",
          "Implemented fully-customizable admin panel",
          "Implemented the system from scratch",
        ],
        technology: ["TypeScript", "Heroku", "AWS", "Firebase", "React Native"],
      },
      {
        projectName: "Chili | Web",
        role: "Full-stack developer",
        date: "Aug `22 - Jan `23 • (6 months)",
        summary:
          "High-performing software engineer capable of working in a highly agile software development process. Experienced in covering complex tasks with tight deadlines.",
        achievements: [
          "Implemented online ordering system",
          "Implemented remote payments via NFC tag",
          "Implemented a feature for leaving a tip for a waiter online",
          "Implemented fully-customizable admin panel",
          "Implemented the system from scratch",
        ],
        technology: ["TypeScript", "Heroku", "AWS", "Firebase", "React Native"],
      },
    ],
  },
};
