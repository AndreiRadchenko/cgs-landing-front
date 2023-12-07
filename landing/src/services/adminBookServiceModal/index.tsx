import { IBookModalData } from "../../types/Mail.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminBookService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public mailForm(data: IBookModalData) {
    return this.httpService.post("api/calendly/book-call", data);
  }
  public autoReply(data: IBookModalData) {
    return this.httpService.post("api/calendly/auto-reply", data);
  }
  public createCalendlyPipedriveLead(
    name: string,
    email: string,
    phone: string
  ) {
    return this.httpService.post("api/calendly/pipedrive-calendly", {
      name,
      email,
      phone,
    });
  }
  public createCalendlyCallForPipeDriveLead() {
    return this.httpService.post("api/calendly/pipedrive-activity", {});
  }
}

const factory = new HttpServiceFactory();
export const adminBookService = new AdminBookService(
  factory.createAuthHttpService()
);
