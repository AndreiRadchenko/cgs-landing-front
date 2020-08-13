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

export interface SlidePersonType {
  name: string;
  position: string;
  country?:{name:string,img:string};
  img: string;
}

export interface SlideType {
  person1: SlidePersonType;
  person2?: SlidePersonType;
  description?: string;
  background: string;
  title: string;
}
