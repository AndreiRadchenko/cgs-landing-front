import themes from "../utils/themes";
import styled from "styled-components";
import { Field } from "formik";
import Arrow from "../../public/upArrowSidebar.svg";

export const TagsWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 56px;
  flex-wrap: wrap;
  row-gap: 15px;
  margin-top: 15px;
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

export const TagInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 400px;
  gap: 20px;
  width: 480px;
  height: 56px;
  align-items: center;
`;

export const TagInputSubmit = styled.button`
  border: 0;
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.medium};
  font-family: ${themes.primary.font.family.gilroy};
  background-color: ${themes.primary.colors.cardDarkGreen};
  width: 165px;
  height: 42px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HiddenField = styled(Field)`
  display: none;
  visibility: hidden;
`;

export const DropdownBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  background-color: ${themes.primary.colors.secondary};
  color: ${themes.primary.colors.primary};
  width: 243px;
  height: 56px;
  text-align: left;
  padding: 0 20px;
  box-sizing: border-box;
  border: 1px solid ${themes.primary.colors.black};
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.vistaco};
  letter-spacing: 0.03em;

  &.open img {
    transform: rotate(180deg);
  }
`;

export const DropdownWrapper = styled.div`
  margin-right: 20px;
`;

export const Content = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.secondary};
  min-width: 243px;
  z-index: 3;
  border: 1px solid ${themes.primary.colors.primary};
  display: none;
  &.open {
    display: block;
  }
  div {
    color: ${themes.primary.colors.primary};
    font-family: ${themes.primary.font.family.namu};
    font-size: ${themes.primary.font.size.primary};
    border-bottom: 1px solid ${themes.primary.colors.comment};
    padding: 10px 16px;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    &:hover {
      background-color: ${themes.primary.colors.blogDropdownHover};
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;
