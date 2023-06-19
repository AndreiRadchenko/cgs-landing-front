import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/OngoingSupport/FooterBlock.styled";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { SplitBrackets } from "../../utils/splitBrackets";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.Text>
        <SplitBrackets text={data?.text} />
      </Styled.Text>
      {data && (
        <Styled.ButtonWrapper ref={elRef}>
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withEstimation
            buttonClassName="social-button"
          />
          <ButtonShareComponent />
        </Styled.ButtonWrapper>
      )}
      <Styled.Image src={data?.image?.url} alt="Footer Supports image"/>
    </Styled.Container>
  );
};

export default FooterBlock;
