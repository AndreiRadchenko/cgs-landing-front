import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import EssentialImage from "./EssentialImage";

import * as Styled from "../../styles/UxUiService/EssentialBlock.styled";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useOnScreen } from "../../hooks/useOnScreen";

const EssentialBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.essentialBlock;
  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <EssentialImage />
      </Styled.ImageWrapper>
      <Styled.ContentWrapper>
        {data && (
          <Styled.Title ref={elRef}>
            {(width && width <= 767 && isScrolled && (
              <TextTypingAnimation text={data.title} />
            )) || <SplitBrackets text={data?.title} />}
          </Styled.Title>
        )}
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
      </Styled.ContentWrapper>
    </Styled.Container>
  );
};

export default EssentialBlock;
