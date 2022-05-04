import { IImage } from "./Admin.types";
export interface IEditInformation {
  [title: string]: string;
  text: string;
  text2: string;
  button: string;
  image: any;
}

export interface ISubtitle {
  title: string;
  elements: { text: string; image: any }[];
  firstText2: string;
  text3: string;
  secondText2: string;
  image: any;
}

export interface ICard {
  subtitle: string;
  text: string;
  image: any;
}

export interface ICards {
  text4: string;
  button: string;
  cards: ICard[];
}

export interface IFeedback {
  name: string;
  companyName: string;
  role: string;
  text: string;
  stars: number;
}

export interface IFeedbackBlock {
  subtitle: string;
  text3: string;
  feedBacks: IFeedback[];
}

export interface ITech {
  subtitle1: string;
  text: string;
  image: any;
}

export interface ITechnologyBlock {
  subtitle: string;
  techs: ITech[];
}

export interface ICorporateBlock {
  blocks: { subtitle: string; text: string }[];
  images: IImage[];
}

export interface IHowBlock {
  subtitle: string;
  text: string;
  image: any;
}

export interface IHowWeWorkBlock {
  pageSignature: string;
  blocks: IHowBlock[];
}

export interface IBuildRocketBlock {
  [subtitle: string]: string;
  text: string;
  button: string;
}

export interface IContactFormBlock {
  [subtitle: string]: string;
  name: string;
  email: string;
  message: string;
}

export interface IFooterBlock {
  email: string;
  links: { link: string }[];
  images: IImage[];
}

// completed

export interface IDataResponse {
  MainLogoBlock: { image: { url: string } | null };
  EditInformationBlock: IEditInformation;
  SubtitleBlock: ISubtitle;
  LogosBlock: { images: any[] };
  CardsBlock: ICards;
  FeedbackBlock: IFeedbackBlock;
  TechnologyBlock: ITechnologyBlock;
  CorporateBlock: ICorporateBlock;
  HowWeWorkBlock: IHowWeWorkBlock;
  BuildRocketBlock: IBuildRocketBlock;
  ContactFormBlock: IContactFormBlock;
  FooterBlock: IFooterBlock;
}

// Careers

export interface ITicket {
  vacancy: string;
  image: { url: string };
  _id?: string;
}

export interface IForm {
  link: string;
  describe: string;
  email: string;
  name: string;
  telegram: string;
  socialMediaLink: string;
  linksToProjects: string;
  CV: { place: string; isSupported: string };
  text: string;
  image: { url: string };
}

export interface IDataCareersResponse {
  subtitle: string;
  subtitle2: string;
  tickets: ITicket[];
  images: { image: { url: string } }[];
  url?: string;
  vacancy?: string;
  form: IForm;
}
