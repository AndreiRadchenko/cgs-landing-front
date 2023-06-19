import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import * as Styled from "../../styles/CloudService/FooterBlock.styled";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const FooterBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          <SplitBrackets text={data?.subtitle} />
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
      </Styled.Content>
      <Styled.Image src={data?.image?.url} alt="Footer Cloud Service image" />
    </Styled.Container>
  );
};

export default FooterBlock;
