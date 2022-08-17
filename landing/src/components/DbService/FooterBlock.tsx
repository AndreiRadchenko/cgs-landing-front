import React from "react";
import { useQueryClient } from "react-query";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import { queryKeys } from "../../consts/queryKeys";
import { BlackButton, ButtonArrow } from "../../styles/HomePage/General.styled";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/DbService/FooterBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import themes from "../../utils/themes";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>(
    queryKeys.getServiceDbPage
  )?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <Subtitle>{data?.subtitle}</Subtitle>
        </Styled.SubtitleWrapper>
        <Styled.ButtonWrapper>
          <BlackButton
            padding={"1.02em 3.75em"}
            size={themes.primary.font.size.oneAndHalf}
            href={data?.buttonLink}
          >
            {data?.button}
            <ButtonArrow src={arrow.src} />
          </BlackButton>
        </Styled.ButtonWrapper>
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
