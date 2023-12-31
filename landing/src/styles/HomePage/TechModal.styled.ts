﻿import styled from "styled-components";
import themes from "../../utils/themes";

interface IModalProps {
  idx: boolean;
}

export const TicketModal = styled.div<IModalProps>`
  margin-top: calc(2.5em + 42px);
  position: absolute;
  z-index: 12;
  width: 42%;
  transition: 0.2s ease-in;
  opacity: 0;

  &.block {
    max-height: 400px;
    opacity: 1;
  }

  @media ${themes.primary.media.minPC} {
    margin-top: calc(2.5em + 49px);
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: calc(2.5em + 68px);
  }

  @media (min-width: 2200px) {
    margin-top: calc(2.5em + 76px);
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-top: calc(2.5em + 22px);
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-top: calc(2.5em + 20px);
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    max-height: 0;
    width: 100%;
    transition: 0.3s;
    margin-top: ${(idx) => (idx ? "-7em" : "-5em")};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border: solid 2.6px ${themes.primary.colors.primary};
    width: 429px;

    &.block {
      max-height: 650px;
      background-color: ${themes.primary.colors.blogBackground};
    }
  }

  @media (max-width: 474px) {
    border: solid 2.6px ${themes.primary.colors.primary};
    width: 378.55px;
    margin-top: -5em;
  }

  @media (max-width: 410px) {
    border: solid 2.4px ${themes.primary.colors.primary};
    width: 347px;
    margin-left: -8px;
  }
`;

export const TicketModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: default;

  @media (max-width: 768px) {
    position: relative;
    z-index: 100;
    top: -8em;
  }
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
    padding: 0 2em 1.4rem 2em;
    column-gap: 16px;
    &.rows {
      grid-template-columns: repeat(1, 1fr);
    }
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
    &::before {
      margin-right: 6px;
      font-size: 1.3em;
    }
    margin: 3px 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;
