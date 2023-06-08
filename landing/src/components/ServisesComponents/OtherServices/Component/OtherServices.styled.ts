import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  box-sizing: border-box;
  margin-top: 139px;
  margin-bottom: 139px;
  padding: 0 68px 0 68px;
  height: 492px;
  width: 100vw;
  margin-left: -68px;
  background-color: rgba(143, 142, 147, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${themes.primary.media.maxPCFullHD} {
    margin-left: -57.8px;
    padding: 0 57.8px;
  }

  @media ${themes.primary.media.maxLaptop} {
    margin-left: -51px;
    padding: 0 51px;
  }

  @media (${themes.primary.media.maxServiceWeb}) {
    flex-direction: column-reverse;
    margin-top: 80px;
    margin-bottom: 60px;
    height: 738px;
    padding: 40px 51px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-left: -57.8px;
    padding: 40px 57.8px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-left: -51px;
    padding: 40px 51px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: -20px;
    padding: 40px 20px;
  }
`;

export const Carousel = styled.div`
  width: 51%;
  height: 100%;
  display: flex;
  gap: 18px;
  @media ${themes.primary.media.maxServiceWeb} {
    display: block;
    width: 100%;
    /* margin-left: -30px; */
  }
`;

export const Description = styled.div`
  width: 49%;
  height: 100%;
  padding: 43px 0 38px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${themes.primary.media.maxServiceWeb} {
    width: 100%;
    padding: 0px 0px 20px;
    justify-content: start;
    gap: 14px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 74px;
  line-height: 120%;
  text-transform: uppercase;
  white-space: pre-line;

  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 40px;
    line-height: 120%;
  }
`;

export const Text = styled.p`
  margin: 0 0 0 204px;
  padding: 0;
  font-size: 18px;
  line-height: 160%;    
  @media ${themes.primary.media.maxServiceWeb} {
    margin: 0;
  }
`;
