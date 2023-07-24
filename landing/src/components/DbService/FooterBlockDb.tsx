import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/DbService/FooterBlock.styled";
import { IServiceDb } from "../../types/Admin/Response.types";

const FooterBlockDb = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        <Styled.SubtitleWrapper>
          <VisibleSubtitle>{data?.subtitle}</VisibleSubtitle>
        </Styled.SubtitleWrapper>
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
      </Styled.TextContent>
      <Styled.Image src={data?.image?.url} alt="Footer image" />
    </Styled.Container>
  );
};

export default FooterBlockDb;
