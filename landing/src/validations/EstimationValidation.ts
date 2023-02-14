import * as yup from "yup";

export const EstimationValidation = () => {
  return yup.object({
    username: yup
      .string()
      .required()
      .trim()
      .matches(/^[a-zA-Z0-9]+$/, "invalid username")
      .min(1, "please fill empty fields")
      .max(50, "you're over the limit"),
    email: yup.string().email().required(),
    questionsArr: yup.array(
      yup.object({
        questionTitle: yup.string(),
        required: yup.boolean().notRequired(),
        value: yup.lazy((val) =>
          Array.isArray(val)
            ? yup
                .array()
                .of(yup.string())
                .when("required", {
                  is: true,
                  then: yup
                    .array()
                    .of(yup.string())
                    .min(1, "please fill empty fields"),
                  otherwise: yup.array().of(yup.string()),
                })
            : yup.string().when("required", {
                is: true,
                then: yup
                  .string()
                  .trim()
                  .required()
                  .min(1, "please fill empty fields")
                  .max(300, "you're over the limit"),
                otherwise: yup
                  .string()
                  .trim()
                  .max(300, "you're over the limit"),
              })
        ),
      })
    ),
  });
};
