import * as yup from "yup";

export const AdminPortfolioValidation = () => {
  return yup.object({
    text: yup
      .string()
      .max(625, "Description can't be more than 625 symbols")
      .required("Enter Description"),
    imageBanner: yup.object().shape({
      image: yup.object().required(),
    }),
    imageProjectBanner: yup.object().shape({
      image: yup.object().required(),
    }),
    feedback: yup
      .object()
      .shape({
        name: yup.string().required(),
        position: yup.string(),
        feedbackText: yup.string().required(),
      })
      .required(),
    technologies: yup.array().required(),
    title: yup
      .string()
      .max(50, "Title can't be more than 50 symbols")
      .required(),
    showCaseTitle: yup.string(),
    flag: yup.string().required(),
    country: yup.string().required(),
    projectDuration: yup.string().max(3).required(),
    projectTeam: yup.string().max(2).required(),
    categories: yup.array().required(),
    button: yup.string(),
    _id: yup.string(),
    NDA: yup.boolean(),
  });
};
