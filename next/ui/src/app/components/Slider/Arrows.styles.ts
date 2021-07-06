import styled from "styled-components";

export interface ArrowContainerProps {
  visible: boolean;
}

export const ArrowContainer = styled("div")<ArrowContainerProps>`
  cursor: ${(props) => props.visible ? "pointer" : "none"};
  opacity: ${(props) => props.visible ? 1 : 0};
`;

export const PrevArrowContainer = styled("div")`
  padding-right: 20px;
`;

export const NextArrowContainer = styled("div")`
  padding-left: 20px;
`;