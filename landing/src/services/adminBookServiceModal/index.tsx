import { IBookModalData } from "../../types/Mail.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminBookService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public mailForm(data: IBookModalData) {
    return this.httpService.post("api/calendly/book-call", data);
  }
}

const factory = new HttpServiceFactory();
export const adminBookService = new AdminBookService(
  factory.createAuthHttpService()
);
