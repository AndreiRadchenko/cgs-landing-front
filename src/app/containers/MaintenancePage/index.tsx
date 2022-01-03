import React from "react";
import * as Styled from "./Maintenance.styles";
import Loader from "react-loader-spinner";

export const Maintenance = () => {
  return (
    <Styled.MainWrapper>
      <Styled.Title>
        The website is currently undergoing maintenance
      </Styled.Title>
      <Loader
        type="Bars"
        color="#ffffff"
        height={200}
        width={200}
        timeout={1000000000} //3 secs
      />
    </Styled.MainWrapper>
  );
};
