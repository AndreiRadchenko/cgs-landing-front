import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

import { ICvPageData, CvData } from "../../types/Admin/AdminCv.types";
import { ISwapData } from "../../types/Admin/Response.types";

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

    public getCvById(id: string) {
      return this.httpService.get<CvData[]>(`api/devs-info/cv/${id}`);
    }

    public postCv(cv: CvData) {
      return this.httpService.post(`api/devs-info/cv`, cv);
    }

    public updateById(updatedCv: CvData) {
      return this.httpService.put(
        `api/devs-info/cv/${updatedCv._id}`,
        updatedCv
      );
    }

    public deleteById(id: string) {
      return this.httpService.delete(`api/devs-info/cv/${id}`);
    }

    public swapCvs(swapData: ISwapData) {
      return this.httpService.put(`api/devs-info/swap`, swapData);
    }
  }
  
  const factory = new HttpServiceFactory();
  export const adminCvService = new AdminCvService(
    factory.createAuthHttpService()
  );
  