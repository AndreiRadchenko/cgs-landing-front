import React from "react";
import parse from "html-react-parser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Subtitle } from "../../styles/MobileService/Layout";
import * as Styled from "../../styles/MobileService/ProfBlock.styled";
import { IServiceMobile } from "../../types/Admin/Response.types";
import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import ButtonArrow from "../../utils/ButtonArrow";

const ProfBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>(
    queryKeys.getServiceMobilePage
  )?.footerBlock;
  return (
    <Styled.ContentContainer>
      <Subtitle className="footer">{data?.title}</Subtitle>
      <Styled.ProfText>
        {data &&
          parse(
            data.text
              .replace(
                "||",
                `<span className="cursor" style="display:inline-block;width: 1px;height: 1.5em; background:#000;transform: translate(-0.1em, 0.3em);"></span>`
              )
              .replace("|", "<br />")
          )}
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
