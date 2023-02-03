import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  IEstimationFormData,
  IEstimationFormPage,
  IEstimationFormPages,
  IUpdatePageBody,
} from "../../types/Admin/AdminEstimationForm.types";
import { EstimationData } from "../../types/EstimationForm.types";

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
