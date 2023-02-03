import React from "react";
import { useField, useFormikContext } from "formik";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputFlex,
  EstimationInputRadio,
} from "../../styles/EstimationForm.styled";

import { EstimationField } from "../../types/EstimationForm.types";

const RadioField = ({
  title,
  options,
  split,
  index,
  ...props
}: EstimationField) => {
  const formik = useFormikContext();
  const [, meta] = useField(`questionsArr[${index}]`);

  return (
    <>
      <EstimationFieldLabel
        split={split!}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <EstimateOptionContainer split={split!}>
        {options.map((option) => (
          <EstimationInputFlex key={option.optionKey}>
            <EstimationInputRadio
              type="radio"
              onChange={(e) =>
                formik.setFieldValue(
                  `questionsArr[${index}].value`,
                  e.target.value
                )
              }
              {...props}
              value={option.text}
            />
            <EstimationFieldOption
              error={!!meta.error && meta!.touched}
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </EstimationInputFlex>
        ))}
      </EstimateOptionContainer>
    </>
  );
};

export default RadioField;
