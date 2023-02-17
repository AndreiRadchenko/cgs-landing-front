import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";
import {
  ICalculator,
  ICalculatorPostEmailResultsProps,
  ICalculatorPostLeadEmailResultsProps,
  ICalculatorStep,
  ICalculatorSubStep,
  ICalculatorTieUpStep,
} from "../../types/Admin/Response.types";
import { ICalculatorType } from "../../components/Admin/Calculator/CalculatorTypeInput";

export class AdminCalculatorService {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getCalculatorData() {
    return this.httpService.get<ICalculator>("api/calculator");
  }

  public updateCalculatorData(data: ICalculator) {
    return this.httpService.put("api/calculator", data);
  }

  public addCalculatorType(data: ICalculatorType) {
    return this.httpService.post("api/calculator/type", data);
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

  public addClassicSubStep(data: ICalculatorSubStep) {
    return this.httpService.post(
      `api/calculator/classic/sub/${data._id}`,
      data
    );
  }

  public updateCalculatorClassicSubStepById(
    itemId: string,
    data: ICalculatorSubStep
  ) {
    return this.httpService.put(`api/calculator/classic/sub/${itemId}`, data);
  }

  public sendResultsEmail(
    answers: ICalculatorPostEmailResultsProps
  ): Promise<void> {
    return this.httpService.post("api/calculator/mail", answers);
  }
  public sendResultsLeadEmail(
    answers: ICalculatorPostLeadEmailResultsProps
  ): Promise<void> {
    return this.httpService.post("api/calculator/lead-mail", answers);
  }

  public deleteClassicSubStepById(id: string) {
    return this.httpService.delete(`api/calculator/classic/sub/${id}`);
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

  public addBlockchainSubStep(data: ICalculatorSubStep) {
    return this.httpService.post(
      `api/calculator/classic/sub/${data._id}`,
      data
    );
  }

  public updateCalculatorBlockchainSubStepById(
    itemId: string,
    data: ICalculatorSubStep
  ) {
    return this.httpService.put(
      `api/calculator/blockchain/sub/${itemId}`,
      data
    );
  }
  public deleteBlockchainSubStepById(id: string) {
    return this.httpService.delete(`api/calculator/blockchain/sub/${id}`);
  }
}

const factory = new HttpServiceFactory();
export const adminCalculatorService = new AdminCalculatorService(
  factory.createAuthHttpService()
);
