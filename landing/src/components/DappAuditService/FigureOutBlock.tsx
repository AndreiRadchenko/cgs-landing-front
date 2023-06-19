import Image from "next/image";
import React from "react";

import {
  Wrapper,
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/FigureOutBlock.styled";

import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import FigureOutImg from "../../../public/DappAuditService/FigureOutImg.svg";
import FigureOutImgMobile from "../../../public/DappAuditService/FigureOutImgMobile.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useQueryClient } from "@tanstack/react-query";
import { IServiceAi } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";

const FigureOutBlock = () => {
  const queryClient = useQueryClient();
  const figureOutBlockData = queryClient.getQueryData<IServiceAi>([
    queryKeys.getServiceAiPage,
  ])?.figureOutBlock;

  const { width } = useWindowDimension();

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
                width && width <= 992
                  ? FigureOutImgMobile.src
                  : FigureOutImg.src
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
    </Wrapper>
  );
};

export default FigureOutBlock;
