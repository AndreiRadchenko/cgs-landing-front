export interface IEstimationFormPage {
  _id: string;
  pageNumber: string;
  title: string;
  buttonName: string;
  questions: IEstimationFormQuestion[];
}

export interface IUpdatePageBody {
  pageId: string;
  data: {
    _id?: string;
    pageNumber: string;
    title: string;
    buttonName: string;
    questions: IEstimationFormQuestion[];
  };
}

export interface IEstimationFormPages {
  _id: string;
  formName: string;
  pages: IEstimationFormPage[];
}
export interface IEstimationFormData {
  formName: string;
  pages: string[];
}

export interface IEstimationFormData {
  formName: string;
  pages: string[];
}

export interface IEstimationFormDataResponse {
  data?: IEstimationFormData;
  isLoading?: boolean;
  refetch?: () => Promise<IEstimationFormDataResponse>;
}

export interface IEstimationFormPageResponse {
  data?: IEstimationFormPage;
  isLoading?: boolean;
  refetch?: () => Promise<IEstimationFormPageResponse>;
}

export interface IEstimationFormPagesResponse {
  data?: IEstimationFormPages;
  isLoading?: boolean;
  refetch?: () => Promise<IEstimationFormPagesResponse>;
}

export interface IConditionsForAppearance {
  pageId: string;
  questionKey: string;
  pageIndex: number;
  questionIndex: number;
  acceptedOptions: { text: string; isSelected: boolean }[];
}

export interface IEstimationFormQuestionOptions {
  text: string;
}

export interface IEstimationFormQuestion {
  _id?: string;
  questionNumber: number;
  title: string;
  isRequired: boolean;
  isSplitColumns: boolean;
  isAbilityToAttachFile: boolean;
  hiddenText: string | null;
  isHiddenText: boolean;
  optionsType: CheckBoxType;
  questionKey?: string;
  options: IEstimationFormQuestionOptions[];
  conditionsForAppearance: IConditionsForAppearance | null;
}
export type CheckBoxType = "RADIO_BUTTON" | "CHECKBOX" | "TEXT";

export interface IQuestionBlockProps {
  question: IEstimationFormQuestion;
  name: string;
  index: number;
  onRemoveHandler: (index: number) => void;
  saveQuestion: (obj: IEstimationFormQuestion, index: number) => void;
  pages: IEstimationFormPages;
  currentPage: number;
}

export interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  handleClick: () => void;
}

export interface IMenuOption {
  title: string;
  id: string;
  index: number;
}
