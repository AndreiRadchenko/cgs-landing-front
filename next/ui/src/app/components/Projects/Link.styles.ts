import styled from "styled-components";

export const Button = styled("button")`
  background-color: ${(props) => props.theme.colors.buttonBgColor};
  border-radius: 2em;
  outline: none;
  font-weight: 700;
  border: 0;
  color: white;
  width: 200px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  font-size: 18px;
  min-height: 56px;

  @media (max-width: 420px) {
    width: 140px;
    font-size: 16px;
  }
`;