import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";

interface IImageProps {
  imgUrl?: string;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketWrapper = styled.div`
  display: flex;
  height: 15.938rem;

  flex: 50%;

  margin-bottom: 4.25rem;
  @media ${themes.primary.media.onlyLaptop} {
    margin-bottom: 0;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 4.25rem;
  }

  @media ${themes.primary.media.maxTablet} {
    margin-bottom: 0;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: auto;
    margin-bottom: 2rem;
  }
`;

export const Button = styled(TicketButton)`
  -webkit-tap-highlight-color: transparent;
`;

export const BarcodeText = styled.p`
  font-family: ${themes.primary.font.family.gilroy};
  transform: rotate(-90deg);
  position: absolute;
  left: -4.1rem;
  top: 5.125rem;
  width: max-content;
  text-size-adjust: none;
  @media ${themes.primary.media.maxPCFullHD} {
    top: 5.5rem;
    left: -3.2rem;
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 0.6rem;
    top: 3.813rem;
    left: -2.6rem;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.8rem;
    top: 5.5rem;
    left: -2.9rem;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -2.888rem;
  }
  @media ${themes.primary.media.maxMobile} {
    left: -2.2rem;
    top: 3.813rem;
    font-size: 0.55rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 8px;
    left: -2.1rem;
    top: 2.9rem;
  }
`;

export const RocketImg = styled.div.attrs(({ imgUrl }: IImageProps) => ({
  imgUrl: imgUrl,
}))`
  ${(props) => css`
    background-image: url(${props.imgUrl});
  `}
  width: 8.125rem;
  background-size: auto;
  background-repeat: no-repeat;
  display: flex;
  @media ${themes.primary.media.onlyLaptop} {
    width: 5.938rem;
    background-size: contain;
  }
  @media ${themes.primary.media.maxTablet} {
    width: 5.938rem;
    background-size: contain;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 4.531rem;
  }
`;

export const CareersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.813rem;
  @media ${themes.primary.media.onlyLaptop} {
    margin-bottom: 0.8rem;
  }
  @media ${themes.primary.media.maxTablet} {
    margin-bottom: 0.8rem;
  }
`;

export const Logo = styled.img`
  width: 7.063rem;
  height: 1.538rem;
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 5rem;
    height: 1rem;
  }
`;

export const HeaderText = styled.p`
  font-size: ${themes.primary.font.size.quinary};
  margin: 0;
`;

export const TicketText = styled.span`
  border-top: 0.5px solid ${themes.primary.colors.lightBlue};
  border-right: 0.5px solid ${themes.primary.colors.lightBlue};
  text-transform: uppercase;
  color: ${themes.primary.colors.lightBlue};
  font-size: ${themes.primary.font.size.quinary};
  padding-top: 0.25rem;
  padding-right: 0.938rem;
  font-weight: ${themes.primary.font.weight.extraBold};
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 0.5rem;
    font-size: ${themes.primary.font.size.hexadecimal};
  }
`;

export const BottomTitle = styled.h2`
  margin-bottom: 1.938rem;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.extraBold};
  font-family: ${themes.primary.font.family.gilroy};
  @media ${themes.primary.media.onlyLaptop} {
    margin-bottom: 0.938rem;
  }
  @media ${themes.primary.media.maxTablet} {
    margin-bottom: 0.938rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: 0.5rem;
    font-size: ${themes.primary.font.size.fourteenth};
  }
`;

export const BottomText = styled(TicketText)`
  display: flex;
  flex-direction: column;
  padding-right: 0;
  margin-bottom: 0.313rem;
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.hexadecimal};
  }
`;

export const BottomList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1.25rem;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.quinary};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.hexadecimal};
  }
`;

