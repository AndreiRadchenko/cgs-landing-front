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
  setIsMainImagesLoaded: Dispatch<SetStateAction<boolean>>;
}
