import React from "react";
import ButtonArrow from "../../../utils/ButtonArrow";
import * as Styled from "../../../styles/HomePage/General.styled";

interface IProps {
  title?: string;
  handleClick: (e: any) => void;
}

const SaveBtn = ({ title = "Save Changes", handleClick }: IProps) => {
  return (
    <Styled.BlackButton
      size={"1.5em"}
      padding={"1.11em 1.5em"}
      onClick={handleClick}
    >
      {title}
      <Styled.ArrowContainer>
        <ButtonArrow />
      </Styled.ArrowContainer>
    </Styled.BlackButton>
  );
};

export default SaveBtn;
