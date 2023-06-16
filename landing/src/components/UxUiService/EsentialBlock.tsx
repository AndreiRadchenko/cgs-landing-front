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
        {/* <div style={{ position: "relative", width: "100%", height: "100%" }}> */}
        {/* <Image
            src={data?.image ? data.image.url : ""}
            alt="Essential Image"
            layout="fill"
            objectFit="contain"
          /> */}
        <EssentialImage />
        {/* </div> */}
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
