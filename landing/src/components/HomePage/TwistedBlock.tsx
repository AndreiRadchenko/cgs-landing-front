import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";

import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { splitBracketsAdvanced } from "../../utils/splitBracketsAdvanced";

import { useInViewport } from "../../hooks/useInViewport";
import * as Styled from "../../styles/HomePage/TwistedBlock.styled";

const TwistedBlock = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.BadgesBlock;

  if (!data) throw Error("Data not found!");

  const parsedText = splitBracketsAdvanced(data?.twistedBlock, isMobile);

  const isScrolled = useInViewport(componentRef);

  return (
    <Styled.TwistedBlockContainer>
      <Styled.TextContainer animate={isScrolled} ref={componentRef}>
        <Styled.TwistedText className={isScrolled ? "" : "black-span"}>
          {parse(parsedText)}
        </Styled.TwistedText>
        {Array.from(Array(6)).map((e, idx) => (
          <Styled.TwistedDiv key={idx} className={isScrolled ? "scrolled" : ""}>
            <div className="gradient"></div>
          </Styled.TwistedDiv>
        ))}
      </Styled.TextContainer>
    </Styled.TwistedBlockContainer>
  );
};

export default TwistedBlock;
