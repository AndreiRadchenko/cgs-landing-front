import { IImage } from './Admin.types';

export interface IPortfolioReview {
  category: string;
  image: IImage;
  text: string;
  title: string;
  _id: string;
}

export interface IPortfolioResponse {
  subtitle: string;
  categories: string[];
  reviews: IPortfolioReview[];
}