import { IResponse } from "../../types/Admin";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { validTokenGlobal } from "../validToken";

export class AdminCareersService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCareersPage() {
    return this.httpService.get<IResponse>("api/career ");
  }
  public addTicket(id: string) {
    return this.httpService.post(`api/vacancy/${id}`, {});
  }
  public updateCareersPage(data: IDataCareersResponse) {
    return this.httpService.put("api/career ", data);
  }
}

const factory = new HttpServiceFactory();
export const adminCareersService = new AdminCareersService(
  factory.createAuthHttpService()
);
