import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { IRateCard } from "../../types/Admin/AdminRateCard.types";

export class AdminRateCardService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}

  public getCards() {
    return this.httpService.get<IRateCard>(`api/rate-card`);
  }
}

const factory = new HttpServiceFactory();
export const adminRateCardService = new AdminRateCardService(
  factory.createAuthHttpService()
);
