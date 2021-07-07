import styled from "styled-components";

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
`;
export const Input = styled("input")`
  padding: 10px 12px;
  border: 1px solid #0c1033;
  border-radius: 4px;
`;

export const Error = styled("div")`
  min-height: 16px;
  color: red;
  font-size: 0.7em;
`;
