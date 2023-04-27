import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  ICTAData,
  IPortfolioPageData,
  IPortfolioReview,
} from "../../types/Admin/AdminPortfolio.types";
import { ISwapData } from "../../types/Admin/Response.types";

export class AdminPortfolioService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPageData() {
    return this.httpService.get<IPortfolioPageData>("api/portfolio");
  }
  public getProjectData(id: string) {
    console.log(id);
    return this.httpService.get(`api/portfolio/${id}`);
  }
  public updatePageData(data: IPortfolioPageData) {
    return this.httpService.put("api/portfolio", data);
  }
  public getReviews() {
    return this.httpService.get<IPortfolioReview[]>("api/portfolio/review");
  }
  public getPaginatedReviews(page: number, limit: number) {
    return this.httpService.get<IPortfolioReview[]>(
      `api/portfolio/review/${page}/${limit}`
    );
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
  public updatePortfolioCTA(ctaData: ICTAData) {
    return this.httpService.put(`api/portfolio/cta`, ctaData);
  }
  public getPortfolioCTA() {
    return this.httpService.get<ICTAData>(`api/portfolio/cta`);
  }
}

const factory = new HttpServiceFactory();
export const adminPortfolioService = new AdminPortfolioService(
  factory.createAuthHttpService()
);
