import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { ICloudService } from "../../types/Admin/Response.types";
import { Subtitle } from "../../styles/CloudService/Layout";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import upDashed from "../../../public/CloudServicePage/upDashed.svg";
import downDashed from "../../../public/CloudServicePage/downDashed.svg";
import parse from "html-react-parser";
import * as Styled from "../../styles/CloudService/WhyItWorthIt.styled";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WhyItWorthIt = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.worthBlock;
  const { subtitle, ...blocks } = { ...data };
  const logos = [crystal, cube, cylinder];
  const bgLines = [downDashed, upDashed];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Subtitle>{subtitle}</Subtitle>
      <MobileInfiniteText title={subtitle} />
      <Styled.BlockWrapper ref={elRef}>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block
            key={index}
            ind={index}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.TitleWrapper>
              <Styled.Svg
                xOffset={handleRandomOffset()}
                src={logos[index].src}
              />
              <Styled.Title>{el.subtitle}</Styled.Title>
            </Styled.TitleWrapper>
            {bgLines[index] && <Styled.Image src={bgLines[index].src} />}
            <Styled.BlockText>{parse(el.text)}</Styled.BlockText>
          </Styled.Block>
        ))}
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default WhyItWorthIt;
