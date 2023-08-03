import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { ICvPageData } from "../../types/Admin/AdminCv.types";

export class AdminCvService {
    constructor(private httpService: EnhancedWithAuthHttpService) {}
    public getCvPage() {
      return this.httpService.get<ICvPageData>("api/cv");
    }
  
    public updateCvPage(data: ICvPageData) {
      return this.httpService.put("api/cv", data);
    }
  }
  
  const factory = new HttpServiceFactory();
  export const adminCvService = new AdminCvService(
    factory.createAuthHttpService()
  );
  