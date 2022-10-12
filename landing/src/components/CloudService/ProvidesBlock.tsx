import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/CloudService/Layaut";
import { SplitBrackets } from "../../utils/splitBrackets";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";
import cloudProvidesMobile from "../../../public/CloudServicePage/cloud-provides-mobile.svg";
import * as Styled from "../../styles/CloudService/Provides.styled";
import parse from "html-react-parser";
import { useOnScreen } from "../../hooks/useOnScreen";

const ProvidesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.providesBlock;

  const { subtitle, ...blocks } = { ...data };

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Subtitle>{subtitle}</Subtitle>
      <Styled.BGImage src={cloudProvidesBgi.src} />
      <Styled.BGImageMobile src={cloudProvidesMobile.src} alt="bg image" />
      <Styled.BlockWrapper ref={elRef}>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block
            key={index}
            ind={index}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Title>
              <SplitBrackets text={el.subtitle} />
            </Styled.Title>
            <Styled.Description>{parse(el.text)}</Styled.Description>
          </Styled.Block>
        ))}
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default ProvidesBlock;
