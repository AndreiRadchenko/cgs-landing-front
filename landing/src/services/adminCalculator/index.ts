import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  ICalculator,
  ICalculatorStep,
  ICalculatorTieUpStep,
} from "../../types/Admin/Response.types";

export class AdminCalculatorService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCalculatorData() {
    return this.httpService.get<ICalculator>("api/calculator");
  }

  public updateCalculatorData(data: ICalculator) {
    return this.httpService.put("api/calculator", data);
  }

  public getCalculatorClassicSteps() {
    return this.httpService.get<ICalculatorStep[]>(
      "api/calculator/classic/step"
    );
  }

  public postCalculatorClassicStep(data: ICalculatorStep) {
    return this.httpService.post(`api/calculator/classic/step`, data);
  }

  public updateCalculatorClassicStepById(data: ICalculatorStep) {
    return this.httpService.put(
      `api/calculator/classic/step/${data._id}`,
      data
    );
  }

  public addClassicTieUp(data: ICalculatorTieUpStep) {
    return this.httpService.post(
      `api/calculator/classic/tieup/${data._id}`,
      data
    );
  }

  public updateCalculatorClassicTieUpStepById(data: ICalculatorTieUpStep) {
    return this.httpService.put(
      `api/calculator/classic/tieup /${data._id}`,
      data
    );
  }

  public deleteClassicTieUpById(id: string) {
    return this.httpService.delete(`api/calculator/classic/tieup/${id}`);
  }

  public getCalculatorBlockchainSteps() {
    return this.httpService.get<ICalculatorStep[]>(
      "api/calculator/blockchain/step"
    );
  }

  public postCalculatorBlockchainStep(data: ICalculatorStep) {
    return this.httpService.post(`api/calculator/blockchain/step`, data);
  }

  public updateCalculatorBlockchainStepById(data: ICalculatorStep) {
    return this.httpService.put(
      `api/calculator/blockchain/step/${data._id}`,
      data
    );
  }

  public addBlockchainTieUp(data: ICalculatorTieUpStep) {
    return this.httpService.post(
      `api/calculator/classic/tieup/${data._id}`,
      data
    );
  }

  public updateCalculatorBlockchainTieUpStepById(data: ICalculatorTieUpStep) {
    return this.httpService.put(
      `api/calculator/blockchain/tieup/${data._id}`,
      data
    );
  }
  public deleteBlockchainTieUpById(id: string) {
    return this.httpService.delete(`api/calculator/blockchain/tieup/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const adminCalculatorService = new AdminCalculatorService(
  factory.createAuthHttpService()
);
