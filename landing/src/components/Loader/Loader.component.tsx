import React, { FC } from "react";

import {
  StyledLoader,
  ComponentStyledLoader,
  BlogStyledLoader,
  PortfolioStyledLoader,
} from "./Loader.styled";
import { StyledSpinner } from "./Loader.styled";

import { ILoaderProps } from "../../types/Components.types";

export const Loader: FC<ILoaderProps> = ({
  active,
  children,
  isPortfolio = false,
  isBlog = false,
  className,
}) => {
  return isPortfolio ? (
    <PortfolioStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      className={className}
    >
      {children}
    </PortfolioStyledLoader>
  ) : isBlog ? (
    <BlogStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      className={className}
    >
      {children}
    </BlogStyledLoader>
  ) : (
    <StyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      className={className}
    >
      {children}
    </StyledLoader>
  );
};

export const ComponentLoader: FC<ILoaderProps> = ({
  active = false,
  children,
  text = "Loading your content...",
}) => {
  return (
    <ComponentStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      text={text}
    >
      {children}
    </ComponentStyledLoader>
  );
};
