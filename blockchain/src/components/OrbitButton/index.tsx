import React from "react";
import * as Styled from "./OrbitButton.styled";

interface IOrbitButton {
  children: string;
}

const OrbitButton = ({ children }: IOrbitButton) => {
  return (
    <Styled.Button>
      <Styled.DotWrapp theme="-2.8s">
        <Styled.Dot />
      </Styled.DotWrapp>
      <Styled.DotWrapp theme="0s">
        <Styled.Dot />
      </Styled.DotWrapp>
      {children}
    </Styled.Button>
  );
};

export default OrbitButton;
