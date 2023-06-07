import React, { FC } from "react";
import {
  StyledLoader,
  ComponentStyledLoader,
  PortfolioStyledLoader,
} from "./Loader.styled";
import { StyledSpinner } from "./Loader.styled";

interface ILoaderProps {
  active?: boolean;
  children?: React.ReactNode;
  text?: string;
  isPortfolio?: boolean;
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({
  active,
  children,
  isPortfolio = false,
  className,
}) => {
  return isPortfolio ? (
    <PortfolioStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
    >
      {children}
    </PortfolioStyledLoader>
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
