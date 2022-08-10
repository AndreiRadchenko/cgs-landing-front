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
  padding: 38px 51px 90px;
  font-family: ${themes.primary.font.family.namu};
  button {
    border: none;
    outline: none;
    border-radius: 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 50px 50px 70px;
  }
`;

export const ButtonArrow = styled.img`
  position: absolute;
  right: -14px;
  top: -14px;
  width: 36px;
  height: 36px;
`;

export const BlackButton = styled.a<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;

  &.footer {
    margin-top: 10px;
    height: 4vw;
    margin-left: 20px;
  }
  @media ${themes.primary.media.onlyTabletLandScape} {
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 0.045em;
  line-height: 132px;
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
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
  @media (max-width: 1200px) {
    font-size: 76px;
  }
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeMainSubtitle};
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
  width: 38%;
  margin-left: auto;
`;

export const HeadBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8.75em;
  z-index: 2;
`;

export const Tetris = styled.img`
  position: absolute;
  width: 33.7%;
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
  width: 100%;
`;

export const Subtitle = styled.div`
  text-transform: uppercase;
  font-size: 5.14vw;
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 32px 0 40px;

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.footer {
    margin-top: ${themes.primary.spacing.tertiary};
    margin-bottom: 1.1em;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 5vw;
  }
`;

export const NextTech = styled.div`
  margin-top: 24.5em;
`;

export const FilmContainer = styled.div`
  position: relative;
  margin-bottom: 70px;
`;

export const Film = styled.img`
  width: 89.3%;
  @media (max-width: 1410px) {
    width: 97%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 100%;
  }
`;

export const FilmText = styled.div`
  position: absolute;
  top: 35.3%;
  left: 2.7%;
  max-width: 42%;
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  @media (max-width: 1410px) {
    max-width: 47.5%;
    top: 33%;
  }
  @media (max-width: 1220px) {
    font-size: 20px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
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
  width: 100%;
  background-color: ${themes.primary.colors.headerBorder};
`;

export const FooterButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-right: 13px;
`;

export const FooterLinkButton = styled.a`
  font-family: inherit;
  font-size: ${themes.primary.font.size.homeFooterButton};
  padding: 1.15rem 1.1rem;
  cursor: pointer;
  position: relative;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 20px;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
`;
