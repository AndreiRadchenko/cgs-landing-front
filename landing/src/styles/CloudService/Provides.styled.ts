import styled from "styled-components";
import themes from "../../utils/themes";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";

export const Container = styled.div`
  margin-top: 17.83em;
  position: relative;
`;

export const BgContainer = styled.div`
  width: 107.42vw;
  height: 42.08vw;
  position: absolute;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${cloudProvidesBgi.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const BlockWrapper = styled.div`
  margin: 5.67em 0 0 14em;
  position: relative;
`;

export const Block = styled.div`
  position: absolute;

  &:nth-child(1) {
    left: 0;
  }

  &:nth-child(2) {
    top: 14.1em;
    left: 20em;
  }

  &:nth-child(3) {
    top: 33em;
    left: 51em;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.secondaryServicesSubTitle};
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  margin: 1.28em 0 0 0;
  line-height: 160%;
  max-width: 26.39em;
`;
