import styled from "styled-components";
import themes from "../../utils/themes";

interface IFontSize {
  size: string;
  padding: string;
}

export const RowContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  min-height: 90vh;
  background-color: ${themes.primary.colors.blogBackground};
  padding: 50px 50px 170px;
  font-family: ${themes.primary.font.family.namu};

  button {
    border: none;
    outline: none;
    border-radius: 0;
  }
`;

export const ButtonArrow = styled.img`
  position: absolute;
  right: -11px;
  top: -11px;
  width: 30px;
  height: 30px;
`;

export const BlackButton = styled.button<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 14px;
  }
`;

export const BigDigit = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 800;
  font-size: 150px;
  line-height: 180px;
  display: flex;
  align-items: center;
  color: ${themes.primary.colors.blogBackground};
  -webkit-text-stroke: 2px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 0.05em;
  -webkit-text-stroke: 0.5px ${themes.primary.colors.primary};
  margin: 0;
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: ${themes.primary.font.size.homeHeaderTablet};
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.homeHeaderPc};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.homeHeaderPcHd};
  }
  // @media (max-width: 1300px) {
  //   font-size: ${themes.primary.font.size.homeSmallTitle};
  // }
  @media (max-width: 1200px) {
    font-size: 76px;
  }
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.blogArticleTitle};
  line-height: 99%;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  margin: 28px 0 40px;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const RightArrow = styled.img`
  display: inline-block;
  margin: 0 10px;
  width: 115px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 88px;
  }
`;

export const LeftArrow = styled.img`
  display: inline-block;
  width: 142px;
  margin-left: 10px;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 108px;
  }
`;

export const LongArrow = styled.img`
  display: inline-block;
  width: 36%;
  //margin-left: 15px;
  @media ${themes.primary.media.maxTabletLandScape} {
    //width: 108px;
  }
`;

export const HeadBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 70px;
  z-index: 2;
`;

export const Tetris = styled.img`
  position: absolute;
  right: 122px;
  @media (max-width: 1320px) {
    right: 40px;
    width: 370px;
  }
  @media (max-width: 1400px) {
    right: 70px;
  }
`;

export const HeadBlockRow = styled(RowContainer)`
  position: relative;
  width: 100%;
`;

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 5.2vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 28px 0 40px;
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
    }
    &.underline {
      border-bottom: 2px solid ${themes.primary.colors.primary};
    }
  }
`;

export const NextTech = styled.div`
  margin-top: 390px;
`;

export const FilmContainer = styled.div`
  position: relative;
`;

export const Film = styled.img`
  width: 85%;
  @media (max-width: 1410px) {
    width: 97%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }
`;

export const FilmText = styled.div`
  position: absolute;
  top: 33%;
  left: 2.5%;
  max-width: 40%;
  font-size: ${themes.primary.font.size.articleTagDescription};
  line-height: 160%;
  @media (max-width: 1410px) {
    max-width: 47%;
    top: 31%;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 18px;
  }
  @media ${themes.primary.media.minPC} {
    font-size: ${themes.primary.font.size.menuElement};
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 30px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100vw;
  background-color: ${themes.primary.colors.headerBorder};
`;
