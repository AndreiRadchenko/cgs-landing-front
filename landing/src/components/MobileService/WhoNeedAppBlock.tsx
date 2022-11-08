import React, { useRef } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/MobileService/WhoNeedApps.styled";

import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { Subtitle, VisibleSubtitle } from "../../styles/MobileService/Layout";
import { SplitBrackets } from "../../utils/splitBrackets";

import WhoNeedAppsMobile from "../../../public/MobileSevice/whoNeedApps/whoNeedAppsImgMobile.svg";
import WhyWorthItMobile from "../../../public/MobileSevice/whoNeedApps/whyWorthItMobile.svg";
import TextTypingAnimation from "../Typewrite";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { useOnScreen } from "../../hooks/useOnScreen";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

interface IWhoNeedAppBlockProps {
  className?: string;
}

const WhoNeedAppBlock = ({ className }: IWhoNeedAppBlockProps) => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ]);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  const arrow = `<br /><svg
      viewBox="0 0 45 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.6912 9.88133L32.9555 1.21619L34.1816 0L45 10.731L44.9861 10.7448L44.9999 10.7585L33.6623 22L32.4365 20.7836L41.6972 11.6013L0 12.0891L0 9.88133L41.6912 9.88133Z"
        fill="black"
      />
    </svg>`;

  return (
    <Styled.Wrapper className={className}>
      <Styled.WhatDoWeUse>
        <Styled.WhatDoWeUseContainer>
          {data && (
            <VisibleSubtitle ref={elRef}>
              {(width && width <= 767 && isScrolled && (
                <TextTypingAnimation text={data.whatDoWeUse.subtitle} />
              )) ||
                data.whatDoWeUse.subtitle}
            </VisibleSubtitle>
          )}
          <Styled.SubText>
            {data && parse(data?.whatDoWeUse.text.replace("[arrow]", arrow))}
          </Styled.SubText>
        </Styled.WhatDoWeUseContainer>
        <Styled.ImageWrapper className="whatDoWeUse">
          <Styled.Image
            className="whatDoWeUse"
            src={WhyWorthItMobile.src}
            alt="what do we use img"
          />
        </Styled.ImageWrapper>
      </Styled.WhatDoWeUse>
      <Styled.WhoNeedAppsBlocks>
        <Styled.WhoNeedAppsWrapper>
          <MobileInfiniteText title={data?.whoNeedApps.subtitle} />
          <Subtitle>{data?.whoNeedApps.subtitle}</Subtitle>
          <Styled.WhoNeedSubText>
            <SplitBrackets text={data?.whoNeedApps.text} />
          </Styled.WhoNeedSubText>
        </Styled.WhoNeedAppsWrapper>

        <Styled.ImageWrapper>
          <Styled.Image src={WhoNeedAppsMobile.src} alt="who need apps img" />
        </Styled.ImageWrapper>
      </Styled.WhoNeedAppsBlocks>
    </Styled.Wrapper>
  );
};

export default WhoNeedAppBlock;
