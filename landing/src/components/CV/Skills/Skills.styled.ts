import styled from "styled-components";
import themes from "../../../utils/themes";

export const SkillsContainer = styled.div`
  position: relative;
  margin-top: 100px;
  background-color: ${themes.primary.colors.blogBackground};

  @media ${themes.primary.media.minMobile} {
    margin-top: 140px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 180px;
  }
`;

export const Title = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 24px;
  line-height: 2.33;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  margin-left: -20px;
  width: 100vw;
  height: 56px;
  border-top: 1px solid ${themes.primary.colors.darkGrey};
  background: linear-gradient(
      90deg,
      rgba(214, 255, 187, 0.3) 0%,
      rgba(88, 105, 221, 0.3) 100%
    ),
    #f1efed;
  @media ${themes.primary.media.minMobile} {
    font-size: 40px;
    line-height: 1.4;
    text-align: left;
    border: none;
    background: transparent;
    margin-left: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 53.333px;
  }
`;

export const SkillsCardWrapper = styled.div`
  @media ${themes.primary.media.minMobile} {
    margin-top: 24px;
    margin-left: -51px;
    width: 100vw;
    display: flex;
    border-bottom: 1px solid ${themes.primary.colors.darkGrey};
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 32px;
    margin-left: -68px;
  }
`;

export const BgImageContainer = styled.div`
  width: 625px;
  height: 414px;
  transform: scale(1) rotateZ(-5deg);
  position: absolute;
  bottom: -260px;
  right: 0px;
  z-index: -2;
  @media ${themes.primary.media.minMobile} {
    bottom: -230px;
    right: -100px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 43vw;
    height: 28.8vw;
    bottom: -15vw;
    right: -7vw;
  }
`;
