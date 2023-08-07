import styled from "styled-components";
import themes from "../../../utils/themes";

export const InfoSectionContainer = styled.div`
  margin-top: 100px;

  @media ${themes.primary.media.minMobile} {
    margin-top: 140px;
    height: 174px;
    display: flex;
  }
  @media ${themes.primary.media.minMobile} and (max-width: 1375px) {
    height: 190px;
  }

  @media ${themes.primary.media.minPCFullHD} {
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
    width: 30%;
    height: 174px;
    margin-left: -51px;
    font-size: 40px;
    line-height: 56px; /* 140% */
    padding-top: 59px;
  }
  @media ${themes.primary.media.minMobile} and (max-width: 1375px) {
    height: 190px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const InfoItemGrid = styled.div`
  @media ${themes.primary.media.minMobile} {
    position: relative;
    flex: 1;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 0;
    max-height: 200px;
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;
