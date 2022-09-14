import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.5em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: inherit;
  font-size: ${themes.primary.font.size.reviewTitle};
  line-height: 140%;
  text-transform: uppercase;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.5em;
  }
`;

export const BlockWrapper = styled.div`
  margin-top: 3.56em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 3.12em;
    display: flex;
  }

  & p {
    font-size: ${themes.primary.font.size.oneAndHalf};
    line-height: 160%;

    @media ${themes.primary.media.maxMobile} {
      font-size: 1.125em;
    }
  }
`;

export const TopSteps = styled.div`
  display: grid;
  grid-template-columns: 5.37fr 5.71fr 1fr;
  margin-left: 5px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    width: 15em;

    & > div {
      height: 5.625em;
      margin-bottom: 2.875em;

      &:nth-child(2) {
        margin-top: 3em;
        height: 2.625em;
        margin-left: 5.25em;
      }

      &:last-child {
        height: 2.625em;
        margin-top: 3em;
        margin-left: 12.125em;
      }
    }
  }
`;

export const BottomSteps = styled.div`
  display: grid;
  grid-template-columns: 1.46fr 1fr;
  margin-left: 18.125em;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
    margin-left: -3em;
    margin-top: 3em;

    & > div {
      align-items: flex-start;
      height: 2.625em;
      width: 9em;

      &:first-child {
        margin-bottom: 8.5em;
      }

      &:last-child {
        height: 5.625em;
        margin-left: -12em;
      }

      & > div {
        transform: translateY(-90%);
      }
      & > p {
        transform: translateY(-65%);
      }
    }
  }
`;

export const StyledLine = styled.div`
  width: 102vw;
  height: 1.5em;
  position: absolute;
  top: 42.5%;
  left: -5%;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxMobile} {
    top: 0;
    width: 320%;
    left: -10%;

    &:first-child {
      top: 4.8em;
    }

    &:nth-child(2) {
      left: -100%;
      top: 13.3em;
    }
    &:nth-child(3) {
      left: -200%;
      top: 21.7em;
    }
  }
`;
