import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 13.375em;

  @media ${themes.primary.media.maxMobile} {
    margin-top: 11.25em;
  }
`;

export const ContentLayout = styled.div`
  margin-top: 3.5em;
  width: 98.4%;
  display: flex;

  /* @media (max-width: 1400px) {
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPC} {
    justify-content: space-between;
  } */

  @media ${themes.primary.media.maxMobile} {
    margin-top: 2.56em;
    width: 100%;
    flex-direction: column;
    row-gap: 2.125em;
  }
`;

export const WhyIsWebTitleContainer = styled.div`
  font-size: 1.5em;
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  -webkit-text-stroke: 0.7px black;

  /* @media (max-width: 1400px) {
    font-size: 1.7em;
  } */

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.25em;
    list-style: 160%;
    column-gap: 5px;
    -webkit-text-stroke: 0.2px black;
    width: 16em;
  }
`;

export const WhyIsWebText = styled.p`
  margin-top: 1.28em;
  line-height: 160%;
  margin-left: 10px;
  font-size: 1.125em;

  /* @media (max-width: 1400px) {
    font-size: 1.2em;
  }
  @media ${themes.primary.media.minPC} {
    font-size: 1.3em;
  } */

  @media ${themes.primary.media.maxMobile} {
    font-size: 1em;
    margin: 0;

    & br {
      display: none;
    }
  }
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;

  @media ${themes.primary.media.maxMobile} {
    width: 1.6em;
  }
`;

export const BlockImage = styled.img`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const WhyIsWebBlock = styled.div`
  position: relative;
  margin-left: 5px;

  &:first-child {
    @media ${themes.primary.media.maxMobile} {
      img {
        width: 1.2em;
      }
    }
  }

  &:nth-child(3) {
    margin-left: 6%;
    img {
      top: 17%;
      left: -43%;
    }
    p {
      margin-left: 20px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;

      p {
        margin: 0;
      }
    }
  }
  &:nth-child(2) {
    margin-left: 5%;
    margin-top: 12%;
    img {
      top: 16%;
      left: -65%;
    }
    p {
      margin-left: 20px;
      margin-bottom: 7px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin: 0;

      p {
        margin: 0;
      }
    }
  }
  /* @media (max-width: 1400px) {
    &:nth-child(3) {
      margin-left: 2%;
      img {
        top: 17%;
        left: -43%;
      }
      p {
        margin-left: 20px;
      }
    }
    &:nth-child(2) {
      margin-left: 3%;
      margin-top: 12%;
      img {
        top: 16%;
        left: -65%;
      }
      p {
        margin-left: 20px;
      }
    }
  } */

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
  }
`;
