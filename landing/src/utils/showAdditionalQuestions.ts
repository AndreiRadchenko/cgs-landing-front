import { getTextFromHtml } from "./getTextFromHtml";
import {
  additionalEstimationFormQuestion,
  conditionsToAppearanceQuestion,
} from "../consts";
import { IFormData, Question } from "../types/EstimationForm.types";

export const notAnAdditionalQuestion = (question: string) => {
  return !additionalEstimationFormQuestion.find((item) => item === question);
};

export const showAdditionalQuestionsCheckbox = (
  question: Question,
  formData: IFormData,
  index: number
) => {
  if (
    notAnAdditionalQuestion(getTextFromHtml(question.title)) &&
    !formData.clientAnswers
      ?.find(
        (item) =>
          item.questionTitle === conditionsToAppearanceQuestion[index].question
      )
      ?.selectedOptions.some(
        (field) => field.text === conditionsToAppearanceQuestion[index].answer
      ) &&
    formData.clientAnswers.findIndex(
      (item) => item.questionTitle === additionalEstimationFormQuestion[index]
    ) > -1
  ) {
    formData.clientAnswers.splice(
      formData.clientAnswers.findIndex(
        (item) => item.questionTitle === additionalEstimationFormQuestion[index]
      ),
      1
    );
  }
};

export const showAdditionalQuestionsRadio = (
  question: Question,
  formData: IFormData,
  index: number
) => {
  if (
    notAnAdditionalQuestion(getTextFromHtml(question.title)) &&
    formData.clientAnswers?.find(
      (item) =>
        item.questionTitle === conditionsToAppearanceQuestion[index].question
    )?.selectedOptions[0].text !==
      conditionsToAppearanceQuestion[index].answer &&
    formData.clientAnswers.findIndex(
      (item) => item.questionTitle === additionalEstimationFormQuestion[index]
    ) > -1
  ) {
    formData.clientAnswers.splice(
      formData.clientAnswers.findIndex(
        (item) => item.questionTitle === additionalEstimationFormQuestion[index]
      ),
      1
    );
  }
};

export const conditionToShowQuestionsCheckbox = (
  question: Question,
  formData: IFormData,
  index: number
) =>
  !notAnAdditionalQuestion(getTextFromHtml(question.title)) &&
  additionalEstimationFormQuestion[index] === getTextFromHtml(question.title) &&
  formData.clientAnswers
    .find(
      (item) =>
        item.questionTitle === conditionsToAppearanceQuestion[index].question
    )
    ?.selectedOptions.some(
      (field) => field.text === conditionsToAppearanceQuestion[index].answer
    );

export const conditionToShowQuestionsRadio = (
  question: Question,
  formData: IFormData,
  index: number
) =>
  additionalEstimationFormQuestion[index] === getTextFromHtml(question.title) &&
  formData.clientAnswers[
    formData.clientAnswers.findIndex(
      (item) =>
        item.questionTitle.trim() ===
        conditionsToAppearanceQuestion[index].question
    )
  ]?.selectedOptions[0].text === conditionsToAppearanceQuestion[index].answer;
