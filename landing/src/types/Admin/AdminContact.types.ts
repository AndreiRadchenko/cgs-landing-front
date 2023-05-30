import { IMetaBlock } from "./Response.types";
import { IImage } from "./Admin.types";

export interface IEmail {
  popup: string;
  email: string;
}

export interface IMessenger extends IImage {
  name: string;
  link: string;
}

export interface ISocial extends IImage {
  link: string;
}

export interface IAbout extends IImage {
  link: string;
}

export interface IContactPageData {
  header: {
    title: string;
    placeholders: {
      name: string;
      email: string;
      service: string;
    };
    button: {
      name: string;
      calendly: string;
    };
  };
  emails: {
    subtitle: string;
    email: IEmail[];
  };
  messengers: {
    subtitle: string;
    messenger: IMessenger[];
  };
  socials: {
    subtitle: string;
    social: ISocial[];
  };
  abouts: {
    subtitle: string;
    about: IAbout[];
  };
  location: {
    map: IImage;
    pointer: IImage;
    address: string;
  };
  meta: IMetaBlock;
}

export interface IContactResponse {
  data: IContactPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<IContactResponse>;
}
