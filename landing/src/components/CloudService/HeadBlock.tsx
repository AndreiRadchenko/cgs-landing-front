import React from "react";
import { useQueryClient } from "react-query";
import { ICloudService } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import * as Styled from "../../styles/CloudService/HeaderBlock.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { SplitBrackets } from "../../utils/splitBrackets";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>
          <SplitBrackets text={data?.title} />
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1.117em 3.862em"}
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
