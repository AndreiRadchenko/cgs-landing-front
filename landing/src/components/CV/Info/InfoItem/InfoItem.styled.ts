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
    &:nth-child(1) {
      margin-top: 0;
      order: 0;
    }
    &:nth-child(2) {
      margin-top: 0;
      order: 2;
    }
    &:nth-child(3) {
      order: 1;
    }
    &:nth-child(4) {
      display: block;
      order: 3;
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
  display: flex;
  justify-content: space-between;
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29.333px;
    line-height: 159%;
  }
`;

export const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  width: 36px;
  height: 36px;

  & > span {
    /* height: 36px !important;
    width: 36px !important; */
    height: 18px !important;
    width: 18px !important;
  }

  & img {
  }

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 48px;
    height: 48px;
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
    font-size: 16px;
    & p > span {
      font-size: 14px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    line-height: 150%;
    margin-top: 11px;
    & p {
      overflow: hidden;
      white-space: nowrap;
    }
    & p > span {
      font-size: 18px;
      line-height: 36px;
    }
  }
`;
