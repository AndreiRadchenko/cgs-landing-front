import { Dispatch, SetStateAction } from "react";

export interface IShowCaseProps {
  projects?: string[];
  setIsFirstImageLoaded: Dispatch<SetStateAction<boolean>>;
}

export interface IServicesClassnameProps {
  className?: string;
}

export interface IServicesShowcaseProps {
  withoutShowcase?: boolean;
}
