import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minMobile} {
    padding-inline: 51px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 68px;
  }
`;

export const CvContainer = styled.div``;

export const CvTitle = styled.div`
  text-transform: uppercase;
  font-size: 6.166666em;
  line-height: normal;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 77px;
`;

export const SettingsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

export const FilterBlock = styled.div``;

export const Search = styled.div``;