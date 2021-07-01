import styled from "styled-components";

export const Container = styled("div")`
  width: inherit;
  height: inherit;

  & > img {
    object-fit: cover;
    border: 2px solid black;
    border-radius: 5px;
  }
`;
