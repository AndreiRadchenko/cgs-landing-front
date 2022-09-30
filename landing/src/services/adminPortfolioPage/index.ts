import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IPortfolioPageData,
  IPortfolioReview,
} from "../../types/Admin/AdminPortfolio.types";
import { ISwapData } from "../../types/Admin/Response.types";

export class AdminPortfolioService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPageData() {
    return this.httpService.get<IPortfolioPageData>("api/portfolio");
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
  public deleteReview(id: string) {
    return this.httpService.delete(`api/portfolio/review/${id}`);
  }
  public swapReviews(swapData: ISwapData) {
    return this.httpService.put(`api/portfolio/swap`, swapData);
  }
}

const factory = new HttpServiceFactory();
export const adminPortfolioService = new AdminPortfolioService(
  factory.createAuthHttpService()
);
