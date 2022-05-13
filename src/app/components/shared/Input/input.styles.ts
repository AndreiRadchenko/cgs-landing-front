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
  
  @media screen and (max-width: 1023.5px) {
    border-radius: 20px;
    border: 3px solid #1F5A7B;
    padding: 15px 12px;
    text-align: center;
    outline: none;
  }
`;

export const Error = styled("div")`
  min-height: 16px;
  color: red;
  font-size: 0.7em;
`;
