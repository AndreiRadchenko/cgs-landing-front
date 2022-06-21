import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;

export const Text = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  font-weight: ${themes.primary.font.weight.bold};
`;

export const IconImage = styled.img`
  max-width: 26px;
  max-height: 26px;
  object-fit: contain;
`;

export const IconBlock = styled.div`
  border: 0.6px solid rgba(0, 0, 0, 0.25);
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${themes.primary.colors.primary};
    cursor: pointer;
  }
  &:hover ${IconImage} {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(205deg)
      brightness(111%) contrast(101%);
  }
`;
