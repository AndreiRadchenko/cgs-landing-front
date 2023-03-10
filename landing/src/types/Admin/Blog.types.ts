import { ReactNode, RefObject } from "react";
import { IArticle, ISitemapData, IView } from "./Response.types";

export interface IArticleForm {
  article: number;
  articles: IArticle[];
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  views: IView[];
  setArticle: (val: number) => void;
  sitemap?: ISitemapData | void;
  scrollHandler: () => void;
}

export interface IArticleAddAndEdit {
  article: number;
  isNewArticle: boolean;
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  possibleTags: string[];
  scrollHandler: () => void;
}

export interface IArticles {
  setIsNewArticle: (val: boolean) => void;
  setArticle: (val: number) => void;
  article: number;
  isNewArticle: boolean;
  data?: IArticle[];
  views?: IView[];
  disabled?: boolean;
  sitemap?: ISitemapData | void;
  scrollRef: RefObject<HTMLDivElement>;
}

export interface IArticleItem {
  item: IArticle;
  i: number;
}

export interface IBlogItemProps {
  item: IArticle;
  isAdmin?: boolean;
  children?: ReactNode;
}
