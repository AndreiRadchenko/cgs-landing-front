import styled from "styled-components";
import themes from "../../utils/themes";

export interface IFontSize {
  size?: string;
  padding?: string;
}

export const Subtitle = styled.div`
  text-transform: uppercase;
  margin: 32px 0 0;
  font-family: "NAMU";
  font-style: normal;
  font-weight: 900;
  font-size: 96px;
  line-height: 89px;

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 74px;
  }

  & p {
    margin-bottom: 0;
    @media ${themes.primary.media.maxMobile} {
      margin-top: 16px;
    }
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
      width: 29.305vw;
      height: 5.5vw;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0;
    margin-top: 0;

    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 32px;
    line-height: 38px;

    & span {
      &.blue {
        width: 40.805vw;
        height: 5vw;
      }

      &.tech {
        width: 5.8em;
        height: 5vw;
      }
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
