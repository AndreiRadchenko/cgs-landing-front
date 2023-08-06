import styled from "styled-components";
import themes from "../../../../utils/themes";

export const InfoCard = styled.div`
  width: 100%;
  margin: 16px 0 0 0;
  padding-bottom: 8px;

  border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Title = styled.h3`
  position: relative;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 160%;
  margin: 0;
  padding: 0;
  & span {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateY(50%);
    transform: rotateZ(45deg);
  }
  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Text = styled.p`
  color: ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 137.5%;
  margin: 8px 0 0 0;
  padding: 0;
  & p {
    margin: 0;
    padding: 0;
  }

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;
