import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { SplitBrackets } from "../../utils/splitBrackets";

import { queryKeys } from "../../consts/queryKeys";
import { IUxUiInterface } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/UxUiService/FooterBlock.styled";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);

  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        <Styled.Title>
          <SplitBrackets text={data?.title} />
        </Styled.Title>
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
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image?.url} alt="Footer UxUi image" />
    </Styled.Container>
  );
};

export default FooterBlock;
