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

export interface IPaginationProps {
  reviewsData: IPortfolioReviewsDataResponse | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface IPortfolioReviewsDataResponse {
  reviews: IPortfolioReview[];
  currentPage: number;
  totalPages: number;
}

export interface IPortfolioReviewsResponse {
  data?: IPortfolioReviewsDataResponse;
  isLoading: boolean;
}

export interface IPortfolioProjectResponse {
  data?: IPortfolioReview;
  isLoading: boolean;
}

export interface IAddAndEditProps {
  current: number;
  isNewStatus: boolean;
  setIsNewStatus: React.Dispatch<React.SetStateAction<boolean>>;
  reviews: IPortfolioReview[] | undefined | void;
}

export interface IPortfolioCTAResponse {
  data?: {
    _id: string;
    cta: ICTAData;
  };
  isLoading: boolean;
  refetch: () => Promise<IPortfolioCTAResponse>;
}

export interface ICallToActionProps {
  initValues: ICTAData;
}
export interface ICTAData {
  image: {
    url: string;
  } | null;
  subtitle: string;
  text: string;
  button: string;
  buttonLink: string;
}
