import styled from "styled-components";
import themes from "../../../utils/themes";

export const PersonalContainer = styled.div`
  position: relative;
  margin-top: 8px;
  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 573px;
    margin-top: 130px;
  }
`;

export const Name = styled.h1`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 0;

  @media ${themes.primary.media.minMobile} {
    font-size: 66px;
    line-height: normal;
    letter-spacing: 3.3px;
    width: 65.5%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 88px;
    letter-spacing: 4.4px;
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
    font-size: 32px;
    margin-top: 16px;
    width: 50%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 42.667px;
    margin-top: 21px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  margin: 16px auto;
  z-index: 5;

  @media ${themes.primary.media.minMobile} {
    margin: 0;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 430px;
    max-height: 430px;
    min-width: 300px;
    min-height: 300px;
    width: 29.86vw;
    height: 29.86vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 573px;
    max-height: 573px;
    width: 573px;
    height: 573px;
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
    font-size: 22px;
    max-width: 700px;
    margin-top: 24px;
    width: 53%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 29.333px;
    margin-top: 32px;
    max-width: 933px;
    width: 53%;
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
