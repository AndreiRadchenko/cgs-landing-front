import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainYourWay from "../../../public/BlockchainServicePage/BlockchainYourWay.png";

export const Container = styled.div`
  margin-top: 16.67em;
  position: relative;
`;

export const BgiContainer = styled.div`
  background-image: url(${BlockchainYourWay.src});
  background-position: 100 100;
  background-repeat: no-repeat;
  background-size: cover;

  width: 101.12vw;
  height: 11.53vw;
  position: absolute;
  top: 40%;
  left: -4.3%;
`;

export const Title = styled.h2`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 15em;
  margin: 0;
  margin-bottom: 1.675em;
`;

export const SubTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SubText = styled.p`
  font-size: ${themes.primary.font.size.secondary};
  flex-basis: 33%;
  line-height: 160%;
  margin: 0;
  margin-bottom: 112px;

  &:nth-child(1) {
    padding-left: 30px;
  }

  &:nth-child(2) {
    padding-left: 65px;
  }

  &:nth-child(3) {
    padding-left: 105px;
  }

  &:nth-child(4) {
    padding-left: 145px;
  }

  &:nth-child(5) {
    padding-left: 305px;
  }

  &:nth-child(6) {
    padding-left: 340px;
  }
`;
