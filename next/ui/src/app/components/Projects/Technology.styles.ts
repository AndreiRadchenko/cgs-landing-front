import styled from "styled-components";

export const Icon = styled("img")`
  width: 32.42px;
  max-height: 40px;
`;

export const Name = styled("span")`
  font-size: 16px;
  font-weight: 400;
`;

export const Container = styled("div")`
  display: flex;
  align-items: center;

  & > ${Icon} {
    margin-right: 5px;
  }
`;
