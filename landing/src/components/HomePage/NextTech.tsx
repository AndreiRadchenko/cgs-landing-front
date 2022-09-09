import React from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/HomePage/General.styled";
import Partners from "../Partners/Partners";
import film from "../../../public/HomePageDecoration/photoFilm.svg";
import filmMobile from "../../../public/HomePageDecoration/photoFilmMobile.svg";
import longArrow from "../../../public/HomePageDecoration/longArrow.svg";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { IDataResponse } from "../../types/Admin/Response.types";
import ButtonArrow from "../../utils/ButtonArrow";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const NextTech = () => {
  const { width } = useWindowDimension();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FilmBlock;
  const text = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.SubtitleBlock;
  const buttonData = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.SeeAllBlock;
  return (
    <Styled.NextTech>
      <Styled.Subtitle>{text && parse(text.title)}</Styled.Subtitle>
      <Partners />
      <Styled.FilmContainer>
        {width && <Styled.Film src={width < 768 ? filmMobile.src : film.src} />}

        <Styled.FilmText>{data?.textOnFilm}</Styled.FilmText>
      </Styled.FilmContainer>
      <Styled.Subtitle className="small">
        {width && width < 475 ? (
          <>
            wide&nbsp;<span className={"blue"}>tech-range</span>
            <Styled.RowContainer>
              <Styled.LongArrow src={longArrow.src} />
              Innovative
            </Styled.RowContainer>
            customer-value
          </>
        ) : (
          <>
            <Styled.RowContainer>
              wide&nbsp;<span className={"blue"}>tech-range</span>&nbsp;
              <Styled.LongArrow src={longArrow.src} />
            </Styled.RowContainer>
            <Styled.RowContainer>Innovative customer-value</Styled.RowContainer>
          </>
        )}
      </Styled.Subtitle>
      <Styled.RightContainer>
        <Styled.BlackButton
          target={"_blank"}
          size={"1.85em"}
          padding={"18px 17px"}
          className="seeAll"
          href={buttonData?.buttonLink}
        >
          {buttonData?.button}
          <Styled.ArrowContainer>
            <ButtonArrow />
          </Styled.ArrowContainer>
        </Styled.BlackButton>
      </Styled.RightContainer>
    </Styled.NextTech>
  );
};

export default NextTech;
