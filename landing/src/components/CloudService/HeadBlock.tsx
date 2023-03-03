import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { ICloudService } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/CloudService/HeaderBlock.styled";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

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
        <Styled.Description>{data?.text}</Styled.Description>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              style={{
                padding: "1.117em 3.862em",
                fontSize: "1.125em",
                whiteSpace: "nowrap",
              }}
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} />
    </Styled.Container>
  );
};

export default HeadBlock;
