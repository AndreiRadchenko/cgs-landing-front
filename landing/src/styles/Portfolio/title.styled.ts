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
  font-size: calc(
    clamp(74px, 74px + (100vw - 1440px) * ((92 - 74) / (1920 - 1440)), 92px)
  );
  line-height: calc(
    clamp(89px, 89px + (100vw - 1440px) * ((110 - 89) / (1920 - 1440)), 110px)
  );

  & p {
    margin-top: calc(
      clamp(77px, 77px + (100vw - 1440px) * ((107 - 77) / (1920 - 1440)), 107px)
    );
    margin-bottom: 0;
    padding-right: 51px;

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
    font-size: calc(
      clamp(32px, 32px + (100vw - 375px) * ((60 - 32) / (768 - 375)), 60px)
    );
    line-height: calc(
      clamp(38px, 38px + (100vw - 375px) * ((72 - 38) / (768 - 375)), 72px)
    );
    margin-bottom: 0;
    margin-top: 0;

    & p {
      margin-top: calc(
        clamp(7px, 7px + (100vw - 375px) * ((18 - 7) / (768 - 375)), 18px)
      );
    }

    span {
      &.tech {
        width: 24.305vw;
        height: 5vw;
      }
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
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

  &.careers {
    margin-left: -5px;
    width: 12vw;
  }

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

    &.careers {
      margin-left: -5px;
      width: 14vw;
      margin-bottom: -1.5px;
    }
  }

  &.nextTech {
    width: 35vw;
    position: relative;

    @media (min-width: 2560px) {
      width: 45vw;
    }

    @media (min-width: 1500px) and (max-width: 1597px) {
      width: 34vw;
    }

    @media (min-width: 1371px) and (max-width: 1436px) {
      width: 34vw;
    }

    @media (max-width: 768px) {
      width: 38vw;
      height: 1.8em;
      margin-bottom: -1px;
      margin-left: 0;
    }

    @media (max-width: 474px) {
      width: 119px;
      margin-left: -1px;
      margin-bottom: -8px;
    }
  }
`;

export const HomePageArrowWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-bottom: 12px;

  &.homePageSubtitleLeftArrow {
    width: 138px;
    height: 2.2em;
    top: 8px;
    margin-left: -1px;
    margin-bottom: 5px;
    min-width: 97px;
  }

  &.homePageSubtitleRightArrow {
    width: 122px;
    height: 2.4em;
    top: 10px;
    margin-right: -1px;
    margin-left: -1px;
    margin-bottom: 5px;
  }

  @media (min-width: 1800px) {
    &.homePageSubtitleLeftArrow {
      width: 185px;
    }

    &.homePageSubtitleRightArrow {
      width: 162px;
      margin-left: 1px;
      margin-right: 1px;
    }
  }

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

    &.homePageSubtitleLeftArrow {
      width: 70px;
      height: 2.2em;
      top: 6px;
      min-width: 70px;
    }

    &.homePageSubtitleRightArrow {
      width: 80px;
      height: 2.4em;
      top: 8px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 5px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 15vw;
    margin-left: 10px;
    margin-right: 5px;

    &.homePageSubtitleLeftArrow {
      position: absolute;
      max-width: 0px;
      max-height: 0px;
      overflow: hidden;
    }

    &.homePageSubtitleRightArrow {
      width: 4.8vw;
      height: 4.8vw;
      top: 12px;
      margin-left: -5px;
      margin-right: -5px;
    }
  }

  @media (max-width: 475px) {
    margin-bottom: 2px;
    font-size: 0.7em;
    width: 10vw;

    &.homePageSubtitleRightArrow {
      width: 6vw;
      height: 3vw;
      top: 5px;
      margin-left: -2px;
    }
  }
`;
