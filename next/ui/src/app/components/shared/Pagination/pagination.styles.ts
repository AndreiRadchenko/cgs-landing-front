import styled from "styled-components";
import { PropsPagination } from "../../../../types/components/index";

export const PaginationList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  list-style: none;
  padding: 0;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PageLink = styled("li")<PropsPagination>`
  padding: 1px 15px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => (props.active ? "#0C1033" : "#1F5A7B")};
  top: 0;
  color: #fff;
  cursor: pointer;
`;
