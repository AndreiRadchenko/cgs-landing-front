import * as yup from "yup";

export const AdminBlogValidation = () => {
  return yup.object({
    author: yup.object().shape({
      name: yup.string().required("Can not be empty"),
      specialization: yup.string().required("Can not be empty"),
    }),
    url: yup.string().required("Can not be empty"),
    date: yup.string().required("Can not be empty"),
    minutesToRead: yup.number().required("Can not be empty"),
    image: yup.object().required(),
    title: yup
      .string()
      .min(10, "Title can't be less than 10 symbols")
      .max(60, "Title can't be more than 60 symbols")
      .required("Can not be empty"),
    description: yup
      .string()
      .min(20, "Description can't be less than 20 symbols")
      .max(160, "Description can't be more than 160 symbols")
      .required("Can not be empty"),
    tags: yup
      .array()
      .of(yup.string().required("Can not be empty"))
      .min(1, "Can not be empty"),
  });
};
