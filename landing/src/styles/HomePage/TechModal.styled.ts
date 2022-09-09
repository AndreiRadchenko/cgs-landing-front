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

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    max-height: 0;
    width: 100%;
    margin-top: 0;
    transition: 0.3s;

    &.block {
      max-height: 300px;
    }
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

  @media ${themes.primary.media.maxMobile} {
    border: 0;
  }
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

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
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
  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 10px;
    padding-left: 20px;
    margin-bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 0 1.625rem 2px;
    column-gap: 16px;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  &::before {
    content: "\u25A0";
    font-size: 1.7em;
    margin-right: ${themes.primary.spacing.small};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 0.875rem;
    white-space: nowrap;
    &::before {
      margin-right: 6px;
    }
  }
`;
