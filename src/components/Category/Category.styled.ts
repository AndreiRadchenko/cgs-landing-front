import styled from "styled-components";
import themes from "../../utils/themes";

export const CategoryContainer = styled.div`
  width: 304px;
  height: 340px;
  margin: 0 27px 27px 0;
  border-radius: 6px;
  flex: 0 1 304px;
  position: relative;
  transition: 300ms;

  &:not(:nth-child(2)):nth-child(2n + 2) {
    background-color: #ffefd8;
    border-radius: 60px;
  }

  &:nth-child(odd) {
    background-color: #a9cdf5;
  }

  &:nth-child(2) {
    background-color: #c7fb9c;
  }

  &:last-child {
    background-color: #c7fb9c;
  }

  &:hover {
    transform: rotate(7deg);
  }
`;

export const WrapperDescription = styled.div`
  padding: 26px 24px;
  height: 100%;
`;

export const TitleSpecialization = styled.h2`
  margin: 0 0 0.7em 0;
`;

export const DescriptionSpecialization = styled.span`
  font-size: ${themes.primary.font.size.vistaco};
`;

export const IconWrapperSpecialization = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;
