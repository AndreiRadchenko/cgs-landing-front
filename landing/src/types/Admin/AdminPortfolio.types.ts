import { IMetaBlock } from "./Response.types";
import { IImage } from "./Admin.types";
import { Dispatch, SetStateAction } from "react";

export interface ITechnology {
  _id?: string;
  name: string;
  image: {
    url: string;
  };
  main: boolean;
}

export interface IPortfolioReview {
  _id?: string;
  imageBanner: IImage;
  image: {
    url: string;
  };
  imageProjectBanner: IImage;
  NDA: boolean;
  flag: string;
  country: string;
  projectDuration: string;
  projectTeam: string;
  title: string;
  industry: string;
  technologies: ITechnology[];
  text: string;
  category: string;
  button: string;
  feedback: {
    name: string;
    position: string;
    feedbackText: string;
  };
  technologyNew: {
    name: string;
    image: {
      url: string;
    };
    main: boolean;
  };
}

export interface IPortfolioPageData {
  categories: string[];
  industries: string[];
  technologies: ITechnology[];
  meta: IMetaBlock;
  cta: ICTAData;
  SubtitleBlock: { title: string };
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
  setIsNewStatus: Dispatch<SetStateAction<boolean>>;
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

export interface IPortfolioTitleProps {
  initValues: IPortfolioTitle;
}
export interface IPortfolioTitle {
  title: string;
}
