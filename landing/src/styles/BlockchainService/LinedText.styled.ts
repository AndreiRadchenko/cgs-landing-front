import styled from "styled-components";
import themes from "../../utils/themes";

export const Container = styled.div<{ position: string; height: number }>`
  display: flex;
  column-gap: 20px;
  height: ${({ height }) => `${height}px`};
  align-items: ${({ position }) =>
    position === "top" ? "flex-start" : "flex-end"};
  border-left: 1px solid ${themes.primary.colors.black};
  z-index: 5;
`;

export const Marker = styled.div<{ position: string }>`
  width: 12px;
  height: 12px;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.black};
  border-radius: 50%;
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  margin-left: -7px;
  transform: translateY(
    ${({ position }) => (position === "top" ? "-90%" : "90%")}
  );
`;

export const Text = styled.p<{ position: string }>`
  margin: 0;
  transform: translateY(
    ${({ position }) => (position === "top" ? "-65%" : "65%")}
  );
`;
