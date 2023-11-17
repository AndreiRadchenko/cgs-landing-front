export interface IShowCaseProps {
  projects?: string[];
}

export interface IServicesClassnameProps {
  className?: string;
}

export interface IServicesShowcaseProps {
  withoutShowcase?: boolean;
}

export interface IHeaderFooterServicesProps {
  title: string;
  text?: string;
  btnText: string;
  btnLink: string;
  className?: string;
}

export interface ILinedText {
  text: string;
  position: "top" | "bottom";
  height: number;
  ind: number;
  isScrolled: boolean;
}
