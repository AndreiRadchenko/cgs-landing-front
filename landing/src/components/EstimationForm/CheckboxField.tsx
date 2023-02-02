import React from "react";
import {
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputCheckbox,
  EstimationInputFlex,
} from "../../styles/EstimationForm.styled";
import { useField } from "formik";
import { EstimationField } from "../../types/EstimationForm.types";

const CheckboxField = ({ title, options, ...props }: EstimationField) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      {options.map((option) => (
        <EstimationInputFlex key={option.optionKey}>
          <EstimationInputCheckbox
            type="checkbox"
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

export default CheckboxField;
