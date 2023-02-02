import React from "react";

import TextField from "./TextField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";

import { EstimationFieldBox } from "../../styles/EstimationForm.styled";
import EstimationAdditionalQuestion from "./EstimationAdditionalQuestion";

import { Question } from "../../types/EstimationForm.types";
import {
  HoverBlackBlock,
  HoverBlock,
  HoverContainer,
} from "../../styles/Blog.styled";
import { useField, useFormikContext } from "formik";

const EstimationQuestionField = ({
  question,
  index,
}: {
  question: Question;
  index: number;
}) => {
  const [, meta] = useField(`questionsArr[${index}]`);

  return (
    <HoverContainer>
      <EstimationFieldBox error={!!meta.error && meta!.touched}>
        {question.optionsType === "TEXT" && (
          <TextField
            index={index}
            name={question.title}
            title={question.title}
            options={question.options}
          />
        )}
        {question.optionsType === "RADIO_BUTTON" && (
          <RadioField
            index={index}
            split={question.isSplitColumns}
            name={question.title}
            title={question.title}
            options={question.options}
          />
        )}
        {question.optionsType === "CHECKBOX" && (
          <CheckboxField
            index={index}
            split={question.isSplitColumns}
            name={question.title}
            title={question.title}
            options={question.options}
          />
        )}
        {question.isHiddenText && (
          <EstimationAdditionalQuestion hiddenText={question.hiddenText} />
        )}
      </EstimationFieldBox>
      <HoverBlock>
        <HoverBlackBlock />
      </HoverBlock>
    </HoverContainer>
  );
};

export default EstimationQuestionField;
