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
import {
  createField,
  updateField,
} from "../../utils/estimationFromUpdateAndCreateField";

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
                    const indexOfAnswer = prevState.clientAnswers.findIndex(
                      (answer) => answer.questionTitle === parseHtml(title)
                    );
                    return {
                      ...prevState,
                      clientAnswers:
                        indexOfAnswer !== -1
                          ? updateField(prevState, indexOfAnswer, e)
                          : createField(
                              prevState,
                              indexOfAnswer,
                              e,
                              title,
                              questionKey,
                              currentPage
                            ),
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
