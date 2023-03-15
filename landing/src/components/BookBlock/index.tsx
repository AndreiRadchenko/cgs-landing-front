import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
import { useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../consts/queryKeys";
import {
  Subtitle,
  FooterButtonWrapper,
  FooterWhatsAppContainer,
  FooterSection,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import ScrambleText from "../HomePage/ScrambleText";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import GetEstimationButton from "../GetEstimationButton";

const BookBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.BookCallBlock;
  const subtitleText = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.SubtitleBookBlock;

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue tech">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      }
    },
  };

  return (
    <FooterSection>
      <Subtitle className="foooter">
        {subtitleText && parse(subtitleText.title, options)}
      </Subtitle>

      <FooterWhatsAppContainer>
        {data && (
          <FooterButtonWrapper className="btn">
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
            />
            <ButtonShareComponent className="footer" />
          </FooterButtonWrapper>
        )}
      </FooterWhatsAppContainer>
    </FooterSection>
  );
};

export default BookBlock;
