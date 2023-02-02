import React from "react";
import { useField } from "formik";
import {
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputFlex,
  EstimationInputRadio,
} from "../../styles/EstimationForm.styled";

import { EstimationField } from "../../types/EstimationForm.types";

const RadioField = ({ title, options, ...props }: EstimationField) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
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
    </>
  );
};

export default RadioField;
