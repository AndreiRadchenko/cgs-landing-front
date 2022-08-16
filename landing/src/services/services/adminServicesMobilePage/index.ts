import { HttpServiceFactory } from "../..";
import { IServiceMobile } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServicesMobileService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getMobileServicePage() {
    return this.httpService.get<IServiceMobile>("api/service/mobile");
  }

  public updateMobileServicePage(data: IServiceMobile) {
    return this.httpService.put("api/service/mobile", data);
  }
}

const factory = new HttpServiceFactory();
export const adminMobileService = new AdminServicesMobileService(
  factory.createAuthHttpService()
);
