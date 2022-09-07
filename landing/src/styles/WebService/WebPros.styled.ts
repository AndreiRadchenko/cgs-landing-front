import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 11.875em;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 4.8%;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 9.75em;
    padding: 0;
  }
`;

export const BgImage = styled.img`
  position: absolute;
  width: 106.25em;
  top: -2.53em;
  left: -7.81em;

  @media (max-width: 1250px) {
    top: -2.03em;
    width: 93.75em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    left: -12.5em;
    width: 87.5em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    left: -200px;
    width: 1400px;
  }

  @media ${themes.primary.media.minPC} {
    top: -4.28em;
    left: -12.19em;
    width: 131.25em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: -3.78em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    display: none;
  }
`;

export const BgMobileImage = styled.img`
  display: none;

  @media ${themes.primary.media.maxTabletPortrait} {
    display: block;
    position: absolute;
    height: 79%;
    top: 4em;
    left: -5.5em;
  }
`;

export const CategorySubtitle = styled.h3`
  font-weight: inherit;
  font-size: 2.125em;
  text-transform: uppercase;
  margin-top: 0;

  @media (max-width: 1250px) {
    font-size: 1.8em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1.5em;
    margin-bottom: 1.25em;
  }
`;

export const CategoryListItem = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin-top: 1.5em;
  margin-bottom: 0;

  @media (max-width: 1250px) {
    font-size: 1em;
    margin-top: 1.6em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.91em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 2.15em;
    font-size: 1.15em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.58em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
    line-height: 132%;
    margin-top: 1.56em;
  }
`;
export const ContentWrapper = styled.div`
  padding-left: 10.5%;
  padding-right: 9%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1410px) {
    padding-left: 10.5%;
    padding-right: 5%;
  }

  @media (max-width: 1310px) {
    padding-left: 12.5%;
    padding-right: 0%;
  }

  @media (max-width: 1250px) {
    padding-left: 10.5%;
    padding-right: 9%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-left: 3%;
    padding-right: 0;
  }

  @media ${themes.primary.media.minPC} {
    padding-right: 0;
  }

  @media (min-width: 1600px) {
    padding-right: 3vw;
  }
  @media (min-width: 1700px) {
    padding-right: 9vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-right: 9em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    flex-direction: column;
    padding-left: 4.5em;

    & > div {
      position: relative;

      &:first-child {
        margin-bottom: 5.25em;
      }
    }
  }
`;
