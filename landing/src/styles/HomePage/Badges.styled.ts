import styled, { css } from "styled-components";

import { ILine } from "../../types/Decoration.types";

import themes from "../../utils/themes";

type BadgesData = {
  columnsNumber: number;
};

export const BadgesBlockContainer = styled.div`
  margin: 132px auto 5.58em;

  @media ${themes.primary.media.minPCFullHD} {
    margin-block: 9em 7em;
  }

  @media (max-width: 1200px) {
    margin: 80px auto 60px;
  }

  @media (max-width: 768px) {
    margin: 55px auto 45px;
  }

  @media ${themes.primary.media.minTablet} {
    margin: 50px auto 45px;
  }
`;

export const BadgesContainer = styled.div`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 32px;
  }
`;

export const BadgesData = styled.div<BadgesData>`
  display: flex;
  justify-content: space-around;
  width: 87vw;
  margin: 0 auto;

  @media ${themes.primary.media.maxMobile} {
    padding-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
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

  @media ${themes.primary.media.minPCFullHD} {
    width: 13.9em;
    height: 13.9em;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 140px;
    width: 140px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 250px;
    width: 250px;
  }

  @media ${themes.primary.media.minTablet} {
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
  top: 58%;
  transform: translateY(-50%);
  background: ${({ angle }) =>
    css`radial-gradient(
      50% 240px at ${angle},
      ${themes.primary.colors.mainGradientColor2} ,
      ${themes.primary.colors.mainGradientColor1}
    );`};
  background-size: 100% 100%;

  @media ${themes.primary.media.minPCFullHD} {
    height: 153px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 426px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
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
  display: flex;
  margin-top: 63px;

  div:nth-child(1) {
    margin-left: 14px;
    height: 115px;
    width: 227px;
  }
  div:nth-child(2) {
    margin-left: 86px;
    height: 123px;
    width: 240px;
  }
  div:nth-child(3) {
    margin-left: 130px;
    height: 123px;
    width: 253px;
  }
  div:nth-child(4) {
    margin-left: 109px;
    height: 112px;
    width: 245px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 85px;

    div:nth-child(1) {
      margin-left: 14px;
      height: 152px;
      width: 312px;
    }
    div:nth-child(2) {
      margin-left: 108px;
      height: 163px;
      width: 320px;
    }
    div:nth-child(3) {
      margin-left: 172px;
      height: 168px;
      width: 338px;
    }
    div:nth-child(4) {
      margin-left: 149px;
      height: 149px;
      width: 323px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 60px;
    row-gap: 20px;
    column-gap: 40px;
    padding: 0;
    place-items: center;

    div:nth-child(1),
    div:nth-child(2),
    div:nth-child(3),
    div:nth-child(4) {
      margin-left: 0;
    }
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 50px;
  }
`;

export const LogoImageWrapper = styled.div`
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    width: 302px;
    height: 153px;
  }

  @media ${themes.primary.media.maxServiceWeb} {
    height: 80px;
    width: 160px;
  }

  @media ${themes.primary.media.minTablet} {
    height: 60px !important;
    width: 114px !important;
  }
`;
