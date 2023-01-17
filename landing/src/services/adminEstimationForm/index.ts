import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IEstimationFormData,
  IEstimationFormPage,
} from "../../types/Admin/AdminEstimationForm.types";

export class AdminEstimationFormService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFormData() {
    return this.httpService.get<IEstimationFormData>(
      "api/poll-table/63c66653bbad659b3b2acae2"
    );
  }
  public getPageData(id: string) {
    console.log(id);
    return this.httpService.get<IEstimationFormPage>(
      `api/poll-table/page/${id}`
    );
  }
  public updatePageData(id: string, data: IEstimationFormPage) {
    return this.httpService.put(`api/poll-table/page/${id}`, data);
  }
  // public deleteOption(id: string) {
  //   return this.httpService.delete(`api/estimation-form${id}`);
  // }
}

const factory = new HttpServiceFactory();
export const adminEstimationFormService = new AdminEstimationFormService(
  factory.createAuthHttpService()
);
