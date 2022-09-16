import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IPortfolioData } from "../../types/Admin/AdminPortfolioPage.types";
import { IMetaBlock } from "../../types/Admin/Response.types";
import { IImage } from "../../types/Admin/Admin.types";

interface IReviewProps {
  bgColor: string;
  button: string;
  category: string;
  feedback: {
    name: string;
    rating: number | null;
    company: string;
    feedbackText: string;
  };
  image: IImage;
  text: string;
  title: string;
}

interface IPortfolioProps {
  categories: string[];
  meta: IMetaBlock;
  reviews: IReviewProps[];
}

export class AdminPortfolioPageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPortfolio() {
    return this.httpService.get<IPortfolioProps>("api/portfolioPage");
  }
  public updatePortfolio(data: IPortfolioData) {
    return this.httpService.put("api/portfolioPage", data);
  }
}

const factory = new HttpServiceFactory();
export const adminPortfolioPageService = new AdminPortfolioPageService(
  factory.createAuthHttpService()
);
