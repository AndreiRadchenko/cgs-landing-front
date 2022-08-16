import styled from "styled-components";
import themes from "../../utils/themes";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";

export const Container = styled.div`
  margin-top: 17.83em;
  position: relative;
`;

export const BgContainer = styled.div`
  width: 1546.81px;
  height: 606px;
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
    top: 13.9em;
    left: 20em;
  }

  &:nth-child(3) {
    top: 32.7em;
    left: 51em;
  }
`;

export const Title = styled.p`
  font-size: ${themes.primary.font.size.secondaryServicesSubTitle};
  margin: 0;
`;

export const Description = styled.p`
  font-size: ${themes.primary.font.size.oneAndHalf};
  margin: 1.57em 0 0 0;
  line-height: 160%;
  max-width: 26.39em;
`;

export const CustomMarker = styled.div`
  position: absolute;
  left: -4.58em;
  top: 1.17em;

  width: 15.5px;
  height: 15.5px;
  border: 1px solid ${themes.primary.colors.black};
  border-radius: 50%;
  box-shadow: 9.0377px 2.5822px 0px #000000;
`;
