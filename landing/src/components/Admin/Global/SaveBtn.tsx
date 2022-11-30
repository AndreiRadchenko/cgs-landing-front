import React, { CSSProperties } from "react";
import ButtonArrow from "../../../utils/ButtonArrow";
import * as Styled from "../../../styles/HomePage/General.styled";

interface IProps {
  title?: string;
  handleClick: () => void;
  style?: CSSProperties;
}

const SaveBtn = ({ title = "Save Changes", handleClick, style }: IProps) => {
  return (
    <Styled.BlackButton
      size={"1.5em"}
      padding={"1.11em 1.5em"}
      onClick={handleClick}
      style={style}
    >
      {title}
      <Styled.ArrowContainer>
        <ButtonArrow />
      </Styled.ArrowContainer>
    </Styled.BlackButton>
  );
};

export default SaveBtn;
