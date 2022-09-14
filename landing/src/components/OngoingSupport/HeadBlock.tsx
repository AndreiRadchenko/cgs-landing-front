import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import * as Styled from "../../styles/OngoingSupport/HeadBlock.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.headerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          <SplitBrackets text={data?.title} />
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1.117em 2.836em"}
          size={"1.125em"}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
