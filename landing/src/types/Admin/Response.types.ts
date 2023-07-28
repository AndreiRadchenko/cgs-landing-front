import { IImage } from "./Admin.types";
import {
  IOtherServicesComponent,
  IFreeServicesComponent,
  ITeamMembers,
  IAdvantagesServicesComponent,
  IBonusesComponent,
} from "../../types/ServicesComponent.types";
import { ITechnology } from "./AdminPortfolio.types";
export interface IEditInformation {
  title: string;
  subtitle: string;
  button: string;
  buttonLink: string;
  whatsAppLink: string;
  telegramLink: string;
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

export interface ICalendlyPopupBlock {
  title: string;
  description: string;
  buttonText: string;
}

export interface ITech {
  category: string;
  link?: string;
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
  hrEmail: string;
  links: { link: string }[];
  images: IImage[];
}

export interface IMetaBlock {
  metaTitle: string;
  metaDescription: string;
  customHead: string;
  lastModified?: string;
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
  SubtitleBookBlock: ISubtitle;
  SeeAllBlock: IButtonWithLinkBlock;
  FilmBlock: { textOnFilm: string };
  BadgesBlock: {
    badges: {
      image: { url: string } | null;
      link: string;
    }[];
    logos: {
      image: { url: string } | null;
    }[];
  };
  FreeServicesBlock: {
    title: string;
    items: {
      image: { url: string } | null;
      subtitle: string;
    }[];
  };
  LogosBlock: {
    images: { url: string }[];
  };
  CardsBlock: ICards;
  CalendlyPopupBlock: ICalendlyPopupBlock;
  FeedbackBlock: IFeedbackBlock;
  TechnologyBlock: {
    items: ITech[];
  };
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
  description: string;
  location: string;
  time: string;
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
  image: { url: string } | null;
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
  image: { url: string } | null;
  title: string;
  description: string;
  author: IAuthor;
  updatedOn: string;
  date: string;
  publishedDate: string;
  minutesToRead: number;
  views: number;
  content: string;
  tags: string[];
  disabled: boolean;
  draft: boolean;
  meta: IMetaBlock;
}

export interface IArticleWithoutId {
  url: string;
  image: { url: string } | null;
  title: string;
  description: string;
  author: IAuthor;
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
}

export interface ISwapData {
  desInd: number;
  srcInd: number;
}

export interface IBlogPageResponse {
  possibleTags: string[];
  podcast: {
    subtitle: string;
    text: string;
    link: string;
  };
  meta: IMetaBlock;
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

export interface ITeammate {
  image: { url: string };
  name: string;
  position: string;
  about: string;
  linkedin: string;
}

export interface IAbout {
  about: {
    video: {
      image: { url: string };
    };
    image: { url: string };
    codex: {
      title: string;
      text: string;
    };
    philosophy: {
      title: string;
      text: string;
    };
  };
  numbers: {
    years: {
      num: string;
      text: string;
    };
    employees: {
      num: string;
      text: string;
    };
    projects: {
      num: string;
      text: string;
    };
    customers: {
      num: string;
      text: string;
    };
  };
  team: {
    title: string;
    members: ITeammate[];
  };

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

export interface IService {
  headerBlock: IIntroWithImage;
}

export interface IWorthBlock {
  subtitle: string;
  textBlock?: {
    accessibility: ISubtitleWithText;
    marketing: ISubtitleWithText;
    brand: ISubtitleWithText;
  };
  collaboration?: ISubtitleWithText;
  dataSecurity?: ISubtitleWithText;
  mobility?: ISubtitleWithText;
}

export interface IDomain {
  _id?: string;
  name: string;
  image: { url: string } | null;
}

export interface IServiceMobile {
  headerBlock: IIntroWithImage;
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
  domainNew: {
    name: string;
    image: { url: string } | null;
  };
  domains: IDomain[];
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
  teamMembers: ITeamMembers;
  meta: IMetaBlock;
}
// cloud Solution
export interface ICloudService {
  footerBlock: {
    button: string;
    buttonLink: string;
    subtitle: string;
    text: string;
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
  teamMembers: ITeamMembers;
  freeServices?: IFreeServicesComponent;
  meta: IMetaBlock;
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
    text: string;
    buttonLink: string;
    image: { url: string };
  };
  teamMembers: ITeamMembers;
  freeServices: IFreeServicesComponent;
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
    subtitle: string;
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
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  bonuses: IBonusesComponent;
  otherServices: IOtherServicesComponent;
  meta: IMetaBlock;
}

//Blockchain service page

export interface IBlockchainService {
  aboutBlock: {
    subtitle: string;
  };
  footerBlock: {
    button: string;
    description: string;
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
    descriptionSubtitle: string;
    text: string;
    textSubBlock: string[];
  };
  wayBlock: {
    subtitle: string;
    textSubBlock: string[];
  };
  advantages: IAdvantagesServicesComponent;
  teamMembers: ITeamMembers;
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
  bonuses: IBonusesComponent;
  otherServices: IOtherServicesComponent;
  teamMembers: ITeamMembers;
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
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  teamMembers?: ITeamMembers;
  otherServices?: IOtherServicesComponent;
  meta: IMetaBlock;
}

export interface IProjects {
  projects: string[];
}

export interface IReviewProps {
  _id?: string;
  imageBanner: IImage;
  image: {
    url: string;
  };
  imageProjectBanner: IImage;
  NDA: boolean;
  flag: string;
  country: string;
  projectDuration: string;
  projectTeam: string;
  title: string;
  showCaseTitle: string;
  industry: string;
  technologies: ITechnology[];
  text: string;
  categories: string[];
  button: string;
  feedback: {
    name: string;
    position: string;
    feedbackText: string;
  };
  technologyNew: {
    name: string;
    image: {
      url: string;
    };
    main: boolean;
  };
}

export interface ISitemapData {
  includedPages: string[];
}
export interface ICalculatorRole {
  _id: string;
  name: string;
  rate: number;
}

export interface ICalculator {
  previewTextMessage: string;
  popUpMessage: string;
  startMessage: string;
  finishMessage: string;
  resultMessage: string;
  email: string;
  name: string;
  roles: ICalculatorRole[];
}

export interface ICalculatorTieUpStep {
  _id: string;
  condition: string[];
  number: number | null;
}

export interface IStepOptions {
  _id: string;
  label: string;
  hours?: number;
  hourRate?: number;
  isRate?: boolean;
  roles?: string[];
  endRole?: {
    coef: number;
    role: string;
  };
  endCoef?: number;
  uxui?: number;
}

export interface ICalculatorSubStep {
  _id: string;
  condition: string[];
  title: string;
  type: string;
  options: IStepOptions[];
}

export interface ICalculatorStep {
  _id: string;
  title: string;
  type: string;
  subStepRequired?: boolean;
  options: IStepOptions[];
  tieUpSteps: ICalculatorTieUpStep[];
  subSteps: ICalculatorSubStep[];
}

export interface ICalculatorQuestion {
  title: string;
  answer: string | string[];
  subStepAnswer: string | string[];
  subStepRequired: string | true;
  tieUpDisabled?: boolean;
}

export interface ICalculatorPostResultsProps {
  answers: ICalculatorQuestion[];
  isBlockchain: boolean;
}
export interface ILeadMailData {
  uxui: number;
  hours: number;
  price: number;
}

export interface ICalculatorPostEmailResultsProps {
  answers: ICalculatorQuestion[];
  isBlockchain: boolean;
  estimation: ILeadMailData;
  email: string;
  name: string;
}

export interface ICalculatorPostLeadEmailResultsProps {
  answers: ILeadMailData;
  email: string;
}
export interface ICalculatorFormValuesProps {
  questionsArr: ICalculatorQuestion[];
  name: string;
  email: string;
  isBlockchain: boolean;
  // substepRequired: boolean;
}

export interface IRoles {
  [key: string]: number;
}

export interface ICalculatorAnswersResults {
  hours?: number;
  endCoef?: number;
  devs?: number;
  uxui?: number;
}
export interface IServiceMobileAudit {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  whatAppBlock: {
    subtitle: string;
    textBlock: {
      native: {
        subtitle: string;
        text: string;
      };
      web: {
        subtitle: string;
        text: string;
      };
      hybrid: {
        subtitle: string;
        text: string;
      };
    };
  };
  whatAppInclude: {
    subtitle: string;
    textBlock: { text: string; subtext: string[] }[];
    image: { url: string };
  };
  whenDoYouNeed: {
    subtitle: string;
    textBlock: {
      metrics: {
        subtitle: string;
        text: string;
      };
      bugs: {
        subtitle: string;
        text: string;
      };
      profit: {
        subtitle: string;
        text: string;
      };
    };
  };
  projects: string[];
  howDoWeAudit: {
    subtitle: string;
    description: string;
    points: string[];
  };
  footerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

export interface IServiceWebAudit {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  whatIsBlock: {
    subtitle: string;
    text: string;
    image: { url: string };
  };
  problemsAuditSolve: {
    subtitle: string;
    text: string;
    problems: [string];
  };
  teamMembers: TeamMembers;
  typesOfAuditBlock: [{ _id: string; title: string; text: string }];
  projects: [string];
  howToDoAudit: {
    subtitle: string;
    points: [string];
  };
  footerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}

export interface IServiceDappAudit {
  headerBlock: {
    title: string;
    text: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  figureOutBlock: {
    subtitle: string;
    textBlock: string[];
    image: { url: string };
  };
  whyIsDappsBlock: {
    subtitle: string;
  };
  howDoWeProvideBlock: {
    subtitle: string;
    textBlock: {
      title: string;
      text: string;
      subContent: { title: string; text: string }[];
    }[];
    image: { url: string };
  };
  projects: string[];
  footerBlock: {
    title: string;
    button: string;
    buttonLink: string;
    image: { url: string };
  };
  meta: IMetaBlock;
}
export interface IPrivacyPage {
  intro: string;
  content: { subtitle: string; text: string }[];
  meta: IMetaBlock;
}

export interface IServiceAi {
  headerBlock: HeaderBlock;
  figureOutBlock: FigureOutBlock;
  worthBlock: WorthBlock;
  howDoWeProvideBlock: HowDoWeProvideBlock;
  projects: string[];
  footerBlock: FooterBlock;
  teamMembers: TeamMembers;
  meta: IMetaBlock;
}

export interface HeaderBlock {
  title: string;
  text: string;
  button: string;
  buttonLink: string;
  image: Image;
}

export interface Image {
  url: string;
}

export interface FigureOutBlock {
  subtitle: string;
  textBlock: string[];
  image: Image2;
}

export interface Image2 {
  url: string;
}

export interface WorthBlock {
  subtitle: string;
  textBlock: TextBlock;
}

export interface TextBlock {
  accessibility: Accessibility;
  marketing: Marketing;
  brand: Brand;
}

export interface Accessibility {
  subtitle: string;
  text: string;
}

export interface Marketing {
  subtitle: string;
  text: string;
}

export interface Brand {
  subtitle: string;
  text: string;
}

export interface HowDoWeProvideBlock {
  subtitle: string;
  image: Image3;
  textBlock: TextBlock2[];
}

export interface Image3 {
  url: string;
}

export interface TextBlock2 {
  title: string;
  text: string;
  subContent: SubContent[];
  _id: string;
}

export interface SubContent {
  title: string;
  text: string;
  _id: string;
}

export interface FooterBlock {
  title: string;
  button: string;
  buttonLink: string;
  text: string;
  image: Image4;
}

export interface Image4 {
  url: string;
}

export interface TeamMembers {
  title: string;
  description: string;
  members: Member[];
  selectedMembers: SelectedMember[];
  _id: string;
}

export interface Member {
  id: string;
  member: string;
  _id: string;
}

export interface SelectedMember {
  id: string;
  member: string;
  _id: string;
}
