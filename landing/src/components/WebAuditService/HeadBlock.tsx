import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/WebAuditService/HeadBlock.styled";
import { IServiceWebAudit } from "../../types/Admin/Response.types";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.headerBlock;

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
                style={{
                  padding: "1.117em 2.537em",
                  fontSize: "1.5em",
                  whiteSpace: "nowrap",
                }}
              />
              <ButtonShareComponent />
            </Styled.ButtonWrapper>
          )}
        </Styled.TextContainer>
        {data?.image && (
          <Styled.Image src={data?.image.url} alt="web audit hero image" />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
};

export default HeadBlock;
