import styled from "styled-components";

export interface ArrowContainerProps {
  width?: number;
  height?: number;
  visible: boolean;
}

export const ArrowContainer = styled("div")<ArrowContainerProps>`
  width: ${(props) => props.width ? `${props.width}px` : "100%"};
  height: ${(props) => props.height ? `${props.height}px` : "100%"};
  cursor: ${(props) => props.visible ? "pointer" : "none"};
  opacity: ${(props) => props.visible ? 1 : 0};
`;

export const PrevArrowContainer = styled("div")`
  padding-right: 10px;
`;

export const NextArrowContainer = styled("div")`
  padding-left: 10px;
`;
