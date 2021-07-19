import styled from "styled-components";

export const TextWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    width: 100%;
  }
 
`;
export const Text = styled("textarea")`
  resize: none;
  font-size: 16px;
  padding: 10px 12px;
  border: 1px solid #0c1033;
  border-radius: 4px;
  min-height: 100px;

  @media screen and (max-width: 1023.5px) {
    border-radius: 20px;
    border: 3px solid #1F5A7B;
    padding: 10px 12px;
    min-height: 235px;
    text-align: center;
  }
`;

export const Error = styled("div")`
  min-height: 16px;
  margin-top: 0.5em;
  color: red;
  font-size: 0.7em;
`;
