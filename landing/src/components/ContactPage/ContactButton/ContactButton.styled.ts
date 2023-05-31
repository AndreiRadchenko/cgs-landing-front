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
  transition: transform 0.3s linear;
  :hover {
    transform: translateY(-5px);
  }
  :active {
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  /* @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  } */
`;

export const ImageWrapper = styled.div<IImageWrapperProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 20px;
  line-height: 30px;
`;
