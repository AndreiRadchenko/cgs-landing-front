import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/UxUiService/EssentialBlock.styled";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useOnScreen } from "../../hooks/useOnScreen";
import TextTypingAnimation from "../Typewrite";
import Image from "next/image";

const EssentialBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.essentialBlock;
  const elRef = useRef<HTMLDivElement>(null);
  console.log(data?.image.url);
  const isScrolled = useOnScreen(elRef, true);
  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={data?.image ? data.image.url : ""}
            alt="Essential Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
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
