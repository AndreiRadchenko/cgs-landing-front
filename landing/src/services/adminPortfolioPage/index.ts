import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IPortfolioPageData,
  IPortfolioReview,
} from "../../types/Admin/AdminPortfolio.types";

export class AdminPortfolioService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPageData() {
    return this.httpService.get("api/portfolio");
  }
  public updatePageData(data: IPortfolioPageData) {
    return this.httpService.put("api/portfolio", data);
  }
  public getReviews() {
    return this.httpService.get<IPortfolioReview[]>("api/portfolio/review");
  }
  public getByCategory(category: string) {
    return this.httpService.get(`api/portfolio/review/${category}`);
  }
  public addReview(review: IPortfolioReview) {
    return this.httpService.post(`api/portfolio/review`, review);
  }
  public updateReview(review: IPortfolioReview) {
    return this.httpService.put(`api/portfolio/review/${review._id}`, review);
  }
  public deleteReview(title: string) {
    return this.httpService.delete(`api/portfolio/review/${title}`);
  }
}

const factory = new HttpServiceFactory();
export const adminPortfolioService = new AdminPortfolioService(
  factory.createAuthHttpService()
);
