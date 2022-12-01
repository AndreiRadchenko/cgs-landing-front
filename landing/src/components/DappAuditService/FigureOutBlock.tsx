import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import {
  Wrapper,
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/FigureOutBlock.styled";
import { IServiceDappAudit } from "../../types/Admin/Response.types";
import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import FigureOutImg from "../../../public/DappAuditService/FigureOutImg.svg";
import FigureOutImgMobile from "../../../public/DappAuditService/FigureOutImgMobile.svg";
import WhyIsAuditImportant from "/public/DappAuditService/WhyIsAuditImportant.svg";
import WhyIsAuditImportantMobile from "/public/DappAuditService/WhyIsAuditImportantMobile.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const FigureOutBlock = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const figureOutBlockData = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.figureOutBlock;

  const whyIsDappsBlockData = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.whyIsDappsBlock;

  return (
    <Wrapper>
      <Subtitle className="mobileDissapear">
        {figureOutBlockData?.subtitle}
      </Subtitle>
      <MobileInfiniteText title={figureOutBlockData?.subtitle} />
      <Styled.ContentWrapper>
        {figureOutBlockData && (
          <Styled.ImageWrapper>
            <Image
              src={
                width && width < 992 ? FigureOutImgMobile.src : FigureOutImg.src
              }
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
      <WrapperWithLine />
      <Styled.WhyIsAuditImportantWrapper>
        <Styled.LowerContentWrapper>
          <Subtitle>
            <SplitBrackets text={whyIsDappsBlockData?.subtitle} />
          </Subtitle>
          <Styled.WhyIsAuditImportantImageWrapper>
            <Image
              src={
                width && width < 992
                  ? WhyIsAuditImportantMobile.src
                  : WhyIsAuditImportant.src
              }
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.WhyIsAuditImportantImageWrapper>
        </Styled.LowerContentWrapper>
      </Styled.WhyIsAuditImportantWrapper>
    </Wrapper>
  );
};

export default FigureOutBlock;