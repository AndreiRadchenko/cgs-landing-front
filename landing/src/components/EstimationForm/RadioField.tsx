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
import { parseHtml } from "../../utils/parseHtml";

const RadioField = ({
  title,
  options,
  split,
  index,
  questionKey,
  currentPage,
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
        {options.map((option) => {
          return (
            <EstimationInputFlex key={option.optionKey}>
              <EstimationInputRadio
                id={`${option.optionKey}${questionKey}`}
                type="radio"
                onChange={(e) => {
                  props.setFormData((prevState) => {
                    return {
                      ...prevState,
                      clientAnswers: [
                        ...prevState.clientAnswers,
                        {
                          questionTitle: parseHtml(title),
                          questionKey,
                          pageIndex: currentPage as number,
                          selectedOptions: [{ text: e.target.value }],
                        },
                      ],
                    };
                  });

                  formik.setFieldValue(
                    `questionsArr[${index}].value`,
                    e.target.value
                  );
                }}
                checked={parseHtml(option.text) === meta.value.value}
                value={parseHtml(option.text)}
                {...props}
              />
              <EstimationFieldOption
                htmlFor={`${option.optionKey}${questionKey}`}
                error={!!meta.error && meta!.touched}
                dangerouslySetInnerHTML={{ __html: option.text }}
              />
            </EstimationInputFlex>
          );
        })}
      </EstimateOptionContainer>
    </>
  );
};

export default RadioField;
