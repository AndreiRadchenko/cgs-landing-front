import React, { useRef } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/WebService/SolutionBlock.styled";

import { useQueryClient } from "@tanstack/react-query";
import { IServiceWeb } from "../../types/Admin/Response.types";
import { IServicesClassnameProps } from "../../types/Services.types";
import { queryKeys } from "../../consts/queryKeys";
import firsMobileBg from "../../../public/WebService/first-mobile.svg";
import secondMobileBg from "../../../public/WebService/second-mobile.svg";
import { useOnScreen } from "../../hooks/useOnScreen";
import TextTypingAnimation from "../Typewrite";

const SolutionBlock = ({ className }: IServicesClassnameProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.solutionBlock;

  const arrow = `<svg width="46" height="23" viewBox="0 0 46 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.1912 10.2493L33.4555 1.51497L34.6816 0.289063L45.5 11.1058L45.4861 11.1197L45.4999 11.1335L34.1623 22.4648L32.9365 21.2387L42.1972 11.983L0.5 12.4747L0.5 10.2493L42.1912 10.2493Z" fill="black"/>
</svg>
`;

  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container className={className}>
      {data && (
        <Styled.LeftSideText ref={elRef}>
          {isScrolled && (
            <TextTypingAnimation miliseconds={250} text={data.subtitle} />
          )}
        </Styled.LeftSideText>
      )}
      <Styled.BgImageFirst
        src={firsMobileBg.src}
        alt="The Best Solution for Your Idea"
      />
      <Styled.RightSideContainer>
        <Styled.RightSideText>
          {data && parse(data?.text.replace("[arrow]", arrow))}
        </Styled.RightSideText>
      </Styled.RightSideContainer>
      <Styled.BgImageSecond src={secondMobileBg.src} alt="Camping" />
    </Styled.Container>
  );
};

export default SolutionBlock;
