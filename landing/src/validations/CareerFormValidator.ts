import * as yup from "yup";

export const CareerFormValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(3, "Name is too short")
      .max(25, "Name is too large")
      .required("Required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    describe: yup
      .string()
      .min(2)
      .max(20)
      .required("Required")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Required")
      .matches(/^((?!.ru).)*$/m, "Domain ru isn't allowed")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    telegram: yup
      .string()
      .required("Required")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    socialMediaLink: yup
      .string()
      .min(10, "A link to the social media must contain at least 10 characters")
      .required("Required")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    linksToProjects: yup
      .string()
      .required("Required")
      .min(10, "A link to the project must contain at least 10 characters")
      .matches(/^(?!.*<[^>]+>).*/i, "HTML are not allowed"),
    file: yup.string().required("Required"),
  });
};
