import React from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import { BlackButton, ButtonArrow } from "../../styles/HomePage/General.styled";
import themes from "../../utils/themes";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  )?.mainBlock;

  return (
    <Styled.Container>
      <Styled.ContentContainer>
        <Styled.Title>
          <SplitBrackets text={data?.title} />
          <Styled.Cursor />
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1.15em 3.6em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ButtonArrow src={arrow.src} />
        </BlackButton>
      </Styled.ContentContainer>
      <Styled.Telephone src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
