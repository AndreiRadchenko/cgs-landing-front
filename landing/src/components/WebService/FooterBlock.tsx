import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/FooterBlock.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <VisibleSubtitle>{data?.subtitle}</VisibleSubtitle>
        </Styled.SubtitleWrapper>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data.button}
              withEstimation
              style={{ padding: "1.117em 3.755em", fontSize: "1.125em" }}
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default FooterBlock;
