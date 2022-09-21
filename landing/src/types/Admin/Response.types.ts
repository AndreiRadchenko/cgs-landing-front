import { IImage } from "./Admin.types";
export interface IEditInformation {
  title: string;
  button: string;
  buttonLink: string;
  image: { url: string } | null;
}

export interface ISubtitle {
  title: string;
}

export interface ICard {
  subtitle: string;
  text: string;
}

export interface ICards {
  card1: ICard[];
  card2: ICard[];
  card3: ICard[];
  card4: ICard[];
}

export interface IFeedback {
  name: string;
  companyName: string;
  text: string;
  link: string;
  stars: number;
}

export interface IFeedbackBlock {
  subtitle: string;
  text3: string;
  feedBacks: IFeedback[];
}

export interface ITech {
  category: string;
  text: string;
  image: { url: string } | null;
  stack: string[];
}

export interface ITechnologyBlock {
  item1: ITech;
  item2: ITech;
  item3: ITech;
  item4: ITech;
}

export interface IFooterBlock {
  email: string;
  links: { link: string }[];
  images: IImage[];
}

export interface IMetaBlock {
  metaTitle: string;
  metaDescription: string;
  customHead: string;
}

// completed

export interface IButtonWithLinkBlock {
  button: string;
  buttonLink: string;
}

export interface IDataResponse {
  MainLogoBlock: { image: { url: string } | null };
  EditInformationBlock: IEditInformation;
  SubtitleBlock: ISubtitle;
  SeeAllBlock: IButtonWithLinkBlock;
  FilmBlock: { textOnFilm: string };
  LogosBlock: {
    images: { url: string }[];
  };
  CardsBlock: ICards;
  FeedbackBlock: IFeedbackBlock;
  TechnologyBlock: ITechnologyBlock;
  BookCallBlock: IButtonWithLinkBlock;
  FooterBlock: IFooterBlock;
  meta: IMetaBlock;
}

// Careers

export interface IInfo {
  heading: string;
  values: string[];
}

export interface ITicket {
  id?: string;
  vacancy: string;
  position: string;
  image?: { url: string };
  _id?: string;
  stack: string[];
  stars: number;
  info: IInfo[];
}

export interface IForm {
  link: string;
  describe: string;
  email: string;
  name: string;
  telegram: string;
  socialMediaLink: string;
  linksToProjects: string;
  text: string;
  CV: {
    isSupported: string;
    place: string;
  };
  image: {
    url: string;
  };
}

export interface IDataCareersResponse {
  subtitle: string;
  subtitle2: string;
  tickets: ITicket[];
  images: { image: { url: string } }[];
  url?: string;
  vacancy: ITicket;
  form: IFormBlock;
  meta: IMetaBlock;
}

export interface IVacancies {
  tickets: ITicket[];
  vacancy?: ITicket;
}

export interface IPointsData {
  point: string;
  _id: string;
}

export interface IWorkerData {
  image: { url: string };
  title: string;
}

export interface IInfoBlock {
  id: string;
  text: { title: string; subtitle: string };
  points: IPointsData[];
  text2: { title: string };
  worker: IWorkerData;
}

export interface IOfferBlock {
  title: string;
  points: IPointsData[];
  text: { title: string };
  image: { url: string };
}

export interface IFormBlock {
  position: string;
  contact: string;
  name: string;
  CV: {
    place: string;
    isSupported: string;
  };
  text: string;
  image: {
    url: string;
  };
}

export interface IContactBlock {
  title: string;
  form: IFormBlock;
}

export interface IDataVacancyResponse {
  info: IInfoBlock[];
  offer: IOfferBlock;
  contact: IContactBlock;
  meta: IMetaBlock;
}

export interface IBlockchainProjectBlock {
  name: string;
  text: string;
  image: {
    url: string;
  } | null;
}

export interface IDataBlockchainResponse {
  projects: IBlockchainProjectBlock[];
  newProject: IBlockchainProjectBlock;
  LogosBlock: { images: { url: string }[] };
}

export interface IAuthor {
  name: string;
  specialization: string;
  image: { url: string };
}

export interface ITextBlog {
  tagName?: string;
  text?: string;
  subNumber?: string;
  subtitle?: string;
}

export interface IArticle {
  _id: string;
  url: string;
  image: { url: string };
  title: string;
  description: string;
  author: IAuthor;
  scheduleArticle: string;
  updatedOn: string;
  date: string;
  minutesToRead: number;
  content: ITextBlog[];
  tags: string[];
  disabled: boolean;
  meta: IMetaBlock;
}

export interface IArticleWithInd {
  article: IArticle;
  ind: number;
}

export interface ISwapData {
  desIndex: number;
  srcIndex: number;
}

export interface INewArticle {
  _id: string;
  url: string;
  image: { url: string };
  title: string;
  description: string;
  author: IAuthor;
  updatedOn: string;
  scheduleArticle: string;
  date: string;
  minutesToRead: number;
  content: ITextBlog[];
  tags: string[];
  possibleTags: string[];
  disabled: boolean;
  meta: IMetaBlock;
}

export interface IBlogResponse {
  articles: IArticle[];
  newArticle: INewArticle;
  meta: IMetaBlock;
}
export interface IView {
  views: number;
  articleUrl: string;
}

export interface IViews {
  allViews: IView[];
}

export interface IHomeData {
  data: IDataCareersResponse | undefined;
  isLoading: boolean;
}

