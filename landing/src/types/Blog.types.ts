import { IArticle, IBlogPageResponse } from "./Admin/Response.types";

export interface IBlogPageData {
  data: IBlogPageResponse | undefined;
  isLoading: boolean;
}

export interface IArticlesData {
  reviews: IArticle[];
  currentPage: number;
  totalPages: number;
  tags: string[];
}

export interface IArticlesDataResponse {
  data?: IArticlesData;
  isLoading: boolean;
  isFetching: boolean;
}

export interface ISwiperArticlesData {
  reviews: IArticle[];
}

export interface ISwiperArticlesDataResponse {
  data?: ISwiperArticlesData;
  isLoading: boolean;
  isFetching: boolean;
}

export interface IMainBlogItem {
  article: IArticle;
  views?: number;
  filters?: string[];
  setIsMainSliderImageLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISmallArticleItem {
  article: IArticle;
  filters: string[];
}

export interface IPodcastItemProps {
  data: {
    subtitle: string;
    text: string;
    link: string;
  };
}

export interface IBlogItem {
  article: IArticle;
  views?: number;
  filters?: string[];
  loadedImagesCounter?: () => void;
  setIsTagsLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
}
