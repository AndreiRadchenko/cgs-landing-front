import * as yup from "yup";

export const EstimationValidation = () => {
  return yup.object({
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
