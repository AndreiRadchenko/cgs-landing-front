export enum ProjectsListType {
  seeAllWorks = "all work",
  web = "web",
  mobile = "mobile",
  server = "server",
  blockchain = "blockchain",
}

export interface IModalCategoryProps {
  title: string;
}

export interface IAllCategoriesModalProps extends IModalCategoryProps {
  onSetNewCategory: (categoryName: string) => void;
}

export interface IModalProjectCardProps {
  url: any;
  title: string;
  link: string;
  description: string;
}
