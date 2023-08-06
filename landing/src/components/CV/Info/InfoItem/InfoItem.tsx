import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./InfoItem.styled";
import { splitBracketsAdvanced } from "../../../../utils/splitBracketsAdvanced";

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
        <span>&rarr;</span>
      </Styled.Title>
      <Styled.Text>{idx ? parsedText : parse(parsedText)}</Styled.Text>
    </Styled.InfoCard>
  );
};
