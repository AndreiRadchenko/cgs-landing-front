export interface IModalCategoryProps {
  title: string;
}

export interface IAllCategoriesModalProps extends IModalCategoryProps {
  onSetNewCategory: (categoryName: string) => void;
}

export interface IModalProjectCardProps {
  url: string;
  title: string;
  description: string;
}
