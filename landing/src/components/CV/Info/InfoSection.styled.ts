import styled from "styled-components";
import themes from "../../../utils/themes";

export const InfoSectionContainer = styled.div`
  position: relative;
  margin-top: 100px;

  @media ${themes.primary.media.minMobile} {
    margin-top: 140px;
    height: 174px;
    display: flex;
  }
  @media ${themes.primary.media.minMobile} and (max-width: 1375px) {
    height: 200px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 180px;
    height: 270px;
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 140%;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-left: -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;
  @media ${themes.primary.media.minMobile} {
    border: none;
    border-right: 1px solid ${themes.primary.colors.darkGrey};
    width: 27.5%;
    height: 174px;
    margin-left: -51px;
    font-size: 40px;
    line-height: 1.4;
    padding-top: 59px;
  }
  @media ${themes.primary.media.minMobile} and (max-width: 1375px) {
    height: 190px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 53.333px;
    margin-left: -68px;
    height: 232px;
    padding-top: 79px;
    width: 29.88%;
  }
`;

export const InfoItemGrid = styled.div`
  @media ${themes.primary.media.minMobile} {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    margin-left: 24px;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 0;
    max-height: 300px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-left: 32px;
    column-gap: 21.3px;
    max-height: 330px;
  }
`;

export const BgImageContainer = styled.div`
  width: 676px;
  height: 242px;
  position: absolute;
  bottom: -260px;
  left: -20px;
  z-index: -3;
  @media ${themes.primary.media.minMobile} {
    bottom: -300px;
    left: -50px;
    z-index: 1;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 47vw;
    height: 16.8vw;
    bottom: -20vw;
    left: -4vw;
  }
`;
