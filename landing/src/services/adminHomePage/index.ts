import { IResponse } from "../../types/Admin";
import { IDataResponse } from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IClientMail } from "../../types/Mail.types";

export class AdminHomePageService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFullPage() {
    return this.httpService.get<IResponse>("api/form");
  }
  public updateFullPage(data: IDataResponse) {
    return this.httpService.put("api/form", data);
  }
  public uploadImage(data: any): Promise<{ url: string } | void> {
    return this.httpService.post("api/upload", data);
  }
  public deleteImage(url: string) {
    return this.httpService.delete("api/upload", { data: { url } });
  }
  public mailForm(data: IClientMail) {
    return this.httpService.post("api/form/mail", data);
  }
}

const factory = new HttpServiceFactory();
export const adminGlobalService = new AdminHomePageService(
  factory.createAuthHttpService()
);
