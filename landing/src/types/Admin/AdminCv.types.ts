import { IMetaBlock } from './Response.types';
import { ITechnology } from "./technologies.types";
export interface ICvPageData {
  title: string;
  categories: string[];
  roles: string[];
  meta: IMetaBlock
}

export interface ICvResponse {
  data: ICvPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<ICvResponse>;
}

interface CvCard {
  subtitle: string;
  stack: string[];
}

interface CvProject {
  projectName: string;
  role: string;
  date: string;
  summary: string;
  achievements: string[];
  technology: ITechnology[];
}

export interface CvData {
  _id: string;
  image: { url: string };
  category: string;
  personal: {
    name: string;
    summary: string;
    role: string;
  };
  info: {
    title: string;
    content: {
      subtitle: string;
      text: string;
    }[];
  };
  skills: {
    title: string;
    card: CvCard[];
  };
  projects: {
    title: string;
    project: CvProject[];
  };
}

export interface ICvItem {
  item: CvData;
  i: number
}