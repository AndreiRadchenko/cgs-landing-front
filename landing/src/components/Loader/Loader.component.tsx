import React, { FC } from "react";
import { StyledLoader, ComponentStyledLoader } from "./Loader.styled";
import { StyledSpinner } from "./Loader.styled";

interface ILoaderProps {
  active?: boolean;
  children?: React.ReactNode;
  text?: string;
}

export const Loader: FC<ILoaderProps> = ({ active, children }) => {
  return (
    <StyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
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
