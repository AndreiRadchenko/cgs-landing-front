import themes from "../utils/themes";
import styled from "styled-components";

export const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: 243px;
  height: 56px;
  padding-left: 14px;
  display: flex;
  align-items: center;
  font-size: ${themes.primary.font.size.aboutUsCardText};
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.gilroy};
  background-color: ${themes.primary.colors.secondary};
  margin-right: 23px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const AddTag = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${themes.primary.colors.black};
`;

export const PlusIcon = styled.img``;
