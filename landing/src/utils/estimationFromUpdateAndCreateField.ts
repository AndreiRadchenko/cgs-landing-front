import { IFormData } from "../types/EstimationForm.types";
import { ChangeEvent } from "react";
import { parseHtml } from "./parseHtml";

export const updateField = (
  prevState: IFormData,
  indexOfAnswer: number,
  e: ChangeEvent<HTMLInputElement>
) => {
  return prevState.clientAnswers.map((clientAnswer, index) => {
    return index === indexOfAnswer
      ? {
          ...clientAnswer,
          selectedOptions: [{ text: e.target.value }],
        }
      : clientAnswer;
  });
};

export const createField = (
  prevState: IFormData,
  indexOfAnswer: number,
  e: ChangeEvent<HTMLInputElement>,
  title: string,
  questionKey: string,
  currentPage: number
) => {
  return [
    ...prevState.clientAnswers,
    {
      questionTitle: parseHtml(title),
      questionKey: questionKey,
      pageIndex: currentPage as number,
      selectedOptions: [{ text: e.target.value }],
    },
  ];
};
