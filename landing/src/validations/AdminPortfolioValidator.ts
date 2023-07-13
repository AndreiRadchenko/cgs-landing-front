import * as yup from "yup";

export const AdminPortfolioValidation = () => {
  return yup.object({
    text: yup
      .string()
      .max(1200, "Description can't be more than 1200 symbols")
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
    technologies: yup
      .array()
      .of(yup.object().required("Can not be empty"))
      .min(1, "Can not be empty")
      .max(6, "Can not be more than 6"),
    industry: yup.string().required(),
    title: yup
      .string()
      .max(50, "Title can't be more than 50 symbols")
      .required(),
    showCaseTitle: yup.string(),
    flag: yup.string().required(),
    country: yup.string().required(),
    projectDuration: yup.string().max(3).required(),
    projectTeam: yup.string().max(2).required(),
    categories: yup
      .array()
      .of(yup.string().required("Can not be empty"))
      .min(1, "Can not be empty"),
    button: yup
      .string()
      .test("button-nda", "Either Button or NDA is required", function (value) {
        const { NDA } = this.parent;
        if (value || NDA === true) {
          return true;
        }
        return false;
      }),
    _id: yup.string(),
    NDA: yup
      .boolean()
      .test("button-nda", "Either Button or NDA is required", function (value) {
        const { button } = this.parent;
        if (value || button) {
          return true;
        }
        return false;
      }),
  });
};
