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
  display: grid;
`;

export const GridLine1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.74fr;
  margin-left: 3em;
`;

export const GridLine2 = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr 0.23fr;
  margin-left: 12.5em;
`;

export const SubText = styled.p`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;
  margin: 0;
  margin-bottom: 112px;
`;
