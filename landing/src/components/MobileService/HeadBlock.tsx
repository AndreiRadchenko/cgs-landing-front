import React, { useRef } from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentContainer>
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
                padding: "1.195em 2.805em",
                fontSize: "1.54em",
                whiteSpace: "nowrap",
              }}
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentContainer>
      <Styled.Telephone src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
