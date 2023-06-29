import { Dispatch, SetStateAction } from "react";

export interface IShowCaseProps {
  projects?: string[];
}

export interface IServicesClassnameProps {
  className?: string;
}

export interface IServicesShowcaseProps {
  withoutShowcase?: boolean;
}

export interface IHeadServicesProps {
  setOnLoadCount: Dispatch<SetStateAction<number>>;
  onLoadCount: number;
  setIsMainImagesLoaded: Dispatch<SetStateAction<boolean>>;
}
