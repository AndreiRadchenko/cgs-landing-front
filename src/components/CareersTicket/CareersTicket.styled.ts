import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";

interface IImageProps {
  imgUrl?: string;
}

export const TicketWrapper = styled.div`
  display: flex;
  height: 15.938rem;
  margin-bottom: 68px;
  @media${themes.primary.media.maxLaptop} {
    margin-bottom: 38px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("/white-ticket-bg.png");
  width: 195px;
  height: 16.1rem;
  background-size: cover;
  @media${themes.primary.media.maxTablet} {
    height: 11.99rem;
    background-size: contain;
    width: 140px;
  }
`;

export const BarcodeImg = styled.div`
  background-image: url("/barcode.png");
  width: 20px;
  height: 224px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 14px;
  position: relative;
  @media${themes.primary.media.maxTablet} {
    background-size: contain;
    height: 150px;
  }
`;

export const Button = styled(TicketButton)``;

export const BarcodeText = styled.p`
  transform: rotate(-90deg);
  position: absolute;
  left: -51px;
  top: 82px;
  width: max-content;
  @media${themes.primary.media.maxTabletPortrait} {
    left: -43px;
  }
  @media${themes.primary.media.maxTablet} {
    left: -35px;
    top: 61px;
    font-size: 9px;
  }
`;

export const RocketImg = styled.div.attrs(({ imgUrl }: IImageProps) => ({
  imgUrl: imgUrl,
}))`
  ${props => css`
    background-image: url(${props.imgUrl});
  `}
  width: 130px;
  background-size: auto;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
  @media${themes.primary.media.maxTablet} {
    width: 95px;
    background-size: contain;
  }
`;

export const CareersWrapper = styled.div`
  background-image: url("/ticket-image.png");
  width: 27.188rem;
  padding: 15px 25px;
  background-size: cover;
  @media${themes.primary.media.maxTablet} {
    width: 20rem;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export const CareersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.813rem;
  @media${themes.primary.media.maxTablet} {
    margin-bottom: 0.8rem;
  }
`;

export const Logo = styled.img`
  width: 7.063rem;
  height: 1.538rem;
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
  padding-top: 4px;
  padding-right: 15px;
  font-weight: ${themes.primary.font.weight.bold};
`;

export const BottomContainer = styled.div`
  display: block;
  position: relative;
  height: -webkit-fill-available;
  margin: 20px -19px 0 0;
  &:after {
    content: "";
    background-image: url(/bottom-ticket.png);
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  @media${themes.primary.media.maxTablet} {
    margin: 14px -19px 0 0;
  }
`;

export const BottomTitle = styled.h2`
  margin-bottom: 31px;
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.bold};
  font-family: ${themes.primary.font.family.gilroy};
  @media${themes.primary.media.maxTablet} {
    margin-bottom: 15px;
  }
`;

export const BottomText = styled(TicketText)`
  display: flex;
  flex-direction: column;
  padding-right: 0;
  margin-bottom: 5px;
`;

export const BottomList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.span`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.quinary};
`;
