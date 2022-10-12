import React, { useRef } from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import crystal from "../../../public/MobileSevice/worthIt/crystal.svg";
import cube from "../../../public/MobileSevice/worthIt/cube.svg";
import cylinder from "../../../public/MobileSevice/worthIt/cylinder.svg";
import downDashed from "../../../public/CloudServicePage/downDashed.svg";
import upDashed from "../../../public/CloudServicePage/upDashed.svg";
import * as Styled from "../../styles/OngoingSupport/WorkBlock.styled";
import { handleRandomOffset } from "../../utils/getRandomAnimationOffset";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WorkBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>(
    queryKeys.getServiceSupportPage
  )?.howDoWeWorkBlock;
  const { subtitle, ...blocks } = { ...data };
  const figures = [crystal, cube, cylinder];
  const bgi = [downDashed, upDashed];

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{subtitle}</Styled.Title>
      <MobileInfiniteText title={subtitle}></MobileInfiniteText>
      <Styled.TextWrapper ref={elRef}>
        {Object.values(blocks).map((el, idx) => (
          <Styled.Wrapper
            key={idx}
            ind={idx}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Subtitle>
              <Styled.Svg
                src={figures[idx].src}
                xOffset={handleRandomOffset()}
              />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>{el.text}</Styled.Text>
            {bgi[idx] && <Styled.BackgroundContainer src={bgi[idx].src} />}
          </Styled.Wrapper>
        ))}
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default WorkBlock;
