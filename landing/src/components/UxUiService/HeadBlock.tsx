import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/UxUiService/HeadBlock.styled";

const HeadBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>
          {/* {data?.title.split(" ").map((el, idx) => (
            <span key={idx}>{el} </span>
          ))} */}
          <SplitBrackets text={data?.title} />
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        <BlackButton
          padding={"1.117em 2.72em"}
          size={"1.125em"}
          href={data?.buttonLink}
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
