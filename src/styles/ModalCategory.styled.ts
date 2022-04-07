import styled from "styled-components";
import themes from "../utils/themes";
import Decoration from "../components/Decoration/Decoration";
import Link from "next/link";

export const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: 3em auto;
  font-family: ${themes.primary.font.family.roboto};
`;

export const NavPanel = styled.div`
  display: flex;
  width: 98%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
`;

export const ButtonContainer = styled.div`
  margin-left: -2em;

  @media ${themes.primary.media.maxMobile} {
    margin-left: -0.7em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: -1em;
  }
`;

export const CategoryTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 4em;
  margin-bottom: 2em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 1.5em;
  }
`;

export const CategoryName = styled.h2`
  font-size: 2.5em;
  margin: 10px 0 15px 0;
  position: relative;
  z-index: 2;

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.5em;
    margin: 10px 0;
  }
`;

export const CategoryUnderline = styled.div`
  width: 4em;
  border: 1px solid #000;

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 3em;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryRouteName = styled.span`
  margin-right: 4.5em;
  font-size: 1.625em;
  cursor: pointer;
  position: relative;
  padding-bottom: 0.938em;
  width: 100%;

  &:hover::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    margin: 0 auto;
    background-color: black;
  }

  &:last-child {
    margin-right: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin-right: 1em;
  }
`;

export const CategoryProjectsContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;

  @media ${themes.primary.media.minLaptop} {
    justify-content: center;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    justify-content: center;
  }

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    justify-content: space-evenly;
  }
`;

export const DecorationTextAllTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -5%;
  width: 7.4em;
  fill: ${themes.primary.colors.septenary};

  @media ${themes.primary.media.minLaptop} {
    width: 10.5em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 10em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 10em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 9em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 5.5em;
  }
`;

export const DecorationTextWebTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: 0;
  width: 5em;
  fill: ${themes.primary.colors.septenary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -0.5%;
    width: 4.2em;
  }
`;

export const DecorationTextMobileTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -5%;
  width: 8.5em;
  fill: ${themes.primary.colors.septenary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 7.5em;
  }
`;

export const DecorationTextServerTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -7%;
  width: 8em;
  fill: ${themes.primary.colors.septenary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 7em;
  }
`;

export const DecorationTextBlockChainTitle = styled(Decoration)`
  position: absolute;
  height: 1.5em;
  top: 45%;
  left: -3.5%;
  width: 13em;
  fill: ${themes.primary.colors.septenary};

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 11em;
  }
`;

export const ProjectContainer = styled.div`
  margin: 1.188em;
  width: 30%;
  height: 40.625em;

  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.minLaptop} {
    width: 27%;
    height: 37.5em;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 43%;
    height: 34.375em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 35%;
    height: 31.25em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 40%;
    height: 28.125em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 39%;
    height: 25em;
  }
`;

export const ProjectSpecifyTechnologyContainer = styled.div`
  margin: 1.188em;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    flex-direction: column;
  }
`;

export const SpecifyContentWrapper = styled.div`
  width: 40%;
  height: 100%;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 15.625em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
    height: 15.625em;
  }
`;

export const SpecifyContentImgWrapper = styled.div`
  width: 60%;
  height: 39.375em;
  position: relative;

  @media ${themes.primary.media.onlyTabletLandScape} {
    width: 60%;
    height: 21.875em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    width: 100%;
    height: 21.875em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: 15.625em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
    height: 12.5em;
  }
`;

export const MainContent = styled.div``;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectTitleName = styled.h2`
  font-size: ${themes.primary.font.size.buttonText};
  overflow-wrap: anywhere;

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.7em;
  }
`;

export const ProjectDescription = styled.span`
  display: block;
  width: 90%;
  font-size: 1em;
  line-height: 145%;
  white-space: break-spaces;
`;

export const ProjectLinkWrapper = styled(Link)``;

export const ProjectLinkText = styled.span`
  position: relative;
  z-index: 3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-family: ${themes.primary.font.family.roboto};
  cursor: pointer;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.3em;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1em;
  }
`;
