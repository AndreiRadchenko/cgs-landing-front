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
  margin-top: 100px;
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
  top: 100px;
  left: 0;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    left: 40px;
    top: 90px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
`;

export const TitleBg = styled.div`
  position: absolute;
  top: 180px;
  left: 1%;

  @media ${themes.primary.media.maxPCFullHD} {
    left: -7%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    left: -16%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -15.5%;
    top: 55px;
  }
  @media ${themes.primary.media.maxTablet} {
    left: -6%;
  }
`;

export const HeaderBottomBg = styled.div`
  position: absolute;
  top: 20px;
  right: -20%;
  @media ${themes.primary.media.maxPCFullHD} {
    right: -10%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -14%;
  }
  @media ${themes.primary.media.maxTablet} {
    top: 5px;
    right: -10%;
  }
`;

export const FirstHeaderBg = styled.div`
  position: absolute;
  top: 22%;
  left: -500px;
  @media ${themes.primary.media.maxPCFullHD} {
    left: -500px;
  }
  @media ${themes.primary.media.maxLaptop} {
    left: -700px;
  }
  @media ${themes.primary.media.maxTablet} {
    left: -80%;
  }
`;

export const SecondHeaderBg = styled.div`
  position: absolute;
  bottom: 25%;
  right: -500px;

  @media ${themes.primary.media.maxPCFullHD} {
    right: -400px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -520px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -510px;
  }
  @media ${themes.primary.media.maxTablet} {
    right: -400px;
  }
`;

export const FooterBg = styled.div`
  position: absolute;
  bottom: -1%;
  right: -12%;
  @media ${themes.primary.media.maxTabletLandScape} {
    right: -33%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    right: -33%;
  }
`;
