import { IDeleteImageData } from "./../../types/Admin/Admin.types";
import { IResponse } from "../../types/Admin";
import { IDataVacancyResponse } from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminHCareersPageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFullPage(id?: string) {
    return this.httpService.get<IResponse>(`api/vacancy/${id ? id : ""}`);
  }
  public updateFullPage(data: IDataVacancyResponse) {
    return this.httpService.put("api/vacancy", data);
  }
  public uploadImage(data: any): Promise<{ url: string } | void> {
    return this.httpService.post("api/upload", data);
  }
  public deleteImage(data: IDeleteImageData) {
    return this.httpService.delete("api/upload", data);
  }
}

const factory = new HttpServiceFactory();
export const adminGlobalService = new AdminHCareersPageService(
  factory.createAuthHttpService()
);
