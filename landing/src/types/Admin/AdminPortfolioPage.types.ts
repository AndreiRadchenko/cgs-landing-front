export interface IPortfolioReview {
  _id?: string;
  image: {
    url: string;
  };
  title: string;
  text: string;
  category: string;
  link: string;
  feedback: {
    name: string;
    rating: number;
    company: string;
    feedbackText: string;
  };
}

export interface IPortfolioData {
  categories: string[];
  subtitle: string;
  reviews: IPortfolioReview[];
}

export interface IPortfolioResponse {
  data?: IPortfolioData;
  isLoading: boolean;
  refetch: () => Promise<IPortfolioResponse>;
}
