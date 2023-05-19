import React, { useEffect, useRef, useState } from "react";
import { IServiceMobileAudit } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import * as Styled from "../../styles/MobileAuditService/HeadBlock.styled";
import TextTypingAnimation from "../Typewrite";
import { SplitBrackets } from "../../utils/splitBrackets";

import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

import MobileImage from "../../../public/MobileAuditService/mobile.svg";
import firstSearch from "../../../public/MobileAuditService/search-1.svg";
import secondSearch from "../../../public/MobileAuditService/search-2.svg";
import thirdSearch from "../../../public/MobileAuditService/search-3.svg";
import fourthSearch from "../../../public/MobileAuditService/search-4.svg";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.headerBlock;

  const [searchImageIndex, setSearchImageIndex] = useState(0);

  const searchImages = [
    firstSearch.src,
    secondSearch.src,
    thirdSearch.src,
    fourthSearch.src
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSearchImageIndex(prevIndex => (prevIndex === searchImages.length - 1 ? 0 : prevIndex + 1));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [searchImageIndex]);

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>
          {data && <TextTypingAnimation text={data?.title} />}
        </Styled.Title>
        <Styled.Description>
          <SplitBrackets text={data?.text} />
        </Styled.Description>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </Styled.Content>
      <Styled.ImageWrapper>
        <Styled.ImageMobile src={MobileImage.src} alt="hero mobile audit image" />
        <Styled.ImageSearch src={searchImages[searchImageIndex]} alt="mobile audit search image"/>    
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default HeadBlock;