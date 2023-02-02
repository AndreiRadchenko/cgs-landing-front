import React from "react";
import {
  EstimateOptionContainer,
  EstimationFieldLabel,
  EstimationFieldOption,
  EstimationInputCheckbox,
  EstimationInputFlex,
} from "../../styles/EstimationForm.styled";
import { useField } from "formik";
import { EstimationField } from "../../types/EstimationForm.types";

const CheckboxField = ({
  title,
  options,
  split,
  ...props
}: EstimationField) => {
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
      </EstimateOptionContainer>
    </>
  );
};

export default CheckboxField;
