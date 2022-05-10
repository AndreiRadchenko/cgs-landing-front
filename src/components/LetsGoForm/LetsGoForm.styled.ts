import styled from "styled-components";
import themes from "../../utils/themes";

export const FormTitle = styled.h1`
  text-align: center;
  font-size: ${themes.primary.font.size.quaternary};
  font-weight: ${themes.primary.font.weight.extraBold};
  margin-bottom: 3.7rem;
  @media ${themes.primary.media.maxTablet} {
    font-size: ${themes.primary.font.size.secondary};
    margin-top: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  @media ${themes.primary.media.maxTablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormImage = styled.div`
  display: flex;
  justify-content: end;
  width: 60%;
  height: 39.5rem;
  background-image: url("/LetsGo-form.png");
  margin-left: 3.75rem;
  @media ${themes.primary.media.maxLaptop} {
    background-size: contain;
    background-repeat: space;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: 0;
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: 4.5rem;
    width: 130%;
    background-repeat: no-repeat;
    height: 28rem;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    transform: translateX(-4%);
    width: 135%;
    margin-top: 2.5rem;
    height: 27rem;
    background-position: center;
  }
`;

export const FormCodeImg = styled.div`
  background-image: url("/LetsGo-form-code.png");
  background-size: contain;
  width: 73%;
  height: 9.25rem;
  background-repeat: space;
  margin-right: -47px;
  margin-top: -30px;
  @media ${themes.primary.media.maxLaptop} {
    height: 138px;
    margin-right: -49px;
    margin-top: -20px;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 108px;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    margin-right: -40px;
    margin-top: -37px;
  }
  @media ${themes.primary.media.maxTablet} {
    margin-right: -40px;
    margin-top: -52px;
    height: 8rem;
    background-repeat: no-repeat;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: -1%;
    height: 20%;
    width: 62%;
    margin-right: 10px;
  }
`;
