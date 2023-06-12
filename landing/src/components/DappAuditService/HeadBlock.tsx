import React, { useRef } from "react";
import * as Styled from "../../styles/DappAuditService/HeadBlock.styled";
import Image from "next/image";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { replaceAt } from "../../utils/replaceStrByInd";
import GetEstimationButton from "../GetEstimationButton";
import { getPosition } from "../../utils/getPosition";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import {
  IServiceAi,
  IServiceDappAudit,
} from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { useQueryClient } from "@tanstack/react-query";

const HeadBlock = () => {
  const queryClient = useQueryClient();

  const { width } = useWindowDimension();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceAi>([
    queryKeys.getServiceAiPage,
  ])?.headerBlock;

  const title =
    data &&
    replaceAt(
      replaceAt(data.title, getPosition(data.title, "|", 3), 1),
      getPosition(data.title, "|", 1),
      1
    );

  const mobileTitle =
    data && replaceAt(data.title, getPosition(data.title, "|", 2), 1);

  return (
    <Styled.Wrapper>
      <Styled.TextContent>
        {data && title && mobileTitle && (
          <Styled.Title>
            <TextTypingAnimation
              text={width && width < 768 ? mobileTitle : title}
            />
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
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.TextContent>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp service hero img"
            layout="fill"
            objectFit="contain"
            priority
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Wrapper>
  );
};

export default HeadBlock;
