import styled from "styled-components";
import themes from "../../utils/themes";

import MagnifyingGlass from "../../../public/Portfolio/MagnifyingGlass.svg";

export const CvContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;

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
    padding-inline: 3.55vw;
  }
`;

export const CvTitle = styled.div`
  text-transform: uppercase;
  font-size: 6.166666em;
  line-height: normal;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 77px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 92.5px;
    margin-top: 96px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 32px;
    margin-top: 8px;
  }
`;

export const SettingsBlock = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 37.5px;
    margin-bottom: 62.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    display: block;
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;

export const FilterBlock = styled.div``;

export const CvSearchWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #8F8E93;
  gap: 8px;
  height: 30px;
  width: 232px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 290px;
    height: 37.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 50px;
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const CvSearchButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CvSearchIcon = styled.div`
  background-image: url(${MagnifyingGlass.src});
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  opacity: 0.4;

  @media ${themes.primary.media.minPCFullHD} {
    width: 25px;
    height: 25px;
  }
`;

export const CvSearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  padding-top: 5px;
  width: 80%;
  font-size: 1.33em;

  &::placeholder {
    color: #A9A5A4;
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    line-height: 120%;
  }

  @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
    }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 52px;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
  }
`;