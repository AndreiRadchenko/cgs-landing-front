import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 5.5em;
  position: relative;
  padding-bottom: 20px;

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 0;
    margin-top: 5.375em;
    margin-bottom: -13.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  font-weight: inherit;
  font-size: 2.5em;
  line-height: 140%;
  text-transform: uppercase;
  max-width: 100%;
  //margin-bottom: 2.775em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    //line-height: 132%;
    //width: 15em;
    margin-bottom: 0.6em;
    margin-left: 0.6em;
  }
`;
export const TitleContainer = styled.div`
  width: 40em;
  margin-left: -1.1em;
  @media ${themes.primary.media.maxMobile} {
    width: 30em;
    background: linear-gradient(61.63deg, #d6ffbb 0%, #5869dd 100%);
  }
`;

export const Description = styled.p`
  width: 80%;
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  line-height: 24px;
`;
