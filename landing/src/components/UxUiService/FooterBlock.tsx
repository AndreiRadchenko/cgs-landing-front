import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import * as Styled from "../../styles/UxUiService/FooterBlock.styled";

const FooterBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IUxUiInterface>(
    queryKeys.getServiceUxUiPage
  )?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>{data?.title}</Styled.Title>
        <BlackButton
          padding={"1.117em 3.57em"}
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

export default FooterBlock;
