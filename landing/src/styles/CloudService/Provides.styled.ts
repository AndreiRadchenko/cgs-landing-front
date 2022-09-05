import styled from "styled-components";
import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";

export const Container = styled.div`
  margin-top: 17.83em;
  position: relative;
`;

export const BgContainer = styled.div`
  width: 102.1%;
  height: 43em;
  position: relative;
  left: -6%;
  top: -45px;
  background-image: url(${cloudProvidesBgi.src});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BlockWrapper = styled.div`
  padding: 7.4em 0 0 20em;
  position: relative;
`;

export const Block = styled.div`
  position: relative;
  margin-bottom: 50px;

  & p {
    margin: 0;
  }

  &:nth-child(1) {
    left: 0;
  }

  &:nth-child(2) {
    bottom: 0.8rem;
    left: 17em;
  }

  &:nth-child(3) {
    left: 46.5em;
    bottom: 4rem;
  }
`;

export const Title = styled.p`
  font-size: 32px;
  margin: 0;
`;

export const Description = styled.div`
  font-size: 18px;
  margin: 1.1em 0 0 0;
  line-height: 160%;
  max-width: 26.39em;
`;
