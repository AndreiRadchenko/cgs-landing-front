import React, { FC } from "react";
import { StyledLoader } from "./Loader.styled";
import { StyledSpinner } from "./Loader.styled";

interface ILoaderProps {
  active: boolean;
  children?: React.ReactNode;
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
