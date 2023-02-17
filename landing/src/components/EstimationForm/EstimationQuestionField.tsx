import React, { Dispatch, SetStateAction, useEffect } from "react";

import TextField from "./TextField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";

import {
  EstimationFieldBox,
  HoverBlackBlockEstimation,
  HoverBlockEstimation,
  HoverContainerEstimation,
} from "../../styles/EstimationForm.styled";
import EstimationAdditionalQuestion from "./EstimationAdditionalQuestion";

import {
  IFormData,
  IFormFileData,
  Question,
} from "../../types/EstimationForm.types";
import { useField, useFormikContext } from "formik";
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
  touched,
}: {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  question: Question;
  currentPage: number;
  index: number;
  setAttachFiles: Dispatch<SetStateAction<IFormFileData[]>>;
  attachFilesArr: IFormFileData[];
  touched: boolean;
}) => {
  const [field, meta] = useField(`questionsArr[${index}]`);
  const [, metaUsername] = useField("username");
  const [, metaEmail] = useField("email");

  const additionalQuestionPayments = formData.clientAnswers[
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

  useEffect(() => {
    field.value?.required ? (field.value.required = false) : null;
    removeAdditionalQuestionsCheckbox(question, formData, 0);
  }, [additionalQuestionPayments]);
  useEffect(() => {
    field.value?.required ? (field.value.required = false) : null;
    removeAdditionalQuestionsRadio(question, formData, 1);
  }, [additionalQuestionMobile]);
  useEffect(() => {
    field.value?.required ? (field.value.required = false) : null;
    removeAdditionalQuestionsRadio(question, formData, 2);
  }, [additionalQuestionAdmin]);

  const renderAdditionalQuestion = () => {
    if (conditionToShowQuestionsCheckbox(question, formData, 0)) {
      field.value.required = true;
      return (
        <HoverContainerEstimation>
          <EstimationFieldBox
            error={!!meta.error && touched}
            key={question.questionKey}
          >
            <CheckboxField
              formData={formData}
              currentPage={currentPage}
              setFormData={setFormData}
              index={index}
              questionKey={question.questionKey}
              split={question.isSplitColumns}
              name={question.title}
              title={question.title}
              options={question.options}
              touched={touched}
            />
          </EstimationFieldBox>
          <HoverBlockEstimation>
            <HoverBlackBlockEstimation />
          </HoverBlockEstimation>
        </HoverContainerEstimation>
      );
    }
    if (conditionToShowQuestionsRadio(question, formData, 1, true)) {
      field.value.required = true;
      return (
        <HoverContainerEstimation>
          <EstimationFieldBox
            error={!!meta.error && touched}
            key={question.questionKey}
          >
            <CheckboxField
              formData={formData}
              currentPage={currentPage}
              setFormData={setFormData}
              index={index}
              questionKey={question.questionKey}
              split={question.isSplitColumns}
              name={question.title}
              title={question.title}
              options={question.options}
              touched={touched}
            />
          </EstimationFieldBox>
          <HoverBlockEstimation>
            <HoverBlackBlockEstimation />
          </HoverBlockEstimation>
        </HoverContainerEstimation>
      );
    }
    if (conditionToShowQuestionsRadio(question, formData, 2)) {
      field.value.required = true;
      return (
        <HoverContainerEstimation>
          <EstimationFieldBox
            error={!!meta.error && touched}
            key={question.questionKey}
          >
            <CheckboxField
              formData={formData}
              currentPage={currentPage}
              setFormData={setFormData}
              index={index}
              questionKey={question.questionKey}
              split={question.isSplitColumns}
              name={question.title}
              title={question.title}
              options={question.options}
              touched={touched}
            />
          </EstimationFieldBox>
          <HoverBlockEstimation>
            <HoverBlackBlockEstimation />
          </HoverBlockEstimation>
        </HoverContainerEstimation>
      );
    }

    return null;
  };

  return notAnAdditionalQuestion(getTextFromHtml(question.title)) ? (
    <HoverContainerEstimation>
      <EstimationFieldBox
        key={question.questionKey}
        error={
          getTextFromHtml(question.title) === "Your Name" ||
          getTextFromHtml(question.title) === "Your Email"
            ? getTextFromHtml(question.title) === "Your Email"
              ? !!metaEmail.error && touched
              : !!metaUsername.error && touched
            : !!meta.error && touched
        }
      >
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
            touched={touched}
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
            touched={touched}
          />
        )}
        {question.optionsType === "CHECKBOX" && (
          <CheckboxField
            formData={formData}
            currentPage={currentPage}
            setFormData={setFormData}
            index={index}
            questionKey={question.questionKey}
            split={question.isSplitColumns}
            name={question.title}
            title={question.title}
            options={question.options}
            touched={touched}
          />
        )}
        {question.isHiddenText && (
          <EstimationAdditionalQuestion hiddenText={question.hiddenText} />
        )}
      </EstimationFieldBox>
      <HoverBlockEstimation>
        <HoverBlackBlockEstimation />
      </HoverBlockEstimation>
    </HoverContainerEstimation>
  ) : (
    renderAdditionalQuestion()
  );
};

export default EstimationQuestionField;
