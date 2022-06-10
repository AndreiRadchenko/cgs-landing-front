import { IPortfolioResponse } from "../../types/Admin/AdminPortfolio";
import { IResponse } from "../../types/Admin";
import { IDataResponse } from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminHomePageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFullPage() {
    return this.httpService.get<IResponse>("api/form");
  }
  public updateFullPage(data: IDataResponse) {
    return this.httpService.put("api/form", data);
  }
  public uploadImage(data: any): Promise<{ url: string } | void> {
    return this.httpService.post("api/upload", data);
  }
  public deleteImage(url: string) {
    return this.httpService.delete("api/upload", { data: { url } });
  }
  public getPortfolio() {
    return this.httpService.get("api/portfolio");
  }
  public updatePortfolio(data: IPortfolioResponse) {
    return this.httpService.put("api/portfolio", data);
  }
}

const factory = new HttpServiceFactory();
export const adminGlobalService = new AdminHomePageService(
  factory.createAuthHttpService()
);
