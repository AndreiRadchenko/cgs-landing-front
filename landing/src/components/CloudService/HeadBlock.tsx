import React from "react";
import { useQueryClient } from "react-query";
import { ICloudService } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { BlackButton } from "../../styles/HomePage/General.styled";
import { ButtonArrow } from "../../styles/HomePage/General.styled";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import themes from "../../utils/themes";
import * as Styled from "../../styles/CloudService/HeaderBlock.styled";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>
          {data?.title}
          <Styled.Cursor />
        </Styled.Title>
        <Styled.Description>{data?.text}</Styled.Description>
        <BlackButton
          padding={"1em 3.862em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ButtonArrow src={arrow.src}></ButtonArrow>
        </BlackButton>
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
