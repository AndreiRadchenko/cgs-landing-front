import React from "react";
import * as Styled from "../../styles/HomePage/General.styled";
import leftArrow from "../../../public/HomePageDecoration/leftArrow.svg";
import rightArrow from "../../../public/HomePageDecoration/rightArrow.svg";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import { recoverLink } from "../../utils/recoverLink";

const HeadBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.EditInformationBlock;

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
          size={"18px"}
          padding={"20px 27px"}
          target={"_blank"}
          href={data && data.buttonLink && recoverLink(data?.buttonLink)}
        >
          {data?.button}
          <Styled.ButtonArrow src={buttonArrow.src} />
        </Styled.BlackButton>
      </Styled.HeadBlockContent>
      {data?.image?.url && (
        <Styled.Tetris src={data?.image.url} alt="hero image" />
      )}
    </Styled.HeadBlockRow>
  );
};

export default HeadBlock;
