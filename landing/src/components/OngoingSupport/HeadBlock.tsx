import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import * as Styled from "../../styles/OngoingSupport/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IHeadServicesProps } from "../../types/Services.types";

const HeadBlock = ({ setIsMainImagesLoaded }: IHeadServicesProps) => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.headerBlock;

  const onMainImageLoad = () => {
    setIsMainImagesLoaded(true);
  };

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              style={{
                zIndex: "2",
              }}
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.Content>
      <Styled.Image onLoad={() => onMainImageLoad()} src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
