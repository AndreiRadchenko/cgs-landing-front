export interface IEstimationFormPage {
  _id: string;
  pageNumber: string;
  title: string;
  buttonName: string;
  questions: IEstimationFormQuestion[];
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

export interface IConditionsForAppearance {
  pageNumber: number;
  questionNumber: number;
  acceptedOptions: string[];
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
  optionsType: string;
  options: IEstimationFormQuestionOptions[];
  conditionsForAppearance: IConditionsForAppearance | null;
}

export interface IQuestionBlockProps {
  question: IEstimationFormQuestion;
  name: string;
}

export interface IButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  handleClick: () => void;
}
