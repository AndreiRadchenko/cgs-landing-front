import { HttpServiceFactory } from "../..";
import { IService } from "../../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../../httpAuth.service";

export class AdminServices {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAllServices() {
    return this.httpService.get<IService[]>("api/service/");
  }
}

const factory = new HttpServiceFactory();
export const adminServices = new AdminServices(factory.createAuthHttpService());