export interface IAboutUsResponse {
  data: IAbout | undefined;
  isLoading: boolean;
  refetch: () => Promise<IAboutUsResponse>;
}

export interface IAboutText {
  subtitle: string;
  text: string;
  image: { url: string };
  imageText: string;
}

export interface IAbout {
  title: string;
  believe: IAboutText;
  goal: IAboutText;
  bonuses: {
    subtitle: string;
    text: string[];
  };
  image: { url: string };
  meta: IMetaBlock;
}

export interface ISubtitleWithText {
  subtitle: string;
  text: string;
}

export interface IIntroWithImage {
  title: string;
  text: string;
  button: string;
  buttonLink: string;
  image: { url: string };
}

export interface IServiceMobile {
  mainBlock: IIntroWithImage;
  worthBlock: {
    subtitle: string;
    textBlock: {
      accessibility: ISubtitleWithText;
      marketing: ISubtitleWithText;
      brand: ISubtitleWithText;
    };
  };
  strongBlock: {
    subtitle: string;
    textBlock: {
      android: ISubtitleWithText;
      ios: ISubtitleWithText;
    };
  };
  whatDoWeUse: ISubtitleWithText;
  whoNeedApps: {
    subtitle: string;
    text: string;
  };
  projects: string[];
  howDoWeWork: {
    subtitle: string;
    text: {
      point1: ISubtitleWithText;
      point2: ISubtitleWithText;
      point3: ISubtitleWithText;
      point4: ISubtitleWithText;
    };
  };
  footerBlock: IIntroWithImage;
  meta: IMetaBlock;
}
// cloud Solution
export interface ICloudService {
  meta: IMetaBlock;
  footerBlock: {
    button: string;
    buttonLink: string;
    subtitle: string;
    image: { url: string };
  };
  headerBlock: {
    button: string;
    buttonLink: string;
    title: string;
    text: string;
    image: { url: string };
  };
  providesBlock: {
    configuration: ISubtitleWithText;
    hosting: ISubtitleWithText;
    publishing: ISubtitleWithText;
    subtitle: string;
  };
  projects: string[];
  workBlock: {
    subtitle: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
  };
  worthBlock: {
    collaboration: ISubtitleWithText;
    dataSecurity: ISubtitleWithText;
    mobility: ISubtitleWithText;
    subtitle: string;
  };
}
export interface ISubtitleWithText {
  subtitle: string;
  text: string;
}

export interface ISubtitleWithList {
  subtitle: string;
  list: string[];
}

export interface IServiceWeb {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  comparisonBlock: {
    desktopColumn: ISubtitleWithList;
    webColumn: ISubtitleWithList;
  };
  whyIsWebBlock: {
    subtitle: string;
    element1: ISubtitleWithText;
    element2: ISubtitleWithText;
    element3: ISubtitleWithText;
  };
  solutionBlock: ISubtitleWithText;
  projects: string[];
  perksBlock: ISubtitleWithList;
  footerBlock: {
    subtitle: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

export interface IServiceDb {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  expertiseBlock: {
    subtitle: string;
    servers: ISubtitleWithText;
    databases: ISubtitleWithText;
  };
  selectBlock: {
    subtitle: string;
    text: string;
    image: { url: string };
  };
  projects: string[];
  featuresBlock: {
    databases: {
      subtitle: string;
      text1: string;
      text2: string;
      text3: string;
    };
    servers: {
      subtitle: string;
      text1: string;
      text2: string;
    };
  };
  footerBlock: {
    subtitle: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

//Blockchain service page

export interface IBlockchainService {
  aboutBlock: {
    subtitle: string;
  };
  footerBlock: {
    button: string;
    buttonLink: string;
    subtitle: string;
    image: {
      url: string;
    };
  };
  headerBlock: {
    button: string;
    buttonLink: string;
    title: string;
    text: string;
    image: {
      url: string;
    };
  };
  projects: string[];
  servicesBlock: {
    image: {
      url: string;
    };
    subtitle: string;
    text: string;
    textSubBlock: string[];
  };
  wayBlock: {
    subtitle: string;
    textSubBlock: string[];
  };
  meta: IMetaBlock;
}

export interface ISubtitleWithText {
  subtitle: string;
  text: string;
}

export interface IServiceSupport {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  howDoWeWorkBlock: {
    subtitle: string;
    maintenance: ISubtitleWithText;
    support: ISubtitleWithText;
    security: ISubtitleWithText;
  };
  providesBlock: {
    subtitle: string;
    textSubBlock: ISubtitleWithText[];
  };
  projects: string[];
  bonusesBlock: {
    subtitle: string;
    textSubBlock: string[];
  };
  footerBlock: {
    subtitle: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

export interface IUxUiInterface {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  whatDoWeDoBlock: {
    title: string;
    textSubBlock: { subtitle: string; text: string }[];
  };
  designBlock: {
    title: string;
    textSubBlock: string[];
  };
  projects: string[];
  essentialBlock: {
    title: string;
    text: string;
    image: { url: string };
  };
  footerBlock: {
    title: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

export interface IProjects {
  projects: string[];
}

export interface IReviewProps {
  bgColor: string;
  button: string;
  category: string;
  feedback: {
    name: string;
    rating: number | null;
    company: string;
    feedbackText: string;
  };
  image: { url: string };
  text: string;
  title: string;
}
