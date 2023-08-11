import styled from "styled-components";
import themes from "../../../../utils/themes";

export const InfoCard = styled.div`
  width: 100%;
  flex: 1;
  margin: 16px 0 0 0;
  padding-bottom: 8px;

  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  @media ${themes.primary.media.minMobile} {
    width: 49.2%;
    &:nth-child(2n + 1) {
      margin-top: 0;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    flex: 0;
    padding-bottom: 10.67px;
  }
`;

export const Title = styled.h3`
  position: relative;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  margin: 0;
  padding: 0;
  & span {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(50%);
    transform: rotateZ(45deg);
  }
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29.333px;
    line-height: 159%;
  }
`;

export const Text = styled.div`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 137.5%;
  margin: 8px 0 0 0;
  padding: 0;
  & p {
    margin: 0;
    padding: 0;
  }
  & p > span {
    font-size: 14px;
  }

  @media ${themes.primary.media.minMobile} {
    font-size: 18px;
    & p > span {
      font-size: 14px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    line-height: 150%;
    margin-top: 11px;
    & p > span {
      font-size: 18px;
      line-height: 36px;
    }
  }
`;
