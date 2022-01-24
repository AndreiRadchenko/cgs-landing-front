import styled from "styled-components";

export const CategoryContainer = styled.div`
  width: 20em;
  height: 340px;
  margin: 0 27px 27px 27px;
  border-radius: 6px;

  background-color: #333;

  &:nth-child(2) {
    background-color: #c7fb9c;
  }

  &:last-child {
    background-color: #c7fb9c;
  }

  &:nth-child(n + 4) {
    flex: 0 1 302px;
  }

  &:not(:nth-child(1)):nth-child(even) {
    background-color: #a9cdf5;
  }
`;
