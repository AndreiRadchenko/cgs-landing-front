import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Container = styled.div`
  box-sizing: border-box;
  margin-top: 11.66em;
  margin-bottom: 11.66em;
  padding: 0 4.25em;
  height: 492px;
  width: 100vw;
  margin-left: -4.25em;
  background-color: rgba(143, 142, 147, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${themes.primary.media.maxServiceWeb}) {
    flex-direction: column-reverse;
    margin-top: 80px;
    margin-bottom: 60px;
    height: 738px;
    padding-top: 40px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: -1.925em;
    padding: 40px 1.925em;
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
    height: auto;
    padding: 0px 0px 20px;
    justify-content: start;
    gap: 14px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  text-align: left;
  font-size: 6.16em;
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
  font-size: 1.5em;
  line-height: 160%;
  @media ${themes.primary.media.maxServiceWeb} {
    font-size: 18px;
    margin: 0;
  }
`;
