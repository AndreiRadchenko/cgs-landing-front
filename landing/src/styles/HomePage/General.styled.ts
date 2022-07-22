import styled from "styled-components";
import themes from "../../utils/themes";

interface IFontSize {
  size: string;
  padding: string;
}

export const ContentContainer = styled.div`
  min-height: 90vh;
  background-color: ${themes.primary.colors.blogBackground};
  padding: 50px 50px 170px;
  font-family: ${themes.primary.font.family.namu};

  button {
    border: none;
    outline: none;
    border-radius: 0;
  }
`;

export const ButtonArrow = styled.img`
  position: absolute;
  right: -11px;
  top: -11px;
  width: 30px;
  height: 30px;
`;

export const BlackButton = styled.button<IFontSize>`
  font-family: inherit;
  font-size: ${({ size }) => size};
  padding: ${({ padding }) => padding};
  cursor: pointer;
  position: relative;
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  line-height: 99%;
`;

export const BigDigit = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 800;
  font-size: 150px;
  line-height: 180px;
  display: flex;
  align-items: center;
  color: ${themes.primary.colors.blogBackground};
  -webkit-text-stroke: 2px ${themes.primary.colors.primary};
  text-shadow: 7px 2px 0px ${themes.primary.colors.primary};
`;

export const Title = styled.h1`
  font-size: ${themes.primary.font.size.homeHeader};
  letter-spacing: 0.05em;
  -webkit-text-stroke: 0.5px ${themes.primary.colors.primary};
`;

export const MainSubtitle = styled.div`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.blogArticleTitle};
  line-height: 99%;
`;

export const RightArrow = styled.img`
  display: inline-block;
`;

export const LeftArrow = styled.img`
  display: inline-block;
  transform: rotate(180deg);
`;
