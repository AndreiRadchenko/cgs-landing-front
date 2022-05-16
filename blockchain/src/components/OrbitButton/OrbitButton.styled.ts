import styled from "styled-components";
import themes from "../../utils/themes";

export const Button = styled.button`
  outline: none;
  width: fit-content;
  margin-top: 1rem;
  padding: 1rem 2rem;
  min-height: 2rem;
  border-radius: 2rem;
  border: 0;
  position: relative;
  cursor: pointer;
  text-transform: lowercase;
  background: ${themes.primary.colors.buttonColor};
  font-size: ${themes.primary.font.size.tertiary};
  font-weight: ${themes.primary.font.weight.bold};
  box-shadow: 0 0 0 0.625rem ${themes.primary.colors.purpleBack},
    0 0 0 0.6875rem ${themes.primary.colors.buttonColor};

  /* &:after {
    content: "";
    width: 0.375rem;
    height: 0.375rem;
    background-color: ${themes.primary.colors.buttonColor};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    right: 0;
    margin: auto;
    border-radius: 50%;
  } */

  /* &:before {
    content: "";
    width: 0.375rem;
    height: 0.375rem;
    background-color: ${themes.primary.colors.buttonColor};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
  } */
`;
