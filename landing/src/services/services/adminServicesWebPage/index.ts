import { HttpServiceFactory } from "../..";
import { IServiceWeb } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesWebService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getWebServicePage() {
    return this.httpService.get<IServiceWeb>("api/service/web");
  }

  public updateWebServicePage(data: IServiceWeb) {
    return this.httpService.put("api/service/web", data);
  }
}

const factory = new HttpServiceFactory();
export const adminWebService = new AdminServicesWebService(
  factory.createAuthHttpService()
);
