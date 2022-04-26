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
}

const factory = new HttpServiceFactory();
export const adminGlobalService = new AdminHomePageService(
  factory.createAuthHttpService()
);
