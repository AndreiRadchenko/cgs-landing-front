import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IFaqData, IFaqResponse } from "../../types/Admin/AdminFaq.types";

export class AdminCareersService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFaqPage() {
    return this.httpService.get<IFaqResponse>("api/faq");
  }

  public updateFaqPage(data: IFaqData) {
    return this.httpService.put("api/faq", data);
  }
}

const factory = new HttpServiceFactory();
export const adminFaqService = new AdminCareersService(
  factory.createAuthHttpService()
);
