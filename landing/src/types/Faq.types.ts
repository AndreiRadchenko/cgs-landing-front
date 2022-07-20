import { FaqPageTypes } from "../consts";
import { IMetaBlock } from "./Admin/Response.types";

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
  id: string;
  question: string;
  image: { url: string } | null;
  text: string;
}

export interface IQuestionData {
  questions: IQuestion[];
  meta: IMetaBlock;
}
export interface IFaqData {
  questions: IQuestion[];
}
