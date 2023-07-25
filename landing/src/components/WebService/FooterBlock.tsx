import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/WebService/FooterBlock.styled";
import { IServiceWeb } from "../../types/Admin/Response.types";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { SplitBrackets } from "../../utils/splitBrackets";

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
          <VisibleSubtitle>
            <SplitBrackets text={data?.subtitle} />
          </VisibleSubtitle>
        </Styled.SubtitleWrapper>
        <Styled.TextWrapper>{data?.text}</Styled.TextWrapper>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data.button}
              withEstimation
              buttonClassName="webDev"
            />
            <ButtonShareComponent className="webDev"/>
          </Styled.ButtonWrapper>
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image?.url} alt="Footer WebService image" />
    </Styled.Container>
  );
};

export default FooterBlock;
