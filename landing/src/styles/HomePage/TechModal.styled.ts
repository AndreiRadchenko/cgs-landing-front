import styled from "styled-components";
import themes from "../../utils/themes";

export const TicketModal = styled.div`
  margin-top: calc(2.5em + 39px);
  display: none;
  position: absolute;
  z-index: 10;
  width: 42%;
  &.block {
    display: block;
  }
`;

export const TicketModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;
`;

export const TicketModalContent = styled.div`
  width: 100%;
  height: auto;
  background: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.primary};
  position: relative;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin-top: 12px;
  margin-left: 12px;
  border: 2px solid black;
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 50%;
  background: black;
  outline: 1px solid black;
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 50%;
`;

export const List = styled.ul`
  padding-right: 20px;
  padding-bottom: 30px;
  font-size: 1.4em;
  display: grid;
  column-gap: 30px;

  &.column {
    grid-template-rows: 1fr;
  }
  &.rows {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  &::before {
    content: "\u25A0";
    font-size: 1.7em;
    margin-right: ${themes.primary.spacing.small};
  }
`;
