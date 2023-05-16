import styled, { css } from "styled-components";

import { ILine } from "../../types/Decoration.types";

import themes from "../../utils/themes";

type BadgesData = {
  columnsNumber: number;
};

export const BadgesBlockContainer = styled.div`
  margin: 120px auto;
  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 80px auto;
  }
`;

export const BadgesContainer = styled.div`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 50px;
  }
`;

export const BadgesData = styled.div<BadgesData>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columnsNumber}, 1fr);
  gap: 14.5px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr 1fr;
    & > :nth-child(1) {
      grid-row: 1;
      grid-column: 1;
    }
    & > :nth-child(2) {
      grid-row: 1;
      grid-column: 2;
    }
    & > :nth-child(3) {
      grid-row: 2;
      grid-column: 2;
    }
    & > :nth-child(4) {
      grid-column: 1;
      grid-row: 2;
    }
  }
`;

export const BadgeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 200px;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 140px;
    width: 140px;
  }

  & span {
    height: 200px;
    transition: all 0.5s ease;
    @media ${themes.primary.media.maxTabletLandScape} {
      height: 140px;
      width: 140px;
    }
  }

  & span:hover {
    transform: translateY(-5%);
  }

  @media (max-width: 768px) {
    & span img {
      height: 84px !important;
    }
  }
`;

export const BgiContainer = styled.div<ILine>`
  width: 115%;
  height: 115px;
  position: absolute;
  left: -6%;
  top: 50%;
  transform: translateY(-50%);
  background: ${({ angle }) =>
    css`radial-gradient(
      50% 240px at ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  background-size: 100% 100%;

  @media ${themes.primary.media.maxMobile} {
    height: 240px;
  }
`;

export interface IMobileLine {
  grad1: string;
  grad2: string;
  ind: number;
}

export const MobileLine = styled.div<IMobileLine>`
  display: none;
  width: 120%;

  position: relative;
  left: -5%;
  height: 24px;
  background: linear-gradient(
    ${({ grad1, grad2 }) => css`90deg,
    ${grad1} 13.67%,
    ${grad2} 90.39%`}
  );

  border: 1px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  z-index: -1;
  &:not(:last-child) {
    margin-bottom: 7.56em;
  }
`;

export const LogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14.5px;
  margin-top: 67px;

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    padding: 0;
  }
`;

export const LogoImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  position: relative;
  height: 115px;
  width: 250px;

  @media ${themes.primary.media.maxServiceWeb} {
    height: 80px;
    width: 160px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 60px;
    width: 114px;
  }
`;
