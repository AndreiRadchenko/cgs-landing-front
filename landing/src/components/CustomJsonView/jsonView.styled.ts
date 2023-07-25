import styled from "styled-components";

export const Layout = styled.div`
  margin-inline: 50px;
  color: "darkslategray";
`;

export const PageHeader = styled.h1`
  margin-block: 8px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const SectionHeader = styled.h2`
  margin-block: 8px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const CurrentHeader = styled.h3`
  margin-block: 5px;
  color: tomato;
  display: none;
  &::first-letter {
    text-transform: capitalize;
  }
`;

interface IHistoryItemProps {
  idx: number;
}

export const HistoryItemContainer = styled.div<IHistoryItemProps>`
  background-color: ${(props) => (props.idx % 2 ? "" : "white")};
  margin-inline: -50px;
  padding-inline: 50px;
  padding-block: 5px;
  &:nth-child(3) {
    border: 2px solid tomato;
    .current-header {
      display: block;
    }
  }
`;
