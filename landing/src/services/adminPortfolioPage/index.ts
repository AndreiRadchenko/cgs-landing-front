import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IPortfolioData } from "../../types/Admin/AdminPortfolioPage.types";

export class AdminPortfolioPageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getPortfolio() {
    return this.httpService.get("api/portfolioPage");
  }
  public updatePortfolio(data: IPortfolioData) {
    return this.httpService.put("api/portfolioPage", data);
  }
}

const factory = new HttpServiceFactory();
export const adminPortfolioPageService = new AdminPortfolioPageService(
  factory.createAuthHttpService()
);
