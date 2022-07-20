import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminAboutUsPage {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getAboutUsPage() {
    return this.httpService.get("api/about");
  }
  // public updateAboutUsPage(data) {
  //   return this.httpService.put("api/about", data);
  // }
}

const factory = new HttpServiceFactory();
export const adminAboutUsService = new AdminAboutUsPage(
  factory.createAuthHttpService()
);
