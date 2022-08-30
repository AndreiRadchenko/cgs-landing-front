import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainServices from "../../../public/BlockchainServicePage/BlockchainServices.svg";

export const Container = styled.div`
  margin-top: 15.92em;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 13.75em;
`;

export const SubTextContainer = styled.div`
  width: 113.7%;
  height: 15.85vw;
  margin: 2.5em -6em 0 -8.5em;
  background-image: url(${BlockchainServices.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SubTextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 7em;
  padding: 4em 0 0 5em;
`;

export const SubText = styled.p`
  font-size: ${themes.primary.font.size.secondary};
  line-height: 233%;
  text-transform: uppercase;
  margin: 0 0 10px 5em;
`;

export const DescriptionContainer = styled.div`
  margin-top: 16.716em;
  padding: 0 3.625em;
  display: flex;
`;

export const Image = styled.img`
  width: 53.35em;
  height: 41.67em;
`;

export const Description = styled.div`
  font-size: ${themes.primary.font.size.feedbackName};
  line-height: 160%;
  margin: 6.075em 0 0;
  max-width: 27.95em;
`;
