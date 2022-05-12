import React from "react";
import * as Styled from "./OrbitButton.styled";

interface IOrbitButton {
  children: string;
}

const OrbitButton = ({ children }: IOrbitButton) => {
  return <Styled.Button>{children}</Styled.Button>;
};

export default OrbitButton;
