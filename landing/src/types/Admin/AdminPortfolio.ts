export interface IPortfolioReview {
  category: string;
  image: { url: string } | null;
  text: string;
  link: string;
  title: string;
  _id?: string;
  button: string;
}

export interface IPortfolioResponse {
  subtitle: string;
  categories: string[];
  reviews: IPortfolioReview[];
}
