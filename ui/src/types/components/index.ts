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