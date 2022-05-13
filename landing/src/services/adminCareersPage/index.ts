import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminCareersService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCareersPage() {
    return this.httpService.get<IDataCareersResponse>("api/career ");
  }
  public addVacancy(id: string) {
    return this.httpService.post(`api/vacancy/${id}`, {});
  }

  public deleteTicketAndVacancy(id: string) {
    return this.httpService.delete(`api/career/${id}`, {});
  }

  public updateCareersPage(data: IDataCareersResponse) {
    return this.httpService.put("api/career ", data);
  }
}

const factory = new HttpServiceFactory();
export const adminCareersService = new AdminCareersService(
  factory.createAuthHttpService()
);
