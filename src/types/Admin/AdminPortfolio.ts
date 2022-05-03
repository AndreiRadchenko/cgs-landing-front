export interface IPortfolioReview {
  category: string;
  image: { url: string } | null;
  text: string;
  title: string;
  _id?: string;
}

export interface IPortfolioResponse {
  subtitle: string;
  categories: string[];
  reviews: IPortfolioReview[];
}
