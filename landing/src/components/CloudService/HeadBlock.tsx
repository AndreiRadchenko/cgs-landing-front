import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import { ICloudService } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/CloudService/HeaderBlock.styled";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
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
              buttonClassName="cloudSolution"
            />
            <ButtonShareComponent className="cloudSolution"/>
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
