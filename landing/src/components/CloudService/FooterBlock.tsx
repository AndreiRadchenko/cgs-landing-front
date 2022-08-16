import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { BlackButton } from "../../styles/HomePage/General.styled";
import { ButtonArrow } from "../../styles/HomePage/General.styled";
import arrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import themes from "../../utils/themes";
import * as Styled from "../../styles/CloudService/FooterBlock.styled";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>(
    queryKeys.getServiceCloudPage
  )?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>{data?.subtitle}</Styled.Title>
        <BlackButton
          padding={"1.12em 3.6em"}
          size={themes.primary.font.size.oneAndHalf}
          href={data?.buttonLink}
        >
          {data?.button}
          <ButtonArrow src={arrow.src} />
        </BlackButton>
      </Styled.Content>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
