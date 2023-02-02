import React from "react";
import { useField } from "formik";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputFlex,
  EstimationInputRadio,
} from "../../styles/EstimationForm.styled";

import { EstimationField } from "../../types/EstimationForm.types";

const RadioField = ({ title, options, split, ...props }: EstimationField) => {
  const [field, meta, helpers] = useField(props);

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
              {...field}
              {...props}
              value={option.text}
            />
            <EstimationFieldOption
              dangerouslySetInnerHTML={{ __html: option.text }}
            />
          </EstimationInputFlex>
        ))}
      </EstimateOptionContainer>
    </>
  );
};

export default RadioField;
