import { IArticle, IBlogPageResponse } from "./Admin/Response.types";

export interface IBlogPageData {
  data: IBlogPageResponse | undefined;
  isLoading: boolean;
}

export interface IArticlesData {
  data: IArticle[] | undefined;
  isLoading: boolean;
}

export interface IArticleData {
  data: IArticle[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface IMainBlogItem {
  article: IArticle;
  views?: number;
  filters?: string[];
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
}
