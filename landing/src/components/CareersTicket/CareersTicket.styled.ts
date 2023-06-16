import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";

interface IImageProps {
  imgUrl?: string;
}

interface TicketHover {
  isTicketHover: boolean
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

  @media ${themes.primary.media.maxMobile} {
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
  @media ${themes.primary.media.maxMobile} {
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
  @media ${themes.primary.media.maxMobile} {
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
  @media ${themes.primary.media.maxMobile} {
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

export const TicketInner = styled.div<TicketHover>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
  position: relative;
  cursor: pointer;
  z-index: 1;
  margin-top: 33px;
  background-color: ${themes.primary.colors.careerBackground};
  padding: 25px 20px;

    &:after {
    display: ${props => props.isTicketHover ? 'block' : 'none'};
    position: absolute;
    content: '';
    background-color: ${themes.primary.colors.careerBackground};
    width: 8px;
    height: 50%; 
    top: 9px;
    right: -12px;
    border: 2px solid #000;
    z-index: 0;
    }
    
  @media (max-width: 768px) {
    width: 113%;
  }

  @media (max-width: 767px) {
    margin-left: -4em;
    width: 130%;
  }

  @media (max-width: 710px) {
    margin-left: 1.5em;
    width: 107%;
  }

  @media (max-width: 475px) {
    margin-left: 0;
    width: 102%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 107%;
    margin-left: -1em;
    margin-top: 20px;
    padding: 15px 10px;
  }
`;

export const TicketInfo = styled.div``;

export const TicketDescription = styled.div`
  margin-top: 15px;
  font-size: 18px;
  font-family: ${themes.primary.font.family.namu};

  @media (max-width: 475px) {
    width: 110%;
  }

  @media (max-width: 474px) {
    font-size: 14px;
  }
`;

export const TicketAboutWork = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;

  @media (max-width: 496px) {
    width: 130%;
  }

  @media (max-width: 475px) {
    width: 130%;
  }

  @media (max-width: 474px) {
    width: 150%;
  }
`;

export const WorkLocation = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #000;
  font-size: 18px;
  height: 46px;
  font-weight: 900;
  padding: 0px 14px;
  margin-right: 20px;
  
  p{
    margin: 0;
  }

  @media (max-width: 474px) {
    font-size: 14px;
   
  }
`;

export const WorkType = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid #000;
  font-size: 18px;
  height: 46px;
  font-weight: 900;
  padding: 0px 15px;

  p{
    margin: 0;
  }

  @media (max-width: 474px) {
    font-size: 14px;
  }
`;

export const TicketIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const TicketApplyButton = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;

  & path {
    transition: all 1s ease-in-out;
  }
  & path:nth-child(1) {
    z-index: -1;
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(2) {
      transform: translate(36px, -36px);
    }

    & path:nth-child(1) {
      transform: translate(0px, 0px);
    }
  }


  p{
    font-size: 18px;
    margin: 0;
    margin-right: 5px;
    font-family: ${themes.primary.font.family.namu};
  }

  @media (max-width: 475px) {
    p{
      font-size: 14px;
    }
  }
`;

export const Shadow = styled.div<TicketHover>`
  display: ${props => props.isTicketHover ? 'block' : 'none'};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  box-shadow: 12px 12px 0px #000000;
`;

export const TicketContainer = styled.div`
  width: 90em;
  cursor: pointer;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 70em;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 50em;
  }

  @media (max-width: 710px) {
    max-width: none;
    width: 100%;
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

export const TicketPositionTitle = styled.p<TicketHover>`
  color: ${(props) => (props.isTicketHover ? '#5869DD' : '#000')};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  margin: 0;
  text-overflow: ellipsis;

  @media (min-width: 1300px) {
    &.admin {
      font-size: 30px;
    }
  }

  @media (max-width: 474px) {
    font-size: 18px;
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
    bottom: 0;
    right: 5%;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    bottom: 7%;
  }
`;

export const TicketArrow = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 4px;

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
    width: 35px;
    height: 35px;
    right: -10px;
    top: 43%;
  }
`;
