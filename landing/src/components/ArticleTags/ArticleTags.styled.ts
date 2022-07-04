import styled from "styled-components";
import themes from "../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 550px;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 20px;

  @media (max-width: 990px) {
    margin-bottom: 52px;
    justify-content: center;
  }
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px 25px;
  border: 0.6px solid rgba(39, 44, 47, 0.25);
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${themes.primary.colors.primary};
    color: white;
    cursor: pointer;
  }
`;
