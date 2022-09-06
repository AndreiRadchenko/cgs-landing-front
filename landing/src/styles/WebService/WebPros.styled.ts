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
  width: 1700px;
  top: -40.5px;
  left: -125px;

  /* @media (max-width: 1250px) {
    top: -32.5px;
    width: 1500px;
  }

  @media ${themes.primary.media.minPC} {
    top: -68.5px;
    left: -195px;
    width: 2100px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: -60.5px;
  } */

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const BgMobileImage = styled.img`
  display: none;

  @media ${themes.primary.media.maxMobile} {
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

  /* @media (max-width: 1250px) {
    font-size: 2.3em;
  } */

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
    margin-bottom: 1.25em;
  }
`;

export const CategoryListItem = styled.p`
  font-size: 1.125em;
  line-height: 160%;
  margin-top: 1.5em;
  margin-bottom: 0;

  /* @media (max-width: 1250px) {
    font-size: 1.3em;
    margin-top: 1.6em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 2.15em;
    font-size: 1.35em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.58em;
  } */

  @media ${themes.primary.media.maxMobile} {
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

  /* @media (max-width: 1410px) {
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
  } */

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    padding: 0 0 0 4.5em;

    & > div {
      position: relative;

      &:first-child {
        margin-bottom: 5.25em;
      }
    }
  }
`;
