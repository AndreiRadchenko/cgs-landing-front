import * as yup from "yup";

export const CareerFormValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(1, "Name is too short")
      .max(25, "Name is too large")
      .required("Required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    describe: yup.string().min(2).max(20).required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    telegram: yup.string().required("Required"),
    socialMediaLink: yup
      .string()
      .min(10, "A link to the social media must contain at least 10 characters")
      .required("Required"),
    linksToProjects: yup
      .string()
      .required("Required")
      .min(10, "A link to the project must contain at least 10 characters"),
    "CV-file": yup.string().required("Required"),
  });
};
