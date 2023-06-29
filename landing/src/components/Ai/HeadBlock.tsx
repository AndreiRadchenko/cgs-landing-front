import { useQueryClient } from "@tanstack/react-query";
import React, { useRef } from "react";
import * as Styled from "../../styles/AiService/HeadBlock.styled";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import Image from "next/image";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      <Styled.TextContent>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
      </Styled.TextContent>
      {data && (
        <Styled.ButtonWrapper ref={elRef}>
          <GetEstimationButton
            buttonLink={data?.buttonLink}
            withEstimation
            buttonText={data.button}
            buttonClassName="social-button"
          />
          <ButtonShareComponent />
        </Styled.ButtonWrapper>
      )}
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            objectFit="contain"
            loading={"eager"}
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default HeadBlock;
