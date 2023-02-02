export interface Option {
  text: string;
  optionKey: string;
}

export interface Question {
  questionKey: string;
  title: string;
  isRequired: boolean;
  isSplitColumns: boolean;
  isAbilityToAttachFile: boolean;
  isHiddenText: boolean;
  hiddenText: string;
  optionsType: string;
  options: Option[];
  conditionsForAppearance?: any;
}

export interface Page {
  _id: string;
  pageNumber: string;
  pollTableId: string;
  title: string;
  buttonName: string;
  questions: Question[];
  __v: number;
}

export interface EstimationField {
  name: string;
  title: string;
  options: Option[];
}

export interface EstimationData {
  pageCount: number;
  pageNumber: number;
  page: Page;
}
