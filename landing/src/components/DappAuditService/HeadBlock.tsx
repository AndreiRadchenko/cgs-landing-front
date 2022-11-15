import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import * as Styled from "../../styles/DappAuditService/HeadBlock.styled";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import Image from "next/image";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { replaceAt } from "../../utils/replaceStrByInd";

const HeadBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.headerBlock;

  const getPosition = (string: string, subString: string, index: number) => {
    return string.split(subString, index).join(subString).length;
  };

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
        <BlackButton
          padding={"1em 1.43em"}
          size={"1.125em"}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
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
