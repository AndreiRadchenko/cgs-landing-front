import { Dispatch, SetStateAction } from "react";
import { IFormFileData } from "../EstimationForm.types";

export interface IRateCard {
  services: IService[];
  title: string;
}

export interface IService {
  name: string;
  levels: ILevel[];
}

export interface ILevel {
  name: string;
  technology: string;
  cost: string;
}

export interface IRateCardResponse {
  data?: IRateCard;
  isLoading?: boolean;
  refetch?: () => Promise<IRateCardResponse>;
}

export interface IRateCardServiceProps {
  services: IService[];
  setServices: Dispatch<SetStateAction<IService[] | null>>;
}

export interface IRateCardLevelProps {
  level: ILevel;
  idx: number;
}
