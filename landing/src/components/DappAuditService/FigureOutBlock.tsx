import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import { Wrapper, Subtitle } from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/FigureOutBlock.styled";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import WhyIsAuditImportant from "/public/DappAuditService/WhyIsAuditImportant.svg";

const FigureOutBlock = () => {
  const queryClient = useQueryClient();
  const figureOutBlockData = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.figureOutBlock;

  const whyIsDappsBlockData = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.whyIsDappsBlock;

  return (
    <Wrapper>
      <Subtitle>{figureOutBlockData?.subtitle}</Subtitle>
      <Styled.ContentWrapper>
        {figureOutBlockData && (
          <Styled.ImageWrapper>
            <Image
              src={figureOutBlockData.image.url}
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
        <Styled.TextWrapper>
          {figureOutBlockData?.textBlock.map((text, index) => (
            <Styled.Text key={index}>
              <SplitBrackets text={text} />
            </Styled.Text>
          ))}
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
      <Wrapper>
        <Styled.LowerContentWrapper>
          <Subtitle>
            <SplitBrackets text={whyIsDappsBlockData?.subtitle} />
          </Subtitle>
          <Styled.WhyIsAuditImportantImageWrapper>
            <Image
              src={WhyIsAuditImportant.src}
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.WhyIsAuditImportantImageWrapper>
        </Styled.LowerContentWrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default FigureOutBlock;
