import styled from "styled-components";
import themes from "../utils/themes";

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.articleTitle};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.blogDarkText};
  margin: 0;
  width: 90%;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.bigTitle};
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 3rem;
    margin-bottom: 1.375rem;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5rem;
    margin-bottom: 1.375rem;
  }
`;

export const Article = styled.article`
  position: relative;
`;

export const SubTitle = styled.p`
  width: 100%;
  margin-top: 28px;
  font-size: ${themes.primary.font.size.faqQuestion};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  z-index: 2;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.aboutUsCardText};
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2rem;
    font-size: 1rem;
  }
`;

export const Background = styled.div`
  overflow: hidden;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PageWrapper = styled.div`
  max-width: 973px;
  position: relative;
  margin: 88px 0 0 22px;
  display: flex;
  width: 100%;
  flex-direction: column;
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;
    border-bottom: 1px solid;
    u {
      text-decoration: none;
    }
  }
  li {
    padding-left: 12px;
    margin-bottom: 10px;
  }
  ul {
    margin-left: -1.3em;
    list-style-type: none;
    list-style-image: url(/listSquare.png);
    @media ${themes.primary.media.maxTabletPortrait} {
      list-style-image: url(/listSquareMobile.png);
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 81.08em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 40px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding: 80px 20px 0;
  }
`;

export const BannerImageContainer = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TagWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  column-gap: 20px;

  @media ${themes.primary.media.minPCFullHD} {
    justify-content: flex-start;
    height: 19.83em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 60px;
    row-gap: 20px;
    order: 2;
    width: 100%;
    height: auto;
  }

  @media ${themes.primary.media.maxMobile} {
    row-gap: 0;
    margin-top: 0;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  column-gap: 20px;
  max-width: 965px;
  margin-top: 6px;
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 70.416em;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
  }
`;

export const ArrowBackButton = styled.div`
  width: 72px;
  height: 72px;
  &:hover {
    cursor: pointer;
    & path:first-child {
      fill: ${themes.primary.colors.headerBorderHover};
    }
  }
  position: absolute;
  top: -63px;
  left: -215px;

  @media ${themes.primary.media.minPCFullHD} {
    top: -50px;
    left: -100px;
  }
  @media (max-width: 1280px) {
    left: -120px;
  }
  @media (max-width: 1370px) {
    left: -150px;
  }
  @media (max-width: 1250px) {
    left: -90px;
  }
  @media (max-width: 1160px) {
    left: -50px;
  }
  @media (max-width: 1080px) {
    left: 0;
  }
  @media (max-width: 1025px) {
    left: 0;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: 0px;
    top: -120px;
  }

  @media ${themes.primary.media.maxMobile} {
    left: -16px;
    top: -75px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -11px;
    width: 50px;
    height: 50px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
`;

export const Cont = styled.article`
  position: relative;
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2em;
  }
`;

export const TitleBg = styled.figure`
  position: absolute;
  top: 50px;
  left: -180px;
  @media ${themes.primary.media.maxPCFullHD} {
    top: 40px;
  }
  @media (max-width: 1250px) {
    left: -150px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -140px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const HeaderBottomBg = styled.div`
  position: absolute;
  top: 20px;
  right: -23%;
  @media ${themes.primary.media.maxPCFullHD} {
    right: -20%;
  }
  @media (max-width: 1260px) {
    right: -12%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -14%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const FirstHeaderBg = styled.figure`
  position: absolute;
  top: 22%;
  left: -750px;
  @media ${themes.primary.media.maxTablet} {
    display: none;
  }
`;

export const SecondHeaderBg = styled.figure`
  position: absolute;
  bottom: 26%;
  right: -500px;
  z-index: 1;
  @media ${themes.primary.media.maxPCFullHD} {
    right: -490px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -540px;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const FooterBg = styled.figure`
  position: absolute;
  bottom: 10px;
  right: -250px;
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -270px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -250px;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
