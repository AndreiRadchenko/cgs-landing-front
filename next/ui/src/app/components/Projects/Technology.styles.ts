import styled from "styled-components";

export const Icon = styled("img")`
  max-height: 40px;
  width: 32.42px;
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
    margin-left: 5px;
  }
`;
