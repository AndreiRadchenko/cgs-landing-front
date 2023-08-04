import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

import { ICvPageData, CvData } from "../../types/Admin/AdminCv.types";

export class AdminCvService {
    constructor(private httpService: EnhancedWithAuthHttpService) {}
    public getCvPage() {
      return this.httpService.get<ICvPageData>("api/devs-info");
    }
  
    public updateCvPage(data: ICvPageData) {
      return this.httpService.put("api/devs-info", data);
    }

    public getCv() {
      return this.httpService.get<CvData[]>("api/devs-info/cv");
    }

    public postCv(cv: CvData) {
      return this.httpService.post(`api/devs-info-cv/article`, cv);
    }
  }
  
  const factory = new HttpServiceFactory();
  export const adminCvService = new AdminCvService(
    factory.createAuthHttpService()
  );
  