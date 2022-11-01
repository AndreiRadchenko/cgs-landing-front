import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  margin-top: ${themes.primary.spacing.servicesMarginBetweenBlocks};
  margin-bottom: 5em;
`;

export const ContentWrapper = styled.div`
  margin-top: 4.5em;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const ListWrapper = styled.div`
  width: 48%;
  position: relative;
  border: 1.60133px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  padding-bottom: 4.1em;
  z-index: 2;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7%;
  height: 101px;
  position: relative;
  z-index: 2;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 36px;
  margin-right: 3.42em;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 1.84em;
  line-height: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 34px;
  border-bottom: 2px solid ${themes.primary.colors.comment};
  width: 83.8%;
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  left: 10px;
  top: 12px;
  background: ${themes.primary.colors.primary};
  position: absolute;
  top: 0;
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 8px 0;
  border-color: transparent ${themes.primary.colors.grayBack} transparent
    transparent;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 5;
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 5px 13px;
  border-color: transparent transparent ${themes.primary.colors.grayBack}
    transparent;
  position: absolute;
  right: 0;
  bottom: 0;
`;
