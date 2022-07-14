import themes from "../utils/themes";
import styled from "styled-components";

export const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 15px;
`;

export const Tag = styled.input`
  width: 243px;
  height: 56px;
  padding-left: 14px;
  display: flex;
  border: none;
  border-radius: 0;
  align-items: center;
  font-size: ${themes.primary.font.size.aboutUsCardText};
  font-size: ${themes.primary.font.size.linkText};
  font-family: ${themes.primary.font.family.mulish};
  background-color: ${themes.primary.colors.secondary};
  margin-right: 23px;
  &:focus {
    outline: 1px solid gray;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const AddTag = styled.div`
  margin-left: 10px;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${themes.primary.colors.black};
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
`;

export const PlusIcon = styled.img``;

export const Minus = styled.div`
  font-size: 35px;
  font-weight: ${themes.primary.font.weight.medium};
`;
