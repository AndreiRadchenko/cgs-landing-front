import styled from "styled-components";
import themes from "../../utils/themes";
import BlockchainAbout from "../../../public/BlockchainServicePage/BlockchainAbout.svg";

export const Container = styled.div`
  margin: 8.5em 0 0 0;
  padding: 6.25em 0 11.17em;

  background-image: url(${BlockchainAbout.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top 100% right 6.75em;
`;

export const Title = styled.h2`
  font-size: ${themes.primary.font.size.secondaryServicesTitle};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 140%;
  text-transform: uppercase;
  max-width: 12em;
`;
