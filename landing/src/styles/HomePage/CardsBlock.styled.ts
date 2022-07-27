import styled from "styled-components";
import themes from "../../utils/themes";

export const BigDigit = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 150px;
  line-height: 150px;

  margin: 0;
  margin-right: 25px;
  color: ${themes.primary.colors.blogBackground};
  -webkit-text-stroke: 2px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 120px;
    line-height: 120px;
  }
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 100px;
`;

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & img {
    position: absolute;
  }

  &:nth-child(2n - 1) {
    & img {
      top: -70%;
      left: 30%;
    }
  }

  &:nth-child(2n) {
    justify-self: flex-end;
    & img {
      top: -80%;
      right: 40%;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &:nth-child(2n - 1) {
      & img {
        top: -70%;
        left: 15%;
      }
    }

    &:nth-child(2n) {
      justify-self: flex-end;
      & img {
        top: -100%;
        right: 5%;
      }
    }
  }
`;

export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.homeCardSubtitle};
  display: flex;
  align-items: flex-end;
`;

export const CardSubtitle = styled.div``;

export const CardContent = styled.p`
  line-height: 160%;
  margin-top: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  max-width: 720px;
  font-size: ${themes.primary.font.size.homeCardText};
  display: inline-block;

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: ${themes.primary.font.size.linkText};
  }
`;

export const CardImage = styled.img``;
