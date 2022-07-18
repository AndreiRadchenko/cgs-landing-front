import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";

interface IImageProps {
  imgUrl?: string;
}

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

export const ImageWrapper = styled.div`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: space-between;
  background-image: url("/white-ticket-bg.png");
  width: 12.188rem;
  height: 16.1rem;
  background-size: cover;
  @media ${themes.primary.media.onlyLaptop} {
    height: 11.99rem;
    background-size: contain;
    width: 8.75rem;
  }
  @media ${themes.primary.media.maxTablet} {
    height: 11.99rem;
    background-size: contain;
    width: 8.75rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 6.771rem;
    height: 8.869rem;
  }
`;

export const BarcodeImg = styled.div`
  background-image: url("/barcode.png");
  width: 1.25rem;
  height: 14rem;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0.875rem;
  position: relative;
  @media ${themes.primary.media.onlyLaptop} {
    background-size: contain;
    height: 9.375rem;
  }
  @media ${themes.primary.media.maxTablet} {
    background-size: contain;
    height: 9.375rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 7.4rem;
    margin: 0;
    align-self: center;
    margin-left: 0.625rem;
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

export const CareersWrapper = styled.div`
  background-image: url("/ticket-image.png");
  width: 27.188rem;
  padding: 0.938rem 1.625rem;
  background-size: cover;
  @media ${themes.primary.media.onlyLaptop} {
    width: 20rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media ${themes.primary.media.maxTablet} {
    width: 20rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 15.063rem;
    height: 8.869rem;
    padding: 0.55rem;
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

export const BottomContainer = styled.div`
  display: block;
  position: relative;
  min-height: 100%;
  height: -webkit-fill-available;
  margin: 1.25rem -1.188rem 0 0;
  &:after {
    content: "";
    background: url("/bottom-ticket.png");

    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    mask-size: 100% 60%;
    -webkit-mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0)
    );
    -webkit-mask-size: 100% 60%;
    background-size: contain;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  @media ${themes.primary.media.onlyLaptop} {
    margin: 0.875rem -1.188rem 0 0;
  }
  @media ${themes.primary.media.maxTablet} {
    margin: 0.875rem -1.188rem 0 0;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0.3rem -1.188rem 0 0;
    width: 14.2rem;
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
  &:hover {
    cursor: pointer;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 13px;
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
  width: 19%;
  justify-content: center;
  align-items: center;
  align-self: center;
  transform: rotate(270deg) translateY(-20px);
  margin: 0;
  text-transform: uppercase;
`;

export const LeftDivider = styled.hr`
  width: 27%;
  height: 2.5px;
  background-color: black;
  align-self: center;
  position: absolute;
  transform: rotate(270deg);
  border: none;
  border-radius: 5px;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 2px;
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
`;

export const TicketPositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  z-index: 2;
  @media (max-width: 1360px) {
    padding-top: 18px;
  }
  @media (max-width: 1250px) {
    padding-top: 28px;
  }
  @media (max-width: 1150px) {
    padding-top: 33px;
  }
  @media (max-width: 1110px) {
    padding-top: 38px;
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
`;

export const TicketPositionStack = styled.p`
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 8px;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.3vw;
`;

export const TicketPositionStarsContainer = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 15px;
`;

export const TicketPositionStars = styled.img`
  width: 2.2vw;
  height: auto;
`;

export const TicketDataBackground = styled.img`
  position: absolute;
  width: 70%;
  bottom: 8%;
  right: 40px;
  @media (max-width: 1360px) {
    bottom: 9%;
  }
  @media (max-width: 1320px) {
    bottom: 10%;
  }
  @media (max-width: 1300px) {
    bottom: 12%;
  }
  @media (max-width: 1250px) {
    bottom: 14%;
  }
  @media (max-width: 1200px) {
    bottom: 16%;
  }
  @media (max-width: 1150px) {
    bottom: 17.5%;
  }
  @media (max-width: 1110px) {
    bottom: 18.5%;
  }
  @media (max-width: 1070px) {
    bottom: 19.5%;
  }
`;

export const TicketArrow = styled.img`
  max-width: 49px;
  width: 100%;
  height: 100%;
  max-height: 49px;
  position: absolute;
  right: -14px;
  top: 40%;
`;
