import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/FooterBlock.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import ButtonArrow from "../../utils/ButtonArrow";
import themes from "../../utils/themes";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>(
    queryKeys.getServiceWebPage
  )?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <Subtitle>{data?.subtitle}</Subtitle>
        </Styled.SubtitleWrapper>
        <BlackButton
          padding={"1.117em 3.755em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
