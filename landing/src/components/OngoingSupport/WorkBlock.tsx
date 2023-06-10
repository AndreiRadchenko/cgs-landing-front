import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceSupport } from "../../types/Admin/Response.types";
import cd from "../../../public/MobileSevice/worthIt/cd.svg";
import tree from "../../../public/MobileSevice/worthIt/tree.svg";
import window from "../../../public/MobileSevice/worthIt/window.svg";
import * as Styled from "../../styles/OngoingSupport/WorkBlock.styled";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

const WorkBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.howDoWeWorkBlock;
  const { subtitle, ...blocks } = { ...data };
  const figures = [cd, tree, window];

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
              <Styled.Svg src={figures[idx].src} />
              {el.subtitle}
            </Styled.Subtitle>
            <Styled.Text>{el.text}</Styled.Text>
          </Styled.Wrapper>
        ))}
      </Styled.TextWrapper>
    </Styled.Container>
  );
};

export default WorkBlock;
