import * as yup from "yup";

export const LestCodeValidation = () => {
  return yup.object({
    name: yup
      .string()
      .min(1, "Имя слишком короткое")
      .max(25, "Слишком длинное")
      .required("Обязательный параметр"),
    email: yup
      .string()
      .email("ну должен быть эмейл а не эта хуйня")
      .required("Обязательный параметр"),
  });
};
