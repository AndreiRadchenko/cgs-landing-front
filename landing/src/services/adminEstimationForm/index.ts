import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IEstimationFormData,
  IEstimationFormPages,
  IUpdatePageBody,
} from "../../types/Admin/AdminEstimationForm.types";
import { EstimationData, IFormData } from "../../types/EstimationForm.types";

export class AdminEstimationFormService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFormData() {
    return this.httpService.get<IEstimationFormData>(
      "api/poll-table/63c66653bbad659b3b2acae2"
    );
  }
  public getPageData(page: string): Promise<void | EstimationData> {
    return this.httpService.get<EstimationData>(
      `api/poll-table/estimation/form/${page}`
    );
  }

  public createEstimationData(formData: IFormData) {
    return this.httpService.post(`api/poll-table/submit`, formData);
  }

  public sendEstimationFormEmail(estimationEmail) {
    return this.httpService.post(
      `api/poll-table/upload-files`,
      estimationEmail
    );
  }

  public getPages() {
    return this.httpService.get<IEstimationFormPages>(
      `api/poll-table/estimation/form`
    );
  }
  public updatePageData(data: IUpdatePageBody) {
    return this.httpService.put(`api/poll-table/page`, data);
  }
}

const factory = new HttpServiceFactory();
export const adminEstimationFormService = new AdminEstimationFormService(
  factory.createAuthHttpService()
);
