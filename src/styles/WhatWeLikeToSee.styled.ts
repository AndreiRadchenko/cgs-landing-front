import styled from "styled-components";
import themes from "../utils/themes";

export const LikeToSeeContainer = styled.section`
  width: 100%;
  font-family: ${themes.primary.font.family.roboto};
  @media ${themes.primary.media.maxMobile} {
    font-size: ${themes.primary.font.size.buttonText};
  }
`;

export const LikeToSeeItem = styled.div`
  display: flex;
  justify-content: space-;
  align-items: center;
  &.reverseItem {
    flex-direction: row-reverse;
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
    &.reverseItem {
      flex-direction: column;
    }
  }
`;

export const LikeToSeePhotoContainer = styled.div`
  width: 40%;
  position: relative;
  top: 0;
  left: 0;
  @media ${themes.primary.media.maxMobile} {
    width: 60%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 90%;
  }
`;

export const LikeToSeeTextContainer = styled.div`
  width: 60%;
  @media ${themes.primary.media.maxMobile} {
    width: 90%;
  }
`;

export const LikeToSeeHeader = styled.p`
  width: 90%;
  position: relative;
  left: 2%;
  font-weight: ${themes.primary.font.weight.bold};
  @media ${themes.primary.media.maxMobile} {
    left: 6%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.linkText};
    left: 9%;
  }
`;
export const LikeToSeePhotoFrame = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

export const LikeToSeePhotoPerson = styled.div`
  position: absolute;
  left: 10%;
  top: 8%;
  transform: scale(0.93);
  @media ${themes.primary.media.onlyLaptop} {
    transform: scale(0.73);
    top: -1.5%;
    left: -1%;
  }

  @media ${themes.primary.media.onlyTabletLandScape} {
    transform: scale(0.68);
    top: -4%;
    left: -3%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    left: -4%;
    top: -5%;
    transform: scale(0.68);
  }
`;
export const LikeToSeePhotoClip = styled.div`
  position: absolute;
  top: -5%;
  right: 2%;
  transform: scale(0.75) rotate(65deg);
  z-index: 3;
  @media ${themes.primary.media.onlyTabletLandScape} {
    transform: scale(0.55) rotate(65deg);
    top: -15%;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    transform: scale(0.5) rotate(65deg);
    top: -21%;
    right: -8%;
  }
`;

export const LikeToSeePhotoText = styled.div`
  font-weight: ${themes.primary.font.weight.bold};
  width: 70%;
  transform: rotate(-1deg);
  position: absolute;
  top: 78%;
  left: 15%;
  @media ${themes.primary.media.maxTabletLandScape} {
    width: 70%;
    font-size: ${themes.primary.font.size.quinary};
    left: 15%;
    top: 77%;
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 8px;
    left: 15%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    left: 15%;
  }
`;
export const LikeToSeeCardTitle = styled.h2`
  position: relative;
  left: 2%;
  @media ${themes.primary.media.maxMobile} {
    left: 6%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    left: 9%;
  }
`;
export const LikeToSeeCardReqirement = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${themes.primary.font.weight.bold};
  margin: ${themes.primary.spacing.small} 0;
`;
export const LikeToSeeCardReqirementText = styled.div`
  margin-left: 5px;
  width: 90%;
`;

export const LikeToSeeCardText = styled.p`
  position: relative;
  left: 2%;
  margin-top: ${themes.primary.spacing.tertiary};
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.bold};
  @media ${themes.primary.media.maxMobile} {
    left: 4%;
  }
`;

export const LikeToSeeCardFooter = styled.div`
  position: relative;
  left: 2%;
  margin-top: ${themes.primary.spacing.tertiary};
  font-size: ${themes.primary.font.size.tertiary};
  @media ${themes.primary.media.maxMobile} {
    left: 4%;
  }
`;

export const LikeToSeeCardSubFooter = styled.div`
  position: relative;
  left: 2%;
  margin-top: ${themes.primary.spacing.small};
  font-weight: ${themes.primary.font.weight.bold};
  @media ${themes.primary.media.maxMobile} {
    left: 4%;
  }
`;
