import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { ILine } from "../../types/Decoration.types";
import { slideRight } from "../Animations.styled";

export const Container = styled.div`
  margin-top: 12.5em;
  position: relative;
  height: 805px;
  margin-bottom: 220px;
  @media ${themes.primary.media.maxTabletPortrait} {
    padding-bottom: 50px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 0;
    margin-top: 5.375em;
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
  margin: 0;
  margin-bottom: 1em;

  @media ${themes.primary.media.maxMobile} {
    font-size: 1.45em;
    line-height: 132%;
    width: 15em;
    margin-bottom: 0.6em;
    margin-left: -5px;
  }
`;
export const GradientLineContainer = styled.div`
  position: relative;
  height: 78%;
`;

export const GradientLine = styled.div`
  position: absolute;
  height: 100%;
  width: 24px;
  background: linear-gradient(
    0deg,
    ${themes.primary.colors.mainGradientColor1} 13.67%,
    ${themes.primary.colors.mainGradientColor2} 90.39%
  );
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;

export const SubtitlesList = styled.div`
  margin-left: 14px;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ListItem = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 1.8125em;
`;

export const ListText = styled.span``;

export const PointWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 37px;
`;
export const PointLine = styled.div`
  width: 70px;
  border-bottom: 1px solid ${themes.primary.colors.primary};
`;

export const PointCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.primary};
  box-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;
// export const ContentContainer = styled.div`
//   width: 75%;
//   margin-right: 15%;
//   margin-top: auto;
//   margin-bottom: auto;
//   @media ${themes.primary.media.maxMobile} {
//   }
// `;

// export const BgiContainer = styled.div<ILine>`
//   width: 2.5%;
//   height: 48em;
//   //position: relative;
//   left: -6%;
//   top: 2em;
//   background: ${({ angle }) =>
//     css`radial-gradient(
//                   100% 500px at 50% ${angle},
//                   ${themes.primary.colors.mainGradientColor2} ,
//                   ${themes.primary.colors.mainGradientColor1}
//           );`};
//   background-size: 100% 100%;
//   border: 1px solid ${themes.primary.colors.black};
//   box-shadow: 7px 2px 0px ${themes.primary.colors.black};

//   @media ${themes.primary.media.minPCFullHD} {
//     top: 1.3em;
//   }

//   @media (min-width: 2200px) {
//     top: 0.6em;
//   }

//   @media ${themes.primary.media.onlyTabletPortrait} {
//     top: 3em;
//     left: -8%;
//   }

//   @media ${themes.primary.media.maxMobile} {
//     position: relative;
//     background: none;
//     border: none;
//     box-shadow: none;
//     height: auto;
//     top: 1em;
//   }
// `;

// interface IMobileLine {
//   grad1: string;
//   grad2: string;
//   ind: number;
// }

// export const MobileLine = styled.div<IMobileLine>`
//   display: none;
//   height: 40em;
//   width: 300%;

//   position: relative;
//   left: -5%;
//   background: linear-gradient(
//     ${({ grad1, grad2 }) => css`0deg,
//           ${grad1} 13.67%,
//           ${grad2} 90.39%`}
//   );

//   border: 1px solid ${themes.primary.colors.black};
//   box-shadow: 7px 2px 0px ${themes.primary.colors.black};
//   z-index: -1;
//   &:not(:last-child) {
//     margin-bottom: 7.56em;
//   }

//   @media ${themes.primary.media.maxMobile} {
//     display: block;
//     position: relative;
//     //opacity: 0;
//     &.scrolled {
//       animation: ${({ ind }) => css`
//         ${slideRight} 1.5s ${ind * 200}ms forwards
//       `};
//     }
//   }
// `;

// export const SubTextWrapper = styled.div`
//   display: contents;
//   font-size: 1.5em;
//   line-height: 160%;

//   @media ${themes.primary.media.maxMobile} {
//     display: flex;
//     justify-content: start;
//     position: relative;
//     top: -12.3em;
//   }
// `;

// export const GridLine = styled.div`
//   margin-top: 0.875em;
//   margin-left: 0.35em;
//   display: block;
//   position: absolute;
//   grid-template-columns: 1.26fr 1.28fr 1fr;

//   @media ${themes.primary.media.maxMobile} {
//     display: block;
//     margin-top: 0.74em;
//     padding-left: 0.375em;

//     & > div {
//       font-size: 0.75em;
//       height: 5em;
//       width: 10em;
//       &:not(:last-child) {
//         margin-bottom: 3em;
//       }
//     }
//   }
// `;

// export const GlassContainer = styled.div`
//   margin-top: 30em;
//   margin-left: 60em;
//   display: relative;

//   @media ${themes.primary.media.maxMobile} {
//     margin: auto;
//   }
// `;

// export const LineContainer = styled.div`
//   display: flex;
// `;

// export const MobileLineText = styled.p`
//   //margin-left: 2em;
//   text-transform: uppercase;
// `;
