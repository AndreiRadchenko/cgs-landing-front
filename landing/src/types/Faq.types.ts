import { FaqPageTypes } from "../consts";

export interface IQuestionDescription {
  type: FaqPageTypes.Description;
  text: string;
}

export interface IQuestionList {
  type: FaqPageTypes.List;
  title: string;
  elements: string[];
}

export type IQuestionContent = IQuestionDescription | IQuestionList;

export interface IQuestion {
  title: string;
  image?: string;
  content: IQuestionContent[];
}
