import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import themes from "../../utils/themes";

export const WrapperStyledH = styled.div`
  margin-top: 60px;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const StyledH = styled.div`
  font-family: "NAMU";
  font-weight: 900;
  font-size: ${themes.primary.font.size.ourWorkText};
  line-height: 47px;
  text-transform: uppercase;
  color: ${themes.primary.colors.black};
`;

export const Marquee = styled.div`
  gap: 20px;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
  height: 60px;
`;
const scroll = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const MarqueeContent = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  gap: 20px;
  animation: ${scroll} 80s infinite linear;
  text-align: center;
  white-space: nowrap;
`;

export const MobleTextWrapper = styled.div`
  font-size: 24px;
`;

export const StyledButton = styled.button`
  background: ${themes.primary.colors.headerBorderHover};
  position: relative;
  box-shadow: 0px 0px 0px ${themes.primary.colors.black};
  padding: 0 36px;
  border: 1.8px solid ${themes.primary.colors.black};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  height: 67px;
  align-items: center;
  font-family: "NAMU";
  font-weight: 900;
  font-size: 19px;
  transition: box-shadow 1s ease-in-out;
  cursor: pointer;

  box-shadow: 7px 2px 0px ${themes.primary.colors.black};

  &:active {
    box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  }
  &:focus {
    box-shadow: 7px 2px 0px ${themes.primary.colors.black};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  height: 100vh;
`;

export const ContainerDate = styled.div`
  position: relative;
  min-height: calc(100vh - 57px - 56px);
  overflow: hidden;
  @media (max-width: 1280px) {
    min-height: calc(100vh - 57px - 46px);
  }

  @media (max-width: 1097px) {
    min-height: calc(100vh - 57px - 39px);
  }

  @media (max-width: 767px) {
    min-height: calc(100vh - 93px - 101px);
  }
`;
