import { StringSchema } from 'yup';
import { FormikHandlers } from 'formik/dist/types';

export interface ProjectImgStyle {
  img: string;
  width: string;
}

export interface ProjectCardType {
  title: string;
  projectImg: ProjectImgStyle;
  technologies: Array<string>;
  background: string;
  children: React.ReactNode;
}

export interface IHeader {
  socialList: Array<ISocialInside>;
  fill?: string;
  navigation: Array<ICategoriesInside>;
}
export interface ISvgData {
  path: string;
  fill: string;
}

export interface ISocialInside {
  title: string;
  link: string;
  src: Array<ISvgData>;
}
export interface ISocial {
  socialList: Array<ISocialInside>;
  fill?: string;
}

export interface IFooter {
  socialList: Array<ISocialInside>;
  fill?: string;
}

export interface IArticle {
  id?: string;
  desc?: string;
  title: string;
  //   children: React.ReactNode;
}

export interface IHome {
  id?: string;
}

export interface IMenu {
  children: React.ReactNode;
}

export interface IButton {
  type?: string;
  text: string;
  link?: string;
  id?: string;
  onClick?: () => {
    return: any;
  };
}
export interface ICategoriesInside {
  link: string;
  title: string;
}
export interface ICategories {
  navigation: Array<ICategoriesInside>;
}

export interface IInput {
  value?: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: any;
  onBlur?: any;
  errors?: object;
  touched?: any;
}
export interface ITextArea {
  placeholder: string;
  name: string;
  onChange?: any;
  onBlur?: any;
  value?: string;
  errors?: object;
  touched?: any;
}
export interface SlidePersonType {
  name: string;
  position: string;
  country?: { name: string; img: string };
  img: string;
}

export interface SlideType {
  person1: SlidePersonType;
  person2?: SlidePersonType;
  description?: string;
  background: string;
  title: string;
}
