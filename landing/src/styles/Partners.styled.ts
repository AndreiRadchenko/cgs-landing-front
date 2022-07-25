import styled from "styled-components";
import themes from "../utils/themes";

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 65px;
  margin: 10em auto 10em auto;

  & > * {
    flex: 1 1 16.6%;
  }
`;

export const PartnerImageWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 11%;
  width: auto;
  height: auto;
  max-height: 60px;
`;
