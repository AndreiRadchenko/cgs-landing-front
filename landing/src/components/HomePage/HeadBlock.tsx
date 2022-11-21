import React, { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import boldLeftArrowMobile from "../../../public/HomePageDecoration/boldArrowLeftMobile.svg";
import boldRightArrowMobile from "../../../public/HomePageDecoration/boldArrowRightMobile.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { recoverLink } from "../../utils/recoverLink";
import ButtonArrow from "../../utils/ButtonArrow";
import Tetris from "./Tetris";
import Image from "next/image";
import { useOnScreen } from "../../hooks/useOnScreen";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const HeadBlock = () => {
  const { width } = useWindowDimension();
  const [buttonClassName, setButtonClassName] = useState<string>("main");

  const elRef = useRef<HTMLAnchorElement>(null);
  const isOnScreen = useOnScreen(elRef, true);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  useEffect(() => {
    if (isOnScreen) {
      setButtonClassName("scrolled");
      setTimeout(() => {
        setButtonClassName("scrolled removeBg");
      }, 1000);
    }
  }, [isOnScreen]);

  return (
    <Styled.HeadBlockRow>
      <Styled.HeadBlockContent>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.MainSubtitle>
          <Styled.RowContainer>
            <div>SHARP DEVS WITH PROF TECHS</div>
            <Styled.LeftArrowWrapper>
              <Image
                src={width && width > 798 ? leftArrow.src : boldLeftArrowMobile}
                alt="head block left arrow"
                layout="fill"
                objectFit="contain"
              />
            </Styled.LeftArrowWrapper>
          </Styled.RowContainer>
          <Styled.RowContainer>
            <div>TODAY BRIEFED</div>
            <Styled.RightArrowWrapper>
              <Image
                src={
                  width && width > 798 ? rightArrow.src : boldRightArrowMobile
                }
                alt="head block left arrow"
                layout="fill"
                objectFit="contain"
              />
            </Styled.RightArrowWrapper>
            <div>YESTERDAY DONE</div>
          </Styled.RowContainer>
        </Styled.MainSubtitle>
        <Styled.BlackButton
          size={"1.5em"}
          padding={"1.11em 1.5em"}
          target={"_blank"}
          href={data && data.buttonLink && recoverLink(data?.buttonLink)}
          rel="noopener noreferrer"
          className={buttonClassName}
          ref={elRef}
        >
          {width && width > 768 ? data?.button : "BOOK A CALL"}
          <Styled.ArrowContainer>
            <ButtonArrow />
          </Styled.ArrowContainer>
        </Styled.BlackButton>
        <Styled.WhatsAppTextWrapper>
          or contact via
          <Styled.WhatsAppText
            href={data?.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Styled.WhatsAppIconWrapper>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.1325 0 0 3.1325 0 7C0 8.54 0.49 9.9575 1.33 11.1125L0.3675 13.65L3.15 12.845C4.2525 13.58 5.5825 14 7 14C10.8675 14 14 10.8675 14 7C14 3.1325 10.8675 0 7 0ZM10.7275 9.905L9.975 10.64C9.1875 11.4275 7.105 10.57 5.2675 8.715C3.43 6.8775 2.6075 4.795 3.3425 4.025L4.095 3.2725C4.375 2.9925 4.8475 2.9925 5.145 3.2725L6.2475 4.375C6.6325 4.76 6.475 5.425 5.9675 5.5825C5.6175 5.705 5.3725 6.09 5.495 6.44C5.6875 7.2625 6.755 8.2775 7.5425 8.47C7.8925 8.5575 8.295 8.3475 8.4 7.9975C8.5575 7.49 9.2225 7.3325 9.6075 7.7175L10.71 8.82C10.99 9.1175 10.99 9.59 10.7275 9.905Z"
                  fill="#5869DD"
                />
              </svg>
            </Styled.WhatsAppIconWrapper>
            WhatsApp
          </Styled.WhatsAppText>
        </Styled.WhatsAppTextWrapper>
      </Styled.HeadBlockContent>
      {data?.image?.url && (
        <Styled.Tetris>
          <Tetris />
        </Styled.Tetris>
      )}
    </Styled.HeadBlockRow>
  );
};

export default HeadBlock;
