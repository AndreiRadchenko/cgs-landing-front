import React, { useRef } from "react";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/ProfBlock.styled";
import { IServiceMobile } from "../../types/Admin/Response.types";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";
import { useOnScreen } from "../../hooks/useOnScreen";

const ProfBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.footerBlock;
  const elRef = useRef(null);

  const isOnScreen = useOnScreen(elRef, true);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("rgb(186, 186, 186)")
      ) {
        return (
          <Styled.HighlightWrapper
            ref={elRef}
            className={isOnScreen ? "onScreen" : undefined}
          >
            <Styled.HighlightText>
              {domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data}
            </Styled.HighlightText>
            <Styled.Cursor />
          </Styled.HighlightWrapper>
        );
      }
    },
  };

  return (
    <Styled.ContentContainer>
      <Subtitle className="footer">{data?.title}</Subtitle>
      <Styled.ProfText>
        {data && parse(data.text.replace("|", "<br />"), options)}
      </Styled.ProfText>
      <Styled.ButtonWrapper>
        <BlackButton
          padding={"1.117em 3.6em"}
          size={"1.5em"}
          href={data?.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data?.button}
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.ButtonWrapper>
      <Styled.ImageWrapper>
        <Styled.Image src={data?.image.url} alt="prof block img" />
      </Styled.ImageWrapper>
    </Styled.ContentContainer>
  );
};

export default ProfBlock;
