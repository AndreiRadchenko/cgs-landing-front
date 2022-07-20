import { IMetaBlock } from "./Response.types";

export interface IFaqResponse {
  data: IFaqData | undefined;
  isLoading: boolean;
  refetch: () => Promise<IFaqResponse>;
}

export interface IQuestion {
  id: string;
  question: string;
  text: string;
  image: { url: string } | null;
}

export interface IFaqData {
  meta: IMetaBlock;
  questions: IQuestion[];
}
