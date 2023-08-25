import styled from "styled-components";
import themes from "../utils/themes";

export const AdminCvGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`;

export const AdminImageSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 0 10px 0;
`;

export const DropdownWrapper = styled.div`
    margin-bottom: 24px;
`;

export const DropdownButton = styled.div<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  width: 347px;
  height: 56px;
  color: #8F8E93;
  text-align: left;
  padding: 18px 14px;
  box-sizing: border-box;
  border: 1px solid
    ${({ isError }) =>
    isError ? "red" : "#8F8E93"};
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.03em;

  &.categoryText {
    color: #000;
  }

  &.open img {
    transform: rotate(180deg);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  min-width: 347px;
  max-height: 236px;
  overflow-y: scroll;
  ms-overflow-y: scroll;
  z-index: 10;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  display: none;
  &.open {
    display: block;
  }
  div {
    background-color: ${themes.primary.colors.blogBackground};
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

export const FieldsWrapper = styled.div`
    width: 100%;
    border-inline: 1px solid black;
    border-bottom: 1px solid black;
    padding: 16px;
    margin-bottom: 24px;
    margin-top: -22px;
`;

export const NewAchievementButton = styled.button`
  color: #fff;
  background-color: #000;
  height: 56px;
  width: 56px;
  border: none;
  margin-left: 8px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px
`;

export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  position: relative;
  display: flex;
  justify-content: end;
  margin-top: 10px;

  &.infoText {
    margin-top: 32.5px;
    right: -35.7px;
    margin-bottom: -18px;
  }
`;

export const CardWrapper = styled.div`
  margin-bottom: 24px;
  border-top: 1px solid #8F8E93;
  padding-top: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

export const StackWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  row-gap: 24px;
  max-width: 810px;
  width: 810px;
  flex-wrap: wrap;
`;

export const DeleteStack = styled.button`
  color: red;
  border: none;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
  text-align: end;
  font-family: ${themes.primary.font.family.namu};
`;

export const ProjectWrapper = styled.div`
  border: 1px solid #8F8E93;
  padding: 16px;
  margin-top: 16px;
`;

export const ProjectNumberWrapper = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #8F8E93;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectNumber = styled.h1`
  margin: 0;
  font-size: 30px;
`;

export const ProjectInfo = styled.div``;

export const FirstProjectInfoBlock = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
`;

export const LastProjectInfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const AddProjectBtn = styled.button`
  border: none;
  background-color: #000;
  color: #fff;
  height: 56px;
  width: 163px;
  font-size: 16px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const AdminCvItemFrame = styled.div`
  border: 1px solid #8F8E93;

  &.fade {
    &::after {
    content: "";
    background-color: #F1EFED;
    opacity: 0.6;
    width: 1112px;
    height: 246px;
    z-index: 100;
    margin-top: -245px;
    margin-left: -1px;
    position: absolute;
  }
  }
`;

export const AdminCvItemFlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
`;

export const AdminCvItemLeftFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const AdminCvItemTitle = styled.div`
  margin-left: 16px;
`;

export const AdminCvItemName = styled.div`
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminCvItemRole = styled.div`
  color: #8F8E93;
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 130%;
`;

export const AdminCvItemRightFlex = styled.div``;

export const AdminCvItemLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;

  a {
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 130%;
    font-family: ${themes.primary.font.family.namu};
  }
`;

export const AdminCvItemExport = styled.div`
color: #5869DD;
font-family: ${themes.primary.font.family.namu};
font-size: 14px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-top: 16px;
cursor: pointer;
`;

export const AdminCvItemEditDelete = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 20px;
  border-top: 1px solid  #8F8E93;
  align-items: center;
`;

export const AdminCvItemEdit = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const AdminCvItemDelete = styled.div`
  color: red;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  cursor: pointer;
`;

export const CvPdfWrapper = styled.div`
  position: absolute;
  z-index: -10000;
`;