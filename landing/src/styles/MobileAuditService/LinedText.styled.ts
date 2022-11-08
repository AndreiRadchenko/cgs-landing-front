import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { slideRight } from "../Animations.styled";

interface IContainer {
  height: number;
  ind: number;
}

export const Container = styled.div<IContainer>`
  display: flex;
  column-gap: 20px;
  height: 6em;
  align-items: flex-start;

  @media ${themes.primary.media.maxMobile} {
    display: none;
    opacity: 0;
    &.scrolled {
      animation: ${({ ind }) => css`
        ${slideRight} 1.5s ${ind * 200}ms forwards
      `};
    }
  }
`;

export const MarkerContainer = styled.div`
  display: flex;
  column-gap: 20px;
  border-top: 1px solid ${themes.primary.colors.black};
  height: 6em;
  align-items: flex-start;
`;

export const Marker = styled.div<{ position: string }>`
  width: 12px;
  height: 12px;
  background: ${themes.primary.colors.bigDigit};
  border: 1px solid ${themes.primary.colors.black};
  border-radius: 50%;
  box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  margin-left: 4.375em;
  margin-right: 0;

  transform: translateY(
    ${({ position }) => (position === "top" ? "-90%" : "90%")}
  );
`;

export const Text = styled.p<{ position: string }>`
  max-width: 65%;
  text-transform: uppercase;
  margin: 0;
  transform: translateY(
    ${({ position }) => (position === "top" ? "-65%" : "65%")}
  );
`;

export const Transition = styled.div`
  width: 4.3125em;
  border-top: 1px solid;
  margin-left: 0;
`;

export const SubText = styled.p`
  display: inline-flex;
  max-width: 65%;
  margin: 0;
  transform: translateY(-65%);
`;

export const MultiLineContainer = styled.div`
  margin-top: -0.2em;
`;

export const SubTextContainer = styled.div`
  margin-top: -0.8em;
  max-width: 90%;
  margin-bottom: 1.3em;
`;

export const BigSubTextContainer = styled.div`
  display: block;
  font-size: 20px;
  margin-top: -1em;
`;
