import styled from "styled-components";
import themes from "../utils/themes";

export const PartnersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto 10em auto;

  & > * {
    flex: 1 1 16.6%;
  }

  @media (max-width: 1401px) {
    display: none;
  }
`;

export const PartnerImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(6n) {
    margin-right: 0;
  }

  &:nth-child(n + 7) {
    margin-top: 80px;
  }
`;
