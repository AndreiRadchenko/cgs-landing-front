import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IFaqData } from "../../types/Admin/AdminFaq.types";
import { IQuestionData } from "../../types/Faq.types";

export class AdminCareersService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getFaqPage() {
    return this.httpService.get<IQuestionData>("api/faq");
  }

  public updateFaqPage(data: IFaqData) {
    return this.httpService.put("api/faq", data);
  }
}

const factory = new HttpServiceFactory();
export const adminFaqService = new AdminCareersService(
  factory.createAuthHttpService()
);
