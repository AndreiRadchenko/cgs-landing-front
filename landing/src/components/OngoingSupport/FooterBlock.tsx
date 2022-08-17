import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IOngoingSupport } from "../../types/Admin/Response.types";
import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import themes from "../../utils/themes";
import * as Styled from "../../styles/OngoingSupport/FooterBlock.styled";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IOngoingSupport>(
    queryKeys.getOngoingSupportPage
  )?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <BlackButton
        padding={"1.117em 3.57em"}
        size={themes.primary.font.size.oneAndHalf}
        href={data?.buttonLink}
      >
        {data?.button}
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
