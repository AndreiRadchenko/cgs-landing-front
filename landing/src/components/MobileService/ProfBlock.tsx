import React, { useRef } from "react";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/ProfBlock.styled";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useOnScreen } from "../../hooks/useOnScreen";
import BookACallButton from "../BookACallButton";

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
      <VisibleSubtitle className="footer">{data?.title}</VisibleSubtitle>
      <Styled.ProfText>
        {data && parse(data.text.replace("|", "<br />"), options)}
      </Styled.ProfText>
      <Styled.ButtonWrapper>
        {data && (
          <BookACallButton
            buttonLink={data?.buttonLink}
            buttonText={data.button}
            withCalendly
            style={{
              padding: "1.117em 3.6em",
              fontSize: "1.5em",
            }}
          />
        )}
      </Styled.ButtonWrapper>
      <Styled.ImageWrapper>
        <Styled.Image src={data?.image.url} alt="prof block img" />
      </Styled.ImageWrapper>
    </Styled.ContentContainer>
  );
};

export default ProfBlock;
