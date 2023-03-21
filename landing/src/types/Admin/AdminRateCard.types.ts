export interface IRateCard {
  services: Service[];
  title: string;
}

export interface Service {
  name: string;
  levels: Level[];
}

export interface Level {
  name: string;
  technology: string;
  cost: string;
}

export interface IRateCardResponse {
  data?: IRateCard;
  isLoading?: boolean;
  refetch?: () => Promise<IRateCardResponse>;
}
