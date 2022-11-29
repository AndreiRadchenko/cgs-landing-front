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
import WhatsAppComponent from "./WhatsAppComponent";
import { PopupModal } from "react-calendly";

const HeadBlock = () => {
  const { width } = useWindowDimension();
  const [buttonClassName, setButtonClassName] = useState<string>("main");
  const [calendlyIsOpen, setCalendlyIsOpen] = useState<boolean>(false);

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

  const handleCalendyClose = () => {
    setCalendlyIsOpen(false);
  };

  const handleCalendyOpen = () => {
    setCalendlyIsOpen(true);
  };

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
          rel="noopener noreferrer"
          className={buttonClassName}
          ref={elRef}
          id="root"
          onClick={handleCalendyOpen}
        >
          {width && width > 768 ? data?.button : "BOOK A CALL"}
          <Styled.ArrowContainer>
            <ButtonArrow />
          </Styled.ArrowContainer>
        </Styled.BlackButton>
        {data && elRef.current && (
          <PopupModal
            url={recoverLink(data.buttonLink)}
            rootElement={elRef.current}
            onModalClose={handleCalendyClose}
            open={calendlyIsOpen}
          />
        )}
        <WhatsAppComponent />
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
