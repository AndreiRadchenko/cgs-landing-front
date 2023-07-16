import styled from "styled-components";

export const LeftArrow = styled.div`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.6em;
  position: fixed;
  top: 50%;
  width: 1.5em;
  height: 3em;
  transform: translate(0, -50%);
  padding: 0.75em 0.05em 0.75em 0.15em;
  background-color: #f2ea86;
  color: black;
  border: 1px solid black;
  border-radius: 0 3em 3em 0;
  border-left: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

export const RightArrow = styled.div`
  text-align: right;
  font-size: 3em;
  font-weight: 700;
  line-height: 1.6em;
  position: fixed;
  top: 50%;
  right: 0;
  width: 1.5em;
  height: 3em;
  transform: translate(0, -50%);
  padding: 0.75em 0.15em 0.75em 0.05em;
  background-color: #f2ea86;
  color: black;
  border: 1px solid black;
  border-radius: 3em 0 0 3em;
  border-right: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;
