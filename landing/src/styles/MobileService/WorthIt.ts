import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 5.5em;
`;

export const ContentLayout = styled.div`
  margin-top: 5.4em;
  width: 95%;
  display: flex;
  justify-content: space-between;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 5%;
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    width: 100%;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
  }
`;

export const WorthTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.2px black;

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const WorthText = styled.p`
  margin-top: 15px;
  line-height: 160%;
  margin-left: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.oneAndHalf};

  @media ${themes.primary.media.minPCFullHD} {
    & br {
      display: none;
    }
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 1.28em;
    max-width: 20.5em;
  }
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: 0;
    transform: scale(0.8);
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: scale(0.6);
  }
`;

export const BlockImage = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxTabletLandScape} {
    display: none;
  }
`;

export const WorthBlock = styled.div`
  position: relative;
  &:nth-child(3) {
    img {
      top: 18%;
      left: -46%;
    }
    p {
      margin-left: 20px;
    }
  }
  &:nth-child(2) {
    margin-right: 1%;
    margin-top: 10.3%;
    img {
      top: 6%;
      left: -80%;
    }
    p {
      margin-left: 20px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &:nth-child(2) {
      img {
        left: -60%;
        top: 25%;
      }
    }
  }

  @media (max-width: 1300px) {
    &:nth-child(2) {
      img {
        left: -60%;
        top: 35%;
      }
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &:nth-child(n) {
      p {
        margin-left: 0;
      }
    }
    &:nth-child(2) {
      margin: 0;
    }
  }
`;
