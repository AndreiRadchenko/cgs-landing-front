import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/HeadBlock.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { IHeadServicesProps } from "../../types/Services.types";

const HeadBlock = ({
  setOnLoadCount,
  onLoadCount,
  setIsMainImagesLoaded,
}: IHeadServicesProps) => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.headerBlock;

  const onMainImageLoad = (e: any) => {
    setOnLoadCount((prev) => prev + 1);
    if (onLoadCount === 1) {
      setIsMainImagesLoaded(true);
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.TextContainer>
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
                buttonClassName="social-button services"
              />
              <ButtonShareComponent className="webAudit" />
            </Styled.ButtonWrapper>
          )}
        </Styled.TextContainer>
        {data?.image && (
          <Styled.Image
            onLoad={(e) => onMainImageLoad(e)}
            src={data?.image.url}
            alt="web audit hero image"
          />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
};

export default HeadBlock;
