import { IMetaBlock } from "./Response.types";

export interface IPortfolioReview {
  _id?: string;
  image: { url: string } | null;
  title: string;
  industry: string;
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
  data?: {
    reviews: IPortfolioReview[];
    currentPage: number;
    totalPages: number;
  };
  isLoading: boolean;
}

export interface IAddAndEditProps {
  current: number;
  isNewStatus: boolean;
  setIsNewStatus: React.Dispatch<React.SetStateAction<boolean>>;
  reviews: IPortfolioReview[] | undefined | void;
}
