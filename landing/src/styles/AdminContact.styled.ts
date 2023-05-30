import styled from "styled-components";
import { Field } from "formik";

import themes from "../utils/themes";

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &.about {
    margin-bottom: ${themes.primary.spacing.septenary};
  }
`;

export const AddButton = styled.div`
  color: ${themes.primary.colors.adminBlue};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const DeleteButton = styled.div`
  color: ${themes.primary.colors.adminRed};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 32px;
  margin: 0 0 22px;
`;

export const Headlines = styled.div`
  display: flex;
  justify-content: space-between;
  width: 954px;
  gap: 32px;
  div {
    flex-grow: 1;
  }
`;

export const TeamMember = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: start;
  margin-top: 16px;
`;

export const EmailList = styled.ul`
  margin: 0 0 30px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const EmailItem = styled.li`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

export const MessengerItem = styled.li`
  /* width: 50%; */
  display: flex;
  gap: 12px;
`;

export const MessengerTextlItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 4.1em;
`;

export const LocationTextlItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
