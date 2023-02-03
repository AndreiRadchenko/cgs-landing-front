import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/DbService/FooterBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";
import GetEstimationButton from "../GetEstimationButton";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <VisibleSubtitle>{data?.subtitle}</VisibleSubtitle>
        </Styled.SubtitleWrapper>
        {data && (
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withEstimation
            style={{
              padding: "1.117em 1.97em",
              fontSize: "1.3em",
            }}
          />
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
