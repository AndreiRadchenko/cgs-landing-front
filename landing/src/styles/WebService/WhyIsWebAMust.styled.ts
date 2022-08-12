import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 18.7em;
`;

export const ContentLayout = styled.div`
  margin-top: 5.4em;
  width: 100%;
  display: flex;

  @media (max-width: 1400px) {
    justify-content: space-between;
  }

  @media ${themes.primary.media.minPC} {
    justify-content: space-between;
  }
`;

export const WhyIsWebTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.7px black;

  @media (max-width: 1400px) {
    font-size: 1.7em;
  }
`;

export const WhyIsWebText = styled.p`
  margin-top: 4.5%;
  line-height: 160%;
  margin-left: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.oneAndHalf};

  @media (max-width: 1400px) {
    font-size: 1.2em;
  }
  @media ${themes.primary.media.minPC} {
    font-size: 1.3em;
  }
`;

export const Icon = styled.img`
  display: flex;
  margin-right: 0.3em;
`;

export const BlockImage = styled.img`
  position: absolute;
`;

export const WhyIsWebBlock = styled.div`
  position: relative;
  margin-left: 5px;
  &:nth-child(3) {
    margin-left: 6%;
    img {
      top: 17%;
      left: -43%;
    }
    p {
      margin-left: 20px;
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
    }
  }
  @media (max-width: 1400px) {
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
  }
`;
