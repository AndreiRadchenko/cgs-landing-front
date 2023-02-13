import React, { Dispatch, SetStateAction, useEffect } from "react";

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
import { conditionsToAppearanceQuestion } from "../../consts";
import { getTextFromHtml } from "../../utils/getTextFromHtml";
import {
  conditionToShowQuestionsCheckbox,
  conditionToShowQuestionsRadio,
  notAnAdditionalQuestion,
  removeAdditionalQuestionsCheckbox,
  removeAdditionalQuestionsRadio,
} from "../../utils/showAdditionalQuestions";

const EstimationQuestionField = ({
  formData,
  setFormData,
  question,
  currentPage,
  index,
  setAttachFiles,
  attachFilesArr,
}: {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  question: Question;
  currentPage: number;
  index: number;
  setAttachFiles: Dispatch<SetStateAction<IFormFileData[]>>;
  attachFilesArr: IFormFileData[];
}) => {
  const [, meta] = useField(`questionsArr[${index}]`);

  /*const additionalQuestionPayments = formData.clientAnswers[
    formData.clientAnswers.findIndex(
      (item) =>
        item.questionTitle.trim() === conditionsToAppearanceQuestion[0].question
    )
  ]?.selectedOptions.some((item) => item.text === "Payments");
  const additionalQuestionMobile =
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[1].question
      )
    ]?.selectedOptions[0];
  const additionalQuestionAdmin =
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[2].question
      )
    ]?.selectedOptions[0];

  /*useEffect(() => {
    console.log("payments");
    removeAdditionalQuestionsCheckbox(question, formData, 0);
  }, [additionalQuestionPayments]);
  useEffect(() => {
    console.log("mobile");
    removeAdditionalQuestionsRadio(question, formData, 1);
  }, [additionalQuestionMobile]);
  useEffect(() => {
    console.log("admin");
    removeAdditionalQuestionsRadio(question, formData, 2);
  }, [additionalQuestionAdmin]);

  const renderAdditionalQuestion = () => {
     if (conditionToShowQuestionsCheckbox(question, formData, 0)) {
      return (
        <HoverContainer>
          <EstimationFieldBox error={!!meta.error && meta!.touched}>
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
          </EstimationFieldBox>
          <HoverBlock>
            <HoverBlackBlock />
          </HoverBlock>
        </HoverContainer>
      );
    }*/
  /*if (conditionToShowQuestionsRadio(question, formData, 1)) {
      return (
        <HoverContainer>
          <EstimationFieldBox error={!!meta.error && meta!.touched}>
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
          </EstimationFieldBox>
          <HoverBlock>
            <HoverBlackBlock />
          </HoverBlock>
        </HoverContainer>
      );
    }
    if (conditionToShowQuestionsRadio(question, formData, 2)) {
      return (
        <HoverContainer>
          <EstimationFieldBox error={!!meta.error && meta!.touched}>
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
          </EstimationFieldBox>
          <HoverBlock>
            <HoverBlackBlock />
          </HoverBlock>
        </HoverContainer>
      );
    }

    return null;
  };*/

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
