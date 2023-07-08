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
  &.telegram > div {
    align-items: center;
  }
  :hover {
    transform: translateY(-5px);
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: normal;
  gap: 8px;
  color: currentColor;
  @media (max-width: 1799px) {
    align-items: baseline;
  }
  @media (max-width: 991px) {
    align-items: flex-end;
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
  will-change: transform;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;
