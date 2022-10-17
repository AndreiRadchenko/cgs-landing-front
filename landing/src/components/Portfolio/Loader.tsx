import React from "react";
import * as Styled from "../../styles/PortfolioLoader.styled";

const Loader = () => {
  return (
    <Styled.LoaderWrapper>
      <Styled.LoaderRow>
        <Styled.Cube className="middle" />
        <Styled.EdgeCubeWrapper>
          <Styled.Cube />
          <Styled.Cube />
        </Styled.EdgeCubeWrapper>
      </Styled.LoaderRow>
    </Styled.LoaderWrapper>
  );
};

export default Loader;
