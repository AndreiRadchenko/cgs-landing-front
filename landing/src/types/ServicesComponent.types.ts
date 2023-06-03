import { IImage } from "./Admin/Admin.types";

export interface IOtherService {
  imageColor: IImage;
  imageGrayscale: IImage;
  link: string;
}

export interface IOtherServicesComponent {
  title: string;
  text: string;
  services: IOtherService[];
}

export interface IFreeService {
  subtitle: string;
  text: string;
}

export interface IfreeServicesComponent {
  title: string;
  services: IFreeService[];
}
