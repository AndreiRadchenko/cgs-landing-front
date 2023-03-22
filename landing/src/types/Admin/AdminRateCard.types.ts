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
