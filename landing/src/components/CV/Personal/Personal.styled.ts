import styled from "styled-components";
import themes from "../../../utils/themes";

export const PersonalContainer = styled.div`
  position: relative;
  margin-top: 53px;
  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 336px;
    margin-top: 140px;
  }
`;

export const PersonalContainerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media ${themes.primary.media.minMobile} {
    gap: 13.05em;
    flex-direction: row;
    align-items: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 13em;
  }
`;

export const Name = styled.h1`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.minMobile} {
    font-size: 56px;
    letter-spacing: 2.8px;
    padding-top: 39px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 75px;
    letter-spacing: 3.7px;
    padding-top: 47px;
  }
`;

export const Role = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  line-height: normal;
  text-transform: uppercase;
  margin: 8px 0 0 0;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.minMobile} {
    line-height: 160%;
    font-size: 26px;
    letter-spacing: 1.3px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 35px;
    letter-spacing: 1.733px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 215px;
  height: 215px;
  z-index: 5;
  margin-left: 18%;
  margin-top: 16px;

  @media ${themes.primary.media.minMobile} {
    max-width: 260px;
    max-height: 260px;
    width: 17.75vw;
    height: 17.75vw;
    margin-left: 0;
    margin-top: 0;
    margin-right: 42px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 340px;
    max-height: 340px;
    width: 340px;
    height: 340px;
    margin-right: 57px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 97.6%;
  height: 97.6%;
  object-position: top left;

  @media ${themes.primary.media.minMobile} {
    width: 98%;
    height: 98%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 98%;
    height: 98%;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 97.6%;
  height: 97.6%;
  border: 1.56px solid ${themes.primary.colors.black};
  background-image: linear-gradient(
    180deg,
    ${themes.primary.colors.blogBackground},
    ${themes.primary.colors.blogBackground} 50%,
    black 50%,
    black 100%
  );

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const Summary = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 1.6;
  margin: 20px 0 0 32px;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minMobile} {
    font-size: 18px;
    max-width: 720px;
    margin-top: 24px;
    margin-left: 22.8em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    margin-top: 31px;
    max-width: 1070px;
    width: 63%;
  }
`;

export const BgImageContainer = styled.div`
  position: absolute;
  bottom: -125px;
  width: 376px;
  height: 297px;
  left: -20px;

  @media ${themes.primary.media.minMobile} {
    width: 485px;
    height: 210px;
    left: -79px;
    top: 118px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 615px;
    height: 280px;
    left: -89px;
    top: 155px;
  }
`;
