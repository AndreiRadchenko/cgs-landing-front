import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.7%;
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 4.8%;
`;

export const BgImage = styled.img`
  position: absolute;
  width: 1700px;
  top: -40.5px;
  left: -125px;

  @media (max-width: 1250px) {
    top: -32.5px;
    width: 1500px;
  }

  @media ${themes.primary.media.minPC} {
    top: -68.5px;
    left: -195px;
    width: 2100px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: -60.5px;
  }
`;

export const CategorySubtitle = styled.h3`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 2.835em;
  text-transform: uppercase;
  line-height: 41px;
  font-family: ${themes.primary.font.family.namu};
  margin-top: 0;

  @media (max-width: 1250px) {
    font-size: 2.3em;
  }
`;

export const CategoryListItem = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;
  margin-top: 1.5em;
  margin-bottom: 0;

  @media (max-width: 1250px) {
    font-size: 1.3em;
    margin-top: 1.6em;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: 2.15em;
    font-size: 1.35em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 1.58em;
  }
`;
export const ContentWrapper = styled.div`
  padding-left: 10.5%;
  padding-right: 12%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1410px) {
    padding-left: 10.5%;
    padding-right: 5%;
  }

  @media (max-width: 1310px) {
    padding-left: 12.5%;
    padding-right: 0%;
  }

  @media (max-width: 1250px) {
    padding-left: 10.5%;
    padding-right: 9%;
  }

  @media ${themes.primary.media.minPC} {
    padding-right: 0;
  }

  @media (min-width: 1600px) {
    padding-right: 3vw;
  }
  @media (min-width: 1700px) {
    padding-right: 9vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-right: 9em;
  }
`;