export const TicketInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;

  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 30px;
  }

  @media (max-width: 710px) {
    column-gap: 20px;
  }

  @media ${themes.primary.media.minTablet} {
    column-gap: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const TicketInnerSvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  svg {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const TicketContainer = styled.div`
  background-image: url(/CareerDecorations/outer.svg);
  background-size: 100% 100%;
  background-repeat: no-repeat;

  max-width: 616px;
  width: 100%;
  height: 265px;
  padding: 16px;
  position: relative;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 230px;
    padding: 13px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 265px;
    padding: 16px;
  }

  @media (max-width: 710px) {
    max-width: none;
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 350px;
    height: 209px;
    background-image: url(/CareerDecorations/outerMobile.svg);
    padding: 10px;
    right: 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
    height: 209px;
    background-image: url(/CareerDecorations/outerMobile.svg);
    padding: 10px;
  }
  &:hover ${TicketInnerSvgWrapper} {
    svg,
    path {
      fill: none;
    }
  }
`;

export const TicketPosition = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transform: rotate(-180deg) translateX(20px);
  writing-mode: vertical-lr;
  text-orientation: mixed;
  text-align: center;
  margin: 0;
  width: 5.764vw;

  @media (min-width: 1300px) {
    font-size: 24px;

    &.admin {
      font-size: 22px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-right: 10px;
    font-size: 1.5vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-right: 30px;
    font-size: 24px;
    width: 60px;
  }

  @media (max-width: 710px) {
    font-size: 3.39vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-right: 20px;
    width: 50px;
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 103px;
  }
`;

export const LeftDivider = styled.hr`
  width: 27%;
  height: 2.5px;
  background-color: black;
  align-self: center;
  position: absolute;
  left: -10px;
  transform: rotate(90deg);
  border: none;
  border-radius: 5px;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 2px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -22px;
    width: 35%;
  }
`;

export const RightDivider = styled.hr`
  width: 25%;
  height: 2.5px;
  background-color: black;
  align-self: center;
  position: absolute;
  transform: rotate(270deg);
  border: none;
  border-radius: 5px;
  right: -32px;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 2px;
    right: -28px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    display: none;
  }
`;

export const TicketPositionContainer = styled.div`
  padding-top: 10px;
  z-index: 2;
  @media (max-width: 1360px) {
    padding-top: 18px;
  }
  @media (max-width: 1250px) {
    padding-top: 28px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 13px;
  }

  @media (max-width: 1110px) {
    padding-top: 23px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 10px;
  }

  @media ${themes.primary.media.minTablet} {
    padding-top: 20px;
  }

  @media (max-width: 575px) {
    padding-top: 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-top: 20px;
  }
`;

export const TicketPositionTitle = styled.p`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 2.4vw;
  text-transform: uppercase;
  margin: 0;
  margin-top: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 1300px) {
    font-size: 35px;
    &.admin {
      font-size: 30px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 34px;
  }

  @media (max-width: 710px) {
    font-size: 4.79vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.25rem;
  }
`;

export const TicketPositionStack = styled.p`
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 8px;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.5vw;

  @media (min-width: 1300px) {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 20px;
  }

  @media (max-width: 710px) {
    font-size: 3.39vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
    margin-top: 4px;
  }
`;

export const TicketPositionStarsContainer = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 15px;

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 17px;
  }
`;

export const TicketPositionStars = styled.img`
  width: 2.2vw;
  height: auto;

  @media (min-width: 1300px) {
    width: 35px;
    &.admin {
      width: 20px;
    }
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    width: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 25px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 20px;
  }
`;

export const TicketDataBackground = styled.div`
  position: absolute;
  width: 70%;
  bottom: 0%;
  right: 40px;

  @media ${themes.primary.media.maxLaptop} {
    bottom: 3%;
  }

  @media (max-width: 1430px) {
    bottom: 5%;
  }
  @media (max-width: 1360px) {
    bottom: 7%;
  }
  @media (max-width: 1320px) {
    bottom: 8%;
  }
  @media (max-width: 1300px) {
    bottom: 10%;
  }
  @media (max-width: 1250px) {
    bottom: 12%;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    bottom: 8%;
  }
  @media (max-width: 1150px) {
    bottom: 11.5%;
  }
  @media (max-width: 1110px) {
    bottom: 12.5%;
  }
  @media (max-width: 1070px) {
    bottom: 13.5%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    bottom: 0;
  }

  @media (max-width: 700px) {
    bottom: 1%;
  }

  @media (max-width: 650px) {
    bottom: 7%;
  }

  @media (max-width: 600px) {
    bottom: 11%;
  }

  @media (max-width: 550px) {
    bottom: 14%;
  }

  @media (max-width: 510px) {
    bottom: 17%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 80%;
    right: 5%;
    bottom: 0;
  }
`;

export const TicketArrow = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  right: -27px;
  top: 39%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 45px;
    height: 45px;
    right: -17px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 60px;
    height: 60px;
    right: -27px;
  }

  @media (max-width: 575px) {
    width: 45px;
    height: 45px;
    right: -17px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 28px;
    height: 28px;
    right: -7px;
    top: 43%;
  }
`;
