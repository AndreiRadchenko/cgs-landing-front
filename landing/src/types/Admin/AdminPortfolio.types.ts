import { IMetaBlock } from "./Response.types";

export interface IPortfolioReview {
  _id?: string;
  image: { url: string } | null;
  title: string;
  text: string;
  category: string;
  button: string;
  feedback: {
    name: string;
    rating: number;
    company: string;
    feedbackText: string;
  };
  bgColor: string;
}

export interface IPortfolioPageData {
  categories: string[];
  meta: IMetaBlock;
}

export interface IPortfolioResponse {
  data?: IPortfolioPageData;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioResponse>;
}

export interface IPortfolioReviewsResponse {
  data?: IPortfolioReview[];
  isLoading: boolean;
}

export interface IAddAndEditProps {
  current: number;
  isNewStatus: boolean;
  setIsNewStatus: (val: boolean) => void;
  reviews: IPortfolioReview[] | undefined | void;
}
