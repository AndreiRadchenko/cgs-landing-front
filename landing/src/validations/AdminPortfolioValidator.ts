import * as yup from "yup";

export const AdminPortfolioValidation = () => {
  return yup.object({
    text: yup
      .string()
      .max(625, "Description can't be more than 300 symbols")
      .required("Enter Description"),
    imageBanner: yup.object().shape({
      image: yup.object().required(),
    }),
    imageProjectBanner: yup.object().shape({
      image: yup.object().required(),
    }),
  });
};
