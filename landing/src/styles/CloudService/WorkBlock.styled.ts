import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div`
  margin-top: 15.75em;
`;

export const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.67em;
  padding-left: 4.5em;
  margin-top: 5.75em;
`;

export const Block = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 8.17em;
    border: 1px solid black;
    position: absolute;
    top: 59%;
    left: -10.5em;
  }

  &:last-child {
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 8.17em;
      border: 1px solid black;
      position: absolute;
      top: 59%;
      right: -10em;
    }
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0.4em;
  left: -3.5em;
  width: 2.95em;
`;

export const Subtitle = styled.p`
  font-size: 22px;
  line-height: 160%;
  text-transform: uppercase;
  margin: 0;
`;
