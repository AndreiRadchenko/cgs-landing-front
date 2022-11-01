import React from "react";
import * as Styled from "../../styles/MobileAuditService/LinedText.styled";
import MultiLine from "./MultiLine";

interface ILinedText {
  text: string;
  height: number;
  ind: number;
  subtext: string[];
  isScrolled: boolean;
}

const LinedText = ({ text, height, ind, isScrolled, subtext }: ILinedText) => {
  return (
    <Styled.Container
      height={height}
      ind={ind}
      className={isScrolled ? "scrolled" : undefined}
    >
      <Styled.MarkerContainer>
        <Styled.Marker position={"top"} />
      </Styled.MarkerContainer>
      <Styled.Text position={"top"}>{text}</Styled.Text>
      {subtext?.length > 0 && (
        <Styled.MultiLineContainer>
          <MultiLine />
        </Styled.MultiLineContainer>
      )}
      <Styled.BigSubTextContainer>
        {subtext?.map((el, idx) => (
          <Styled.SubTextContainer>
            <p>{el}</p>
          </Styled.SubTextContainer>
        ))}
      </Styled.BigSubTextContainer>
    </Styled.Container>
  );
};

export default LinedText;
