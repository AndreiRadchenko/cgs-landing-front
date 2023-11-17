import styled from "styled-components";
import themes from "../../../utils/themes";

export interface IFontSize {
  size?: string;
  padding?: string;
}

export const Subtitle = styled.div`
  text-transform: uppercase;
  margin: 0;
  font-family: "NAMU";
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: normal;
  width: 100%;
  height: auto;
  margin-top: calc(
          clamp(106px, 106px + (100vw - 1800px) * ((114 - 106) / (1920 - 1800)), 114px)
  );

  font-size: calc(
    clamp(64px, 64px + (100vw - 1800px) * ((82 - 64) / (1920 - 1800)), 82px)
  );

  @media (max-width: 2310px) {
    width: 70%;
  }

  @media ${themes.primary.media.maxPCFullHD} {
    line-height: 89px;
    font-size: 64px;
    line-height: 77px;
    margin: 77px 0 0;
  }

  @media ${themes.primary.media.maxLaptop} {
    font-size: 64px;
    line-height: 77px;
    margin: 77px 0 0;
  }

  @media (max-width: 1235px) {
    width: 90%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 64px;
    margin-top: 25px;
    width: 100%;
    
    p {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    
    span {
      &.tech {
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    line-height: normal;
    font-size: calc(
      clamp(34px, 34px + (100vw - 375px) * ((64 - 34) / (768 - 375)), 64px)
    );
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 17px;

    & p {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }

    & span {
      &.blue {
        height: 5vw;
      }

      &.tech {
        height: 5vw;
      }
    }
  }

  & p {
    margin-bottom: 0;
    margin-right: 0;
  }

  & u {
    text-decoration-thickness: 3px;
    text-underline-offset: 7px;
  }

  &.footer {
    margin-block: ${themes.primary.spacing.tertiary} 0;
    line-height: 132%;
    display: inline-block;
    vertical-align: middle;
    position: relative;

    & br {
      display: none;
    }
  }

  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      height: 5vw;
      white-space: nowrap;
    }

    &.tech {
      display: inline-block;
      height: 5.5vw;
    }
  }
`;

export const ArrowWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 0.4em;
  width: 15vw;
  height: 1em;
  position: relative;
  margin-right: 22px;
  margin-bottom: 12px;

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 10px;
    width: 22vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 0.7em;
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: 0;
    margin-right: 5px;
    width: 42vw;
  }
`;
