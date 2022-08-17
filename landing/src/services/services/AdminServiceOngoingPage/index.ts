import { HttpServiceFactory } from "../..";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";
import { IOngoingSupport } from "../../../types/Admin/Response.types";

class AdminServiceOngoingSupport {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getOngoingServicePage() {
    return this.httpService.get<IOngoingSupport>("api/service/support");
  }
  public updateOngoingServicePage(data: IOngoingSupport) {
    return this.httpService.put("api/service/support", data);
  }
}

const factory = new HttpServiceFactory();

const adminOngoingService = new AdminServiceOngoingSupport(
  factory.createAuthHttpService()
);

export { adminOngoingService, AdminServiceOngoingSupport };
