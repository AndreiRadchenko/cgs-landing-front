import { IMetaBlock } from "./Response.types";

export interface IImageText {
  image: { url: string };
  text: string;
}

export interface IAboutText {
  title: string;
  description: string;
}

export interface IAbout {
  title: string;
  textBlock: {
    text1: IAboutText;
    text2: IAboutText;
    text3: IAboutText;
  };
  mainImage: IImageText;
  pinImages: {
    image1: IImageText;
    image2: IImageText;
    image3: IImageText;
  };
  bonuses: {
    subtitle: string;
    text: string[];
  };
  image: { url: string };
  meta: IMetaBlock;
}

export interface IAboutUsResponse {
  data: IAbout | undefined;
  isLoading: boolean;
  refetch: () => Promise<IAboutUsResponse>;
}
