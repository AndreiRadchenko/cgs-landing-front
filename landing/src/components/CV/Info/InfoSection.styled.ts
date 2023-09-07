import styled from "styled-components";
import themes from "../../../utils/themes";

export const Wrapper = styled.div`
  margin-top: 11em;

  @media ${themes.primary.media.minPC} {
    margin-top: 18em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 9.8em;
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-left: -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;
  @media ${themes.primary.media.minMobile} {
    display: none;
  }
`;

export const Content = styled.div`
  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 5fr;
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr 7fr;
  }
`;

export const NumberItems = styled.div`
  p {
    font-family: ${themes.primary.font.family.namu};
    font-size: 2.667em;
    font-weight: ${themes.primary.font.weight.heavy};
    position: absolute;
    bottom: 0em;
    margin-left: 1.5em;
  }

  img {
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    opacity: 1;
  }
`;

export const Numbers = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 2561px) {
    div {
      p {
        margin-left: 1.2em;
        bottom: -0.2em;
      }
    }
  }

  @media (max-width: 2560px) {
    div {
      p {
        margin-left: 1.4em;
        bottom: 2px;
      }
    }
  }

  @media (max-width: 1560px) {
    div {
      p {
        margin-left: 1.4em;
        bottom: 0;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    div {
      p {
        position: relative;
        margin: 0;
        margin-left: 0.7em;
        bottom: 0.1em;
      }
    }
  }

  @media (max-width: 768px) {
    width: 50px;

    div {
      p {
        margin: 0;
        margin-left: 8px;
      }
    }
  }

  @media (max-width: 475px) {
    margin-left: -23px;
    div {
      p {
        font-size: 14px;
        margin-left: 16px;
      }
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 340px;

  @media (max-width: 475px) {
    img:first-child {
      width: 22px;
    }

    img:last-of-type {
      width: 4px;
    }
  }
`;

export const BlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media ${themes.primary.media.minPC} {
    .yellowCircle {
      width: 61.5px;
      height: 61.5px;
    }
    .dot {
      width: 13.5px;
      height: 13.5px;
    }
    gap: 5px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const BeforeBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  margin: 0 17px 0 8px;

  @media (min-width: 2561px) {
    width: 10vw;
  }

  @media (max-width: 2560px) {
    width: 10vw;
  }

  @media (max-width: 1920px) {
    width: 8.125vw;
  }

  @media (max-width: 1560px) {
    width: 8.1vw;
  }

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 1050px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 475px) {
    width: 0.5px;
    height: 24px;
    margin: 3px 0;
  }
`;

export const AfterBlock = styled.div`
  content: "";
  height: 1px;
  background-color: #8f8e93;
  top: 50%;
  margin: 0 8px 0 17px;
  width: 116px;

  &.long {
    width: 240px !important;
  }

  @media (min-width: 2561px) {
    width: 10vw;
    &.long {
      width: 16.6vw;
    }
  }

  @media (max-width: 2560px) {
    width: 10vw;
    &.long {
      width: 16.6vw;
    }
  }

  @media (max-width: 1920px) {
    width: 8.125vw;
  }

  @media (max-width: 1560px) {
    width: 8.1vw;

    &.long {
      width: 16.6vw;
    }
  }

  @media (max-width: 1200px) {
    width: 7vw;
  }

  @media (max-width: 1050px) {
    width: 6vw;
  }

  @media (max-width: 992px) {
    width: 2px;
    height: 4em;
    margin: 6px 0;
  }

  @media (max-width: 768px) {
    width: 0.5px;
    height: 24px;
    margin: 3px 0;
  }
`;

export const ContentItems = styled.div`
  width: 21vw;

  @media (min-width: 2561px) {
    &:not(:first-child) {
      margin-left: 3.1vw;
    }
  }

  @media (max-width: 2560px) {
    &:not(:first-child) {
      margin-left: 3.1vw;
    }
  }

  @media (max-width: 1920px) {
    &:not(:first-child) {
      margin-left: 2.5vw;
    }
  }

  @media (max-width: 1560px) {
    &:not(:first-child) {
      margin-left: 2.6vw;
    }
  }

  @media (max-width: 1440px) {
    &:not(:first-child) {
      margin-left: 2.5vw;
    }
  }

  @media (max-width: 1200px) {
    &:not(:first-child) {
      margin-left: 1.85vw;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 5em;

    &:not(:first-child) {
      margin-left: 0;
    }
  }

  @media (max-width: 475px) {
    margin-bottom: 1.75em;
  }
`;

export const TextContent = styled.div`
  display: flex;
  position: relative;
  margin-top: 15px;

  @media ${themes.primary.media.minPC} {
    margin-top: 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 6px;
    margin-left: -20px;
  }

  @media (max-width: 475px) {
    margin-top: -5px;
  }
`;

export const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 900;
  line-height: 160%;

  @media ${themes.primary.media.minPC} {
    font-size: 21.5px;
  }

  @media (max-width: 992px) {
    margin-bottom: 30px;
    font-size: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (max-width: 475px) {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

export const Text = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 160%;

  p {
    padding: 0;
    margin: 0;
  }

  @media ${themes.primary.media.minPC} {
    font-size: 32px;
  }

  @media (max-width: 992px) {
    font-size: 28px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }

  @media (max-width: 475px) {
    font-size: 18px;
  }
`;

export const MobileContent = styled.div`
  margin-top: 16px;
`;

export const AdvantagesItem = styled.div`
  display: flex;
  column-gap: 11px;
  position: relative;
  height: 88px;
`;

export const NumberMobileItem = styled.div`
  height: 100%;
  border: 1px solid ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextMobileItem = styled.div`
  padding-top: 18px;
`;

export const MobileNumber = styled.div`
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 20px;

  &.last::before {
    display: none;
  }

  &.last::after {
    top: 55%;
    height: 50%;
  }

  ::after {
    content: "";
    position: absolute;
    top: 70%;
    background-color: #8f8e93;
    left: 10.5px;
    height: 30%;
    width: 1px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 50px;
    background-color: #8f8e93;
    left: 10.5px;
    height: 100%;
    width: 1px;
  }
`;

export const Circle = styled.img`
  width: 22px;
`;

export const SmallCircle = styled.img`
  @media ${themes.primary.media.maxMobile} {
    width: 14px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 60%;
    left: 0.55%;
  }

  @media (max-width: 650px) {
    left: 0.7%;
    width: 13px;
  }

  @media (max-width: 560px) {
    left: 0.9%;
  }

  @media (max-width: 475px) {
    width: 12px;
    border: 4px solid #f1efed;
    position: absolute;
    top: 72%;
    left: 1.2%;

    &.last {
      top: 90%;
    }
  }

  @media (max-width: 400px) {
    left: 1.5%;
  }
`;
