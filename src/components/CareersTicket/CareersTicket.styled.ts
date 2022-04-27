import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";

interface IImageProps {
  imgUrl?: string;
}

export const TicketWrapper = styled.div`
  display: flex;
  height: 15.938rem;

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
  transform: rotate(-90deg);
  position: absolute;
  left: -4.1rem;
  top: 5.125rem;
  width: max-content;
  @media ${themes.primary.media.maxPCFullHD} {
    left: -3.2rem;
  }
  @media ${themes.primary.media.maxLaptop} {
    font-size: 0.6rem;
    top: 3.813rem;
    left: -2.4rem;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 0.8rem;
    top: 5.125rem;
    left: -2.7rem;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -2.688rem;
  }
  @media ${themes.primary.media.maxTablet} {
    left: -2.2rem;
    top: 3.813rem;
    font-size: 0.55rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -1.7rem;
    top: 2.9rem;
    font-size: 0.45rem;
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
  align-items: end;
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
  font-weight: ${themes.primary.font.weight.bold};
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
  font-weight: ${themes.primary.font.weight.bold};
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
