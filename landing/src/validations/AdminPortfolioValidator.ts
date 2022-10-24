import * as yup from "yup";

export const AdminPortfolioValidation = () => {
  return yup.object({
    text: yup
      .string()
      .max(300, "Description can't be more than 300 symbols")
      .required("Enter Description"),
  });
};
