export interface ICvPageData {
  title: string;
  categories: string[];
  roles: string[];
}

export interface ICvResponse {
  data: ICvPageData | undefined;
  isLoading: boolean;
  refetch: () => Promise<ICvResponse>;
}

export interface CvData {
  image: { url: string };
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
    card: {
      subtitle: string;
      stack: string[];
    }[];
  };
  projects: {
    title: string;
    project: {
      projectName: string;
      role: string;
      date: string;
      summary: string;
      achievements: string[];
      technology: string[];
    }[];
  };
}
