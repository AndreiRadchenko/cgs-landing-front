import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 12.7em;
  position: relative;
`;

export const BgiContainer = styled.div`
  width: 110%;
  height: 25px;
  position: relative;
  left: -4%;
  top: 60px;
  background: linear-gradient(90deg, #d6ffbb 13.67%, #5869dd 90.39%);
  border: 1px solid #000000;

  box-shadow: 7px 2px 0px #000000;
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
  font-size: ${themes.primary.font.size.secondary};
  line-height: 160%;
`;

export const GridLine1 = styled.div`
  margin-top: -1.25em;
  display: grid;
  grid-template-columns: 1.26fr 1.28fr 1fr;
`;

export const GridLine2 = styled.div`
  display: grid;
  grid-template-columns: 4.63fr 3.65fr 1fr;
  margin-left: 3.5em;
`;

export const SubText = styled.p`
  margin: 0;
  margin-bottom: 112px;
`;
