import React, { Dispatch, SetStateAction } from "react";

import { IArticle, IAuthor, IBlogPageResponse } from "./Admin/Response.types";

export interface IBlogPageData {
  data: IBlogPageResponse | undefined;
  isLoading: boolean;
  isSuccess: boolean;
  isFetching: boolean;
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

export interface IArticleData {
  data: IArticle[] | undefined;
  isLoading: boolean;
  isSuccess: boolean;
}

export interface ISwiperArticlesDataResponse {
  data?: ISwiperArticlesData;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
}

export interface IMainBlogItem {
  article: IArticle;
  filters?: string[];
  setIsMainSliderImageLoaded?: Dispatch<SetStateAction<boolean>>;
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
  filters?: string[];
  loadedImagesCounter?: () => void;
  setIsTagLoaded?: Dispatch<SetStateAction<boolean>>;
}

export interface IArticleAuthor {
  author: IAuthor;
  date: string;
  update: string;
  time: number;
  views?: number;
}

export interface IArticleReadMore {
  readMore: IArticle[];
}

export interface IArticleReadMoreProps {
  article: IArticle;
}

export interface IArticleTags {
  tags: string[];
}

export interface ISliderProps {
  children?: React.ReactNode;
  slides?: IArticle[];
}

export interface IBlogTags {
  isNewTicket: boolean;
  ticket: number;
  infoIndex: number;
  setInfo: Dispatch<SetStateAction<number>>;
  info: number;
}

export interface IArticleReadItemMore {
  article: IArticle;
}
