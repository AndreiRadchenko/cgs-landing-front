import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import { ICalculator, ICalculatorStep } from "../../types/Admin/Response.types";

export class AdminCalculatorService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCalculatorData() {
    return this.httpService.get<ICalculator>("api/calculator");
  }

  public updateCalculatorData(data: ICalculator) {
    return this.httpService.put("api/calculator", data);
  }

  public getCalculatorSteps() {
    return this.httpService.get<ICalculatorStep[]>("api/calculator/step");
  }

  public postCalculatorStep(data: ICalculatorStep) {
    return this.httpService.put(`api/calculator/step`, data);
  }

  public updateCalculatorSteps(data: ICalculatorStep) {
    return this.httpService.put(`api/calculator/step/${data._id}`, data);
  }
}

const factory = new HttpServiceFactory();
export const adminCalculatorService = new AdminCalculatorService(
  factory.createAuthHttpService()
);
