import styled, { css } from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.7em;
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

interface IMobileLine {
  grad1: string;
  grad2: string;
}

export const MobileLine = styled.div<IMobileLine>`
  display: none;
  width: 120%;
  position: relative;
  height: 24px;
  background: linear-gradient(
    ${({ grad1, grad2 }) => css`90deg,
    ${grad1} 13.67%,
    ${grad2} 90.39%`}
  );

  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  z-index: -1;
  &:not(:last-child) {
    margin-bottom: 7.56em;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
  }
`;

export const BgiContainer = styled.div`
  width: 115%;
  height: 25px;
  position: relative;
  left: -6%;
  top: 2em;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};

  @media ${themes.primary.media.minPCFullHD} {
    top: 1.3em;
  }

  @media (min-width: 2200px) {
    top: 0.6em;
  }

  @media ${themes.primary.media.onlyTabletPortrait} {
    top: 3em;
    left: -8%;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    background: none;
    border: none;
    box-shadow: none;
    height: auto;
    top: 7em;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 15em;
  margin-bottom: 2.775em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    line-height: 132%;
    width: 15em;
    margin-bottom: 1.2em;
    margin-left: -5px;
  }
`;

export const SubTextWrapper = styled.div`
  display: grid;
  font-size: 1.5em;
  line-height: 160%;

  @media ${themes.primary.media.maxMobile} {
    display: flex;
    justify-content: start;
    position: relative;
    top: -12.3em;
  }
`;

export const GridLine1 = styled.div`
  margin-top: -1.875em;
  display: grid;
  grid-template-columns: 1.26fr 1.28fr 1fr;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 0.74em;
    padding-left: 0.375em;

    & > div {
      font-size: 0.75em;
      height: 5em;
      width: 10em;
      &:not(:last-child) {
        margin-bottom: 3em;
      }
    }
  }
`;

export const GridLine2 = styled.div`
  display: grid;
  grid-template-columns: 4.63fr 3.65fr 1fr;
  margin-left: 3.5em;
  position: relative;
  left: -1.875em;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding-top: 2.7em;
    margin: 0;

    & > div {
      font-size: 0.75em;
      height: 2.33em;
      width: 15em;
      align-items: flex-start;
      & > div {
        transform: translateY(-90%);
      }
      & > p {
        transform: translateY(-65%);
      }
      &:not(:last-child) {
        margin-bottom: 5.72em;
      }

      &:first-child {
        position: relative;
        left: -100px;
      }
    }
  }
`;

export const LineTop = styled.div`
  @media ${themes.primary.media.minTabletPortrait} {
    display: none;
  }
  @media ${themes.primary.media.maxMobile} {
    display: block;
  }
`;

export const LineBottom = styled.div`
  @media ${themes.primary.media.minTabletPortrait} {
    display: block;
  }
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;
