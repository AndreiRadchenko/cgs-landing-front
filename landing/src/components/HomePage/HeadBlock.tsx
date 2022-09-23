import React, { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { recoverLink } from "../../utils/recoverLink";
import ButtonArrow from "../../utils/ButtonArrow";
import Tetris from "./Tetris";

const HeadBlock = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [buttonClassName, setButtonClassName] = useState<string>("main");

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.EditInformationBlock;

  const onScroll = () => {
    const elTop = buttonRef?.current?.getBoundingClientRect().top || 0;
    const scrollY = window.scrollY;
    if (elTop - 500 <= scrollY) {
      setButtonClassName("scrolled");
      setTimeout(() => {
        setButtonClassName("scrolled removeBg");
      }, 1000);
    }
  };

  useEffect(() => {
    onScroll();
  }, []);

  return (
    <Styled.HeadBlockRow>
      <Styled.HeadBlockContent>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.MainSubtitle>
          <Styled.RowContainer>
            <div>SHARP DEVS WITH PROF TECHS</div>
            <Styled.LeftArrow src={leftArrow.src} />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <div>TODAY BRIEFED</div>
            <Styled.RightArrow src={rightArrow.src} />
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
          ref={buttonRef}
        >
          {data?.button}
          <Styled.ArrowContainer>
            <ButtonArrow />
          </Styled.ArrowContainer>
        </Styled.BlackButton>
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
