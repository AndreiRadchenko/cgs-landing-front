import * as yup from "yup";

export const CareerFormValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(1, "Name is too short")
      .max(25, "Name is too large")
      .required("Required"),
    aboutCandidate: yup.string().min(1).max(20).required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    telegram: yup.string().required("Required"),
    socialMediaLin: yup.string().min(10).required("Required"),
    projectsLink: yup.string().required("Required").min(10),
  });
};
