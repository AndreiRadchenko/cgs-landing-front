import React, { FC } from "react";
import * as Styled from "./TriangleButton.styled";

interface ITriangleButtonProps {
  onClick: () => void;
}

const TriangleButton: FC<ITriangleButtonProps> = ({ onClick }) => {
  return (
    <Styled.Area onClick={onClick}>
      <Styled.TriangleButton />
    </Styled.Area>
  );
}

export default TriangleButton;
