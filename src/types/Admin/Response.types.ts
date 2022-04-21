export interface IEditInformation {
  title: string;
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
  number?: number;
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
  feedbacks: IFeedback[];
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
  subtitle1: string;
  text1: string;
  subtitle2: string;
  text2: string;
  images: any[];
}

export interface IHowBlock {
  subtitle: string;
  text: string;
  image: any | any[];
}

export interface IHowWeWorkBlock {
  pageSignature: string;
  blocks: IHowBlock[];
}

export interface IBuildRocketBlock {
  subtitle: string;
  text: string;
  button: string;
}

export interface IContactFormBlock {
  subtitle: string;
}

export interface IFooterBlock {
  Email: string;
  links: string[];
  images: any[];
}

// completed

export interface IDataResponse {
  EditInformationBlock: IEditInformation;
  SubtitleBlock: ISubtitle;
  LogosBlock: any[];
  CardsBlock: ICards;
  FeedbackBlock: IFeedbackBlock;
  TechnologyBlock: ITechnologyBlock;
  CorporateBlock: ICorporateBlock;
  HowWeWorkBlock: IHowWeWorkBlock;
  BuildRocketBlock: IBuildRocketBlock;
  ContactFormBlock: IContactFormBlock;
  FooterBlock: IFooterBlock;
}
