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
          // console.log(parseHtml(option.text), meta.value?.value);
          // console.log(parseHtml(option.text) === meta.value?.value);
          return (
            <EstimationInputFlex key={option.optionKey}>
              <EstimationInputRadio
                type="radio"
                onChange={(e) => {
                  props.setFormData((prevState) => ({
                    ...prevState,
                    clientAnswers: [
                      ...prevState.clientAnswers,
                      {
                        questionTitle: parseHtml(title),
                        questionIndex: index as number,
                        pageIndex: currentPage as number,
                        selectedOptions: [{ text: e.target.value }],
                      },
                    ],
                  }));
                  formik.setFieldValue(
                    `questionsArr[${index}].value`,
                    e.target.value
                  );
                }}
                {...props}
                value={parseHtml(option.text)}
              />
              <EstimationFieldOption
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
