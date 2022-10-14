import React from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import ButtonArrow from "../../utils/ButtonArrow";
import TextTypingAnimation from "../Typewrite";
const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        <BlackButton
          padding={"1.117em 3.6em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.ContentContainer>
      <Styled.Telephone src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
