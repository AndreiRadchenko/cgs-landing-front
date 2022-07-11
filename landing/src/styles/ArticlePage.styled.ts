import styled from "styled-components";
import themes from "../utils/themes";

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.articleTitle};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.primary};
  margin: 0 auto;
  max-width: 945px;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.bigTitle};
  }
`;

export const SubTitle = styled.p`
  max-width: 975px;
  margin-top: 50px;
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.openSans};
  color: ${themes.primary.colors.blogDarkText};
  line-height: 160%;
  z-index: 2;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: ${themes.primary.font.size.aboutUsCardText};
  }
`;

export const Background = styled.div`
  overflow: hidden;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PageWrapper = styled.div`
  max-width: 975px;
  margin: 0 auto;
  margin-top: 50px;
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
`;

export const BannerImage = styled.img`
  width: 100%;
  max-height: 310px;
  max-width: 575px;
  object-fit: contain;
  @media ${themes.primary.media.maxTabletPortrait} {
    order: 1;
    max-width: 93%;
    max-height: none;
  }
`;

export const TagWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxTabletPortrait} {
    order: 2;
    flex-direction: row;
    flex-wrap: wrap;
    height: 130px;
    align-items: center;
  }
  @media ${themes.primary.media.maxTablet} {
    height: 110px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  max-width: 965px;
  margin-top: 6px;
  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ArrowBackButton = styled.img`
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  top: 50px;
  left: 0;
  margin-bottom: 15px;
  @media ${themes.primary.media.maxLaptop} {
    left: -100px;
  }
  @media (max-width: 1260px) {
    left: -60px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -160px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -100px;
    top: 5px;
  }
  @media (max-width: 900px) {
    left: -40px;
  }
  @media (max-width: 768px) {
    left: 10px;
    top: 0px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
`;

export const TitleBg = styled.div`
  position: absolute;
  top: 130px;
  left: 30px;

  @media ${themes.primary.media.maxPCFullHD} {
    left: 40px;
  }
  @media ${themes.primary.media.maxLaptop} {
    left: -90px;
  }
  @media (max-width: 1260px) {
    left: -80px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -150px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -12%;
    top: 50px;
  }
  @media ${themes.primary.media.maxTablet} {
    left: -6%;
  }
`;

export const HeaderBottomBg = styled.div`
  position: absolute;
  top: 20px;
  right: -23%;
  @media ${themes.primary.media.maxPCFullHD} {
    right: -17%;
  }
  @media (max-width: 1260px) {
    right: -12%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -14%;
  }
  @media ${themes.primary.media.maxTablet} {
    top: 5px;
    right: -13%;
  }
`;

export const FirstHeaderBg = styled.div`
  position: absolute;
  top: 22%;
  left: -520px;
  @media ${themes.primary.media.maxPCFullHD} {
    left: -520px;
  }
  @media ${themes.primary.media.maxLaptop} {
    left: -750px;
  }
  @media ${themes.primary.media.maxTablet} {
    left: -670px;
  }
`;

export const SecondHeaderBg = styled.div`
  position: absolute;
  bottom: 26%;
  right: -500px;

  @media ${themes.primary.media.maxPCFullHD} {
    right: -400px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -540px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -540px;
  }
  @media ${themes.primary.media.maxTablet} {
    right: -400px;
  }
`;

export const FooterBg = styled.div`
  position: absolute;
  bottom: 10px;
  right: -250px;
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -350px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -400px;
  }
`;
