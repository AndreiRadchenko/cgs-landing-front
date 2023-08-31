import styled from "styled-components";
import themes from "../../../utils/themes";

export const PersonalContainer = styled.div`
  position: relative;
  margin-top: 8px;
  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
    height: 21em;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 336px;
    margin-top: 130px;
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
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 75px;
    letter-spacing: 3.7px;
  }
`;

export const Role = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  line-height: 99%;
  text-transform: uppercase;
  margin: 8px 0 0 0;
  color: ${themes.primary.colors.darkBlue};

  @media ${themes.primary.media.minMobile} {
    font-size: 26px;
    margin-top: 16px;
    width: 50%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 35px;
    margin-top: 21px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 215px;
  height: 215px;
  margin: 16px auto;
  z-index: 5;

  @media ${themes.primary.media.minMobile} {
    margin: 0;
    position: absolute;
    right: 6.7em;
    max-width: 244px;
    max-height: 244px;
    width: 16.9vw;
    height: 16.9vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 325px;
    max-height: 325px;
    width: 325px;
    height: 325px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 97.6%;
  height: 97.6%;
  object-position: top left;

  @media ${themes.primary.media.minMobile} {
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
  margin: 16px 0 0 0;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.minMobile} {
    font-size: 18px;
    max-width: 800px;
    margin-top: 24px;
    width: 55%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    margin-top: 32px;
    max-width: 1070px;
    width: 63%;
  }
`;

export const BgImageContainer = styled.div`
  width: 564px;
  height: 597px;
  transform: rotateZ(5deg);
  position: absolute;
  bottom: -138px;
  right: -260px;
  z-index: -1;
  @media ${themes.primary.media.minMobile} {
    width: 564px;
    height: 596px;
    bottom: -160px;
    right: -60px;
    z-index: 2;
    transform: rotateZ(0);
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 39vw;
    height: 42vw;
    bottom: -11vw;
    right: -70px;
  }
`;
