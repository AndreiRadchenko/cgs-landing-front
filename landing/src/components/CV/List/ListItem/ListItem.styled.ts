import styled from "styled-components";
import themes from "../../../../utils/themes";
import { arrowOne, arrowTwo } from "../../../../styles/HomePage/General.styled";

export const ListItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1.5px solid #8F8E93;
  padding-bottom: 24px;
  padding-inline: 20px;
  margin-bottom: 52px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 30px;
    padding-inline: 25px;
    margin-bottom: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 116%;
    margin-left: -55px;
    padding-bottom: 14px;
    margin-bottom: 16px;
  }

  @media (max-width: 766px) {
    width: 106%;
    margin-left: -20px;
  }

  @media (max-width: 650px) {
    width: 107%;
  }

  @media (max-width: 550px) {
    width: 108%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 112%;
    margin-left: -20px;
  }
`;

export const ListItemTitle = styled.div``;
export const ListItemLink = styled.a<{linkHover: boolean}>`
  display: flex;
  gap: 6px;
  align-items: center;
  cursor: pointer;

  & path {
    transition: ${({ linkHover }) =>
    linkHover && "transform 1s ease-in-out"};
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s ease-in-out;
    }
  }

  p {
    font-family: ${themes.primary.font.family.namu};
    font-size: 1.5em;
    font-weight: 900;
    line-height: 130%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 5px;

    p {
      font-size: 22.5px;
      line-height: 160%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    p {
      font-size: 18px;
    }
  }
`;

export const ListItemArrowContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    width: 25px;
    height: 25px;
    margin-left: -0.55px;
    margin-top: -0.5px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 40px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 26px;
    height: 26px;
  }
`;

export const ListItemName = styled.div<{ onHover: boolean }>`
  font-family: ${themes.primary.font.family.namu};
  font-size: 2.5em;
  font-weight: 900;
  line-height: 130%;
  color: ${(props) => props.onHover ? "#5869DD" : "#000"};
  transition: 0.1s all linear;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 37.5px;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
  }
`;
export const ListItemPosition = styled.div`
  color: #8F8E93;
  font-size: 1.5em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  line-height: 130%;
  margin-top: 3px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22.5px;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
  }
`;
