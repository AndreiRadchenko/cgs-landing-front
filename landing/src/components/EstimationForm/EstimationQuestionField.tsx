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
import {
  additionalEstimationFormQuestion,
  conditionsToAppearanceQuestion,
} from "../../consts";
import { parseHtml } from "../../utils/parseHtml";

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

  const additionalQuestionPayments =
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[0].question
      )
    ]?.selectedOptions;
  const additionalQuestionMobile =
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[1].question
      )
    ]?.selectedOptions;
  const additionalQuestionAdmin =
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[2].question
      )
    ]?.selectedOptions;

  const notAnAdditionalQuestion = (question: string) => {
    return !additionalEstimationFormQuestion.find((item) => item === question);
  };

  useEffect(() => {
    if (
      notAnAdditionalQuestion(parseHtml(question.title)) &&
      !formData.clientAnswers
        ?.find(
          (item) =>
            item.questionTitle === conditionsToAppearanceQuestion[0].question
        )
        ?.selectedOptions.some(
          (field) => field.text === conditionsToAppearanceQuestion[0].answer
        ) &&
      formData.clientAnswers.findIndex(
        (item) => item.questionTitle === additionalEstimationFormQuestion[0]
      ) > -1
    ) {
      console.log("true 0");
      formData.clientAnswers.splice(
        formData.clientAnswers.findIndex(
          (item) => item.questionTitle === additionalEstimationFormQuestion[0]
        ),
        1
      );
    }
  }, [additionalQuestionPayments]);

  useEffect(() => {
    if (
      notAnAdditionalQuestion(parseHtml(question.title)) &&
      formData.clientAnswers?.find(
        (item) =>
          item.questionTitle === conditionsToAppearanceQuestion[1].question
      )?.selectedOptions[0].text !== conditionsToAppearanceQuestion[1].answer &&
      formData.clientAnswers.findIndex(
        (item) => item.questionTitle === additionalEstimationFormQuestion[1]
      ) > -1
    ) {
      console.log("true 1");
      formData.clientAnswers.splice(
        formData.clientAnswers.findIndex(
          (item) => item.questionTitle === additionalEstimationFormQuestion[1]
        ),
        1
      );
    }
  }, [additionalQuestionMobile]);

  useEffect(() => {
    if (
      notAnAdditionalQuestion(parseHtml(question.title)) &&
      formData.clientAnswers?.find(
        (item) =>
          item.questionTitle === conditionsToAppearanceQuestion[2].question
      )?.selectedOptions[0].text !== conditionsToAppearanceQuestion[2].answer &&
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() === additionalEstimationFormQuestion[2]
      ) > -1
    ) {
      console.log("true 2");
      formData.clientAnswers.splice(
        formData.clientAnswers.findIndex(
          (item) => item.questionTitle === additionalEstimationFormQuestion[2]
        ),
        1
      );
    }
  }, [additionalQuestionAdmin]);

  if (
    !notAnAdditionalQuestion(parseHtml(question.title)) &&
    additionalEstimationFormQuestion[0] === parseHtml(question.title) &&
    formData.clientAnswers
      .find(
        (item) =>
          item.questionTitle === conditionsToAppearanceQuestion[0].question
      )
      ?.selectedOptions.some(
        (field) => field.text === conditionsToAppearanceQuestion[0].answer
      )
  ) {
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
  if (
    additionalEstimationFormQuestion[1] === parseHtml(question.title) &&
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle === conditionsToAppearanceQuestion[1].question
      )
    ]?.selectedOptions[0].text === conditionsToAppearanceQuestion[1].answer
  ) {
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
  if (
    additionalEstimationFormQuestion[2] === parseHtml(question.title) &&
    formData.clientAnswers[
      formData.clientAnswers.findIndex(
        (item) =>
          item.questionTitle.trim() ===
          conditionsToAppearanceQuestion[2].question
      )
    ]?.selectedOptions[0].text === conditionsToAppearanceQuestion[2].answer
  ) {
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

  return notAnAdditionalQuestion(parseHtml(question.title)) ? (
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
  ) : null;
};

export default EstimationQuestionField;
