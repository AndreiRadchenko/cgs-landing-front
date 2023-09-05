import React from "react";
import parse from "html-react-parser";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import * as Styled from "./InfoItem.styled";
import { splitBracketsAdvanced } from "../../../../utils/splitBracketsAdvanced";
import Arrow from "../../../../../public/CV/arrow.svg";

interface IProps {
  subtitle: string;
  text: string;
  idx: number;
}

export const InfoItem = ({ subtitle, text, idx }: IProps) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  let parsedText: string = text;
  if (!idx) {
    parsedText = splitBracketsAdvanced(text, isMobile);
  }
  return (
    <Styled.InfoCard>
      <Styled.Title>
        {subtitle}
        <Styled.ArrowContainer>
          <Image
            src={Arrow}
            alt="an arrow"
            width="36px"
            height="36px"
            objectPosition="top left"
          />
        </Styled.ArrowContainer>
      </Styled.Title>
      <Styled.Text>{idx ? parsedText : parse(parsedText)}</Styled.Text>
    </Styled.InfoCard>
  );
};
