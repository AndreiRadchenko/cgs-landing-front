import styled from "styled-components";
import themes from "../../../utils/themes";

export interface IImageWrapperProps {
  width: string;
  height: string;
}

export const ButtonWrapper = styled.a`
  padding: 0;
  margin: 0;
  width: 58px;
  height: 58px;
  background-color: ${themes.primary.colors.blogBackground};
  border: 2px solid ${themes.primary.colors.black};
  box-shadow: 7px 2px 0px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
  transition: transform 0.3s ease, color 0.3s ease;
  color: ${themes.primary.colors.black};
  :hover {
    transform: translateY(-5px);
    &.telegram {
      color: ${themes.primary.colors.darkBlue};
    }
  }
  @media ${themes.primary.media.maxMobile} {
    width: 54px;
    height: 54px;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  color: currentColor;
  @media (min-width: 1500px) {
    align-items: baseline;
  }
`;

export const ImageWrapper = styled.div<IImageWrapperProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
`;

export const ButtonText = styled.p`
  color: currentColor;
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.66em;
  line-height: 1;
`;
