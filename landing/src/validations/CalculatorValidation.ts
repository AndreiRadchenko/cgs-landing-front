import * as yup from "yup";

export const CalculatorValidation = () => {
  return yup.object({
    email: yup.string().email().required("Enter e-mail"),
    questionsArr: yup.array(
      yup.object({
        title: yup.string(),
        tieUpDisabled: yup.boolean().notRequired(),
        answer: yup.lazy((val) =>
          Array.isArray(val)
            ? yup
                .array()
                .of(yup.string())
                .when("tieUpDisabled", {
                  is: false,
                  then: yup
                    .array()
                    .of(yup.string())
                    .min(1, "please fill empty fields"),
                  otherwise: yup.array().of(yup.string()),
                })
            : yup.string().when("tieUpDisabled", {
                is: false,
                then: yup
                  .string()
                  .required()
                  .min(1, "please fill empty fields"),
                otherwise: yup.string(),
              })
        ),
        subStepAnswer: yup.lazy((val) =>
          Array.isArray(val) ? yup.array().of(yup.string()) : yup.string()
        ),
      })
    ),
  });
};
