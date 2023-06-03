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
