import React, { useRef } from "react";
import * as Styled from "../../styles/MobileService/HeadBlock";
import { IServiceMobile } from "../../types/Admin/Response.types";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import TextTypingAnimation from "../Typewrite";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";
import { IHeadServicesProps } from "../../types/Services.types";

const HeadBlock = ({
  setOnLoadCount,
  onLoadCount,
  setIsMainImagesLoaded,
}: IHeadServicesProps) => {
  const queryClient = useQueryClient();
  const elRef = useRef<HTMLDivElement>(null);
  const data = queryClient.getQueryData<IServiceMobile>([
    queryKeys.getServiceMobilePage,
  ])?.headerBlock;

  const onMainImageLoad = (e: any) => {
    setOnLoadCount((prev) => prev + 1);
    if (onLoadCount === 1) {
      setIsMainImagesLoaded(true);
    }
  };

  return (
    <Styled.Container>
      <Styled.ContentContainer>
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
              buttonClassName="social-button services"
            />
            <ButtonShareComponent className={"mobileDev"} />
          </Styled.ButtonWrapper>
        )}
      </Styled.ContentContainer>
      <Styled.Telephone
        onLoad={(e) => onMainImageLoad(e)}
        src={data?.image.url}
      />
    </Styled.Container>
  );
};

export default HeadBlock;
