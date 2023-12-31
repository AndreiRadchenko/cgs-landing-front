import styled from "styled-components";
import themes from "../../../utils/themes";

export const MapContainer = styled.div`
  position: relative;
  height: 21.2vw;
  width: 100vw;
  margin-left: -50px;
  @media ${themes.primary.media.maxLaptop} {
    height: 305px;
  }
  @media ${themes.primary.media.maxServiceWeb} {
    display: flex;
    justify-content: center;
    height: 305px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: -45px;
    border-top: 1px solid ${themes.primary.colors.loaderSpinner};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-left: -20px;
  }
`;

export const PointerImage = styled.div`
  position: absolute;
  top: 57%;
  left: 53%;
  width: 37px;
  height: 47px;
  transition: color 0.3s ease;
  :hover {
    color: ${themes.primary.colors.darkBlue};
    .popup {
      visibility: visible;
      opacity: 1;
    }
  }
  @media ${themes.primary.media.maxPCFullHD} {
    top: 53%;
    width: 27px;
    height: 37px;
  }
  @media ${themes.primary.media.maxMobile} {
    top: 54%;
    left: 55.25%;
    font-size: 18px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    top: 54%;
    left: 58%;
    color: ${themes.primary.colors.darkBlue};
  }
`;
