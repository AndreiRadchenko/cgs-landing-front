import { FormikValues } from "formik";

export const fieldData: FormikValues = {
  name: "",
  aboutCandidate: "",
  email: "",
  telegram: "",
  socialMediaLink: "",
  projectsLink: "",
  "CV-file": "",
};

export const fieldContent = [
  {
    name: "name",
    label: "what is your name?",
  },
  {
    name: "aboutCandidate",
    label: "describe yourself in 1 sentence",
  },
  {
    name: "email",
    label: "e-mail",
  },
  {
    name: "telegram",
    label: "telegram",
  },
  {
    name: "socialMediaLink",
    label: "social media link",
  },
  {
    name: "projectsLink",
    label: "links to your bright projects",
  },
];
