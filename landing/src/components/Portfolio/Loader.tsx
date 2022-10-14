import React from "react";
import * as Styled from "../../styles/PortfolioLoader.styled";

const Loader = () => {
  return (
    <Styled.LoaderWrapper>
      <Styled.LoaderRow>
        <Styled.Cube />
        <Styled.Cube className="middle" />
        <Styled.Cube />
      </Styled.LoaderRow>
    </Styled.LoaderWrapper>
  );
};

export default Loader;
