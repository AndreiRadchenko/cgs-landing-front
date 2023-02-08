import React, { Dispatch, SetStateAction } from "react";

import TextField from "./TextField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";

import { EstimationFieldBox } from "../../styles/EstimationForm.styled";
import EstimationAdditionalQuestion from "./EstimationAdditionalQuestion";

import {
  IFormData,
  IFormFileData,
  Question,
} from "../../types/EstimationForm.types";
import {
  HoverBlackBlock,
  HoverBlock,
  HoverContainer,
} from "../../styles/Blog.styled";
import { useField } from "formik";

const EstimationQuestionField = ({
  setFormData,
  question,
  currentPage,
  index,
  setAttachFiles,
  attachFilesArr,
}: {
  setFormData: Dispatch<SetStateAction<IFormData>>;
  question: Question;
  currentPage: number;
  index: number;
  setAttachFiles: Dispatch<SetStateAction<IFormFileData[]>>;
  attachFilesArr: IFormFileData[];
}) => {
  const [, meta] = useField(`questionsArr[${index}]`);

  return (
    <HoverContainer>
      <EstimationFieldBox error={!!meta.error && meta!.touched}>
        {question.optionsType === "TEXT" && (
          <TextField
            attachFilesArr={attachFilesArr}
            setAttachFiles={setAttachFiles}
            attachFile={question.isAbilityToAttachFile}
            currentPage={currentPage}
            setFormData={setFormData}
            index={index}
            questionKey={question.questionKey}
            name={question.title}
            title={question.title}
            options={question.options}
          />
        )}
        {question.optionsType === "RADIO_BUTTON" && (
          <RadioField
            currentPage={currentPage}
            setFormData={setFormData}
            index={index}
            questionKey={question.questionKey}
            split={question.isSplitColumns}
            name={question.title}
            title={question.title}
            options={question.options}
          />
        )}
        {question.optionsType === "CHECKBOX" && (
          <CheckboxField
            currentPage={currentPage}
            setFormData={setFormData}
            index={index}
            questionKey={question.questionKey}
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
