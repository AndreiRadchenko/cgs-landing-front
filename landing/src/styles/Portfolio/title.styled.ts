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

export const ShortArrowWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 0.4em;
  width: 8vw;
  height: 1em;
  position: relative;
  margin-bottom: 8px;

  @media (max-width: 2560px) {
    width: 6vw;
    font-size: 0.6em;
    margin-bottom: 1px;
  }

  @media (max-width: 1560px) {
    width: 8vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    
  }

  @media ${themes.primary.media.maxTabletPortrait} {
  }

  @media ${themes.primary.media.maxMobile} {
    
  }

  @media (max-width: 475px) {
    
  }
`;

export const ArrowWrapper = styled.div`
  display: inline-block;
  margin-left: auto;
  font-size: 0.4em;
  width: 15vw;
  height: 1em;
  position: relative;
  margin-bottom: 12px;

  @media (max-width: 2560px) {
    font-size: 0.4em;
    width: 11vw;
    margin: 0 10px;
    margin-bottom: 12px;
  }

  @media (max-width: 1560px) {
    width: 10vw;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 7px;
    width: 10vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 5px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 15vw;
    margin-left: 10px;
    margin-right: 5px;
  }

  @media (max-width: 475px) {
    margin-bottom: 2px;
    font-size: 0.7em;
    width: 10vw;
  }
`;
