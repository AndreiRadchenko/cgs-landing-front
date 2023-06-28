import React, { useRef } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/MobileService/WhoNeedApps.styled";

import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { IServicesClassnameProps } from "../../types/Services.types";
import { VisibleSubtitle } from "../../styles/MobileService/Layout";

import WhyWorthItMobile from "../../../public/MobileSevice/whoNeedApps/whyWorthItMobile.svg";
import WhyWorthIt from "../../../public/MobileSevice/whoNeedApps/whyWorthIt.svg";
import TextTypingAnimation from "../Typewrite";
import { useOnScreen } from "../../hooks/useOnScreen";
import NeedsAppsBenefitComponent from "../Services/NeedsAppsBenefitComponent";

const WhoNeedAppBlock = ({ className }: IServicesClassnameProps) => {
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
      {data && <NeedsAppsBenefitComponent data={data} />}
      <Styled.WhatDoWeUse>
        <Styled.ImageWrapper className="whatDoWeUse">
          <Styled.Image
            className="whatDoWeUse"
            src={WhyWorthIt.src}
            alt="what do we use img"
          />
          <Styled.ImagePhone
            className="whatDoWeUse"
            src={WhyWorthItMobile.src}
            alt="what do we use img"
          />
        </Styled.ImageWrapper>
        <Styled.WhatDoWeUseContainer>
          {data && (
            <VisibleSubtitle className="mobileDev" ref={elRef}>
              {isScrolled && (
                <TextTypingAnimation
                  miliseconds={250}
                  text={data.whatDoWeUse.subtitle}
                />
              )}
            </VisibleSubtitle>
          )}
          <Styled.SubText>
            {data && parse(data?.whatDoWeUse.text.replace("[arrow]", arrow))}
          </Styled.SubText>
        </Styled.WhatDoWeUseContainer>
      </Styled.WhatDoWeUse>
    </Styled.Wrapper>
  );
};

export default WhoNeedAppBlock;
