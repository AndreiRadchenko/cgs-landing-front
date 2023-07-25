import React, { useRef } from "react";
import * as Styled from "../../styles/DappAuditService/HeadBlock.styled";
import Image from "next/image";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { IServiceAi } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const HeadBlock = () => {
  const queryClient = useQueryClient();

  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceAi>([
    queryKeys.getServiceAiPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      <Styled.TextContent>
        {data && (
          <Styled.Title className="dappAuditTitle">
            <TextTypingAnimation text={data.title} />
          </Styled.Title>
        )}
        <Styled.Text>
          <SplitBrackets text={data?.text} />
        </Styled.Text>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              buttonClassName="ai"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.TextContent>
      <Styled.ImageWrapper>
        {data?.image && (
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            loading={"eager"}
            objectFit="contain"
            priority
          />
        )}
      </Styled.ImageWrapper>
    </Styled.Wrapper>
  );
};

export default HeadBlock;
