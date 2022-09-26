import React from "react";
import parse, { HTMLReactParserOptions, Element } from "html-react-parser";
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
import ScrambleText from "./ScrambleText";

const NextTech = () => {
  const { width } = useWindowDimension();

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.attribs.style &&
        domNode.attribs.style.includes("color: rgb(88, 105, 221)")
      ) {
        return (
          <span className="blue">
            <ScrambleText
              text={
                domNode.children[0].type === "text" &&
                (domNode.children[0] as any).data
              }
            />
          </span>
        );
      }
    },
  };

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
      <Styled.Subtitle>{text && parse(text.title, options)}</Styled.Subtitle>
      <Partners />
      <Styled.FilmContainer>
        {width && <Styled.Film src={width < 768 ? filmMobile.src : film.src} />}

        <Styled.FilmText>{data?.textOnFilm}</Styled.FilmText>
      </Styled.FilmContainer>
      <Styled.Subtitle className="small">
        {width && width < 475 ? (
          <>
            wide&nbsp;
            <span className={"blue"}>
              <ScrambleText text={"tech-range"} />
            </span>
            <Styled.RowContainer>
              <Styled.LongArrow src={longArrow.src} />
              Innovative
            </Styled.RowContainer>
            customer-value
          </>
        ) : (
          <>
            <Styled.RowContainer>
              wide&nbsp;
              <span className={"blue"}>
                {typeof window !== "undefined" && (
                  <ScrambleText
                    text={"tech-range"}
                    topOffset={-window.innerHeight}
                  />
                )}
              </span>
              &nbsp;
              <Styled.LongArrow src={longArrow.src} />
            </Styled.RowContainer>
            <Styled.RowContainer>Innovative customer-value</Styled.RowContainer>
          </>
        )}
      </Styled.Subtitle>
      <Styled.RightContainer>
        <Styled.BlackButton
          target="_blank"
          rel="noopener noreferrer"
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
