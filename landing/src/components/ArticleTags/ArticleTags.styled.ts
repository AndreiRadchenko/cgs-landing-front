import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  height: 52px;
  max-width: 500px;

  @media (max-width: 990px) {
    margin-bottom: 52px;
  }
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 25px 0px 25px;
  border: 0.6px solid rgba(39, 44, 47, 0.25);
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }

  &:hover {
    background-color: ${themes.primary.colors.primary};
    color: white;
    cursor: pointer;
  }
`;
