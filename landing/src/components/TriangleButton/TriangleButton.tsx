import React, { FC } from "react";
import * as Styled from "./TriangleButton.styled";

interface ITriangleButtonProps {
    onClick: () => void;
  }

const TriangleButton: FC<ITriangleButtonProps> = ({ onClick }) => {

    return <Styled.TriangleButton onClick={onClick}/>
}

export default TriangleButton;
