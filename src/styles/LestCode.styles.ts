import styled from "styled-components";
import CodeIcon from "../components/CodeIcon/CodeIcon";
import themes from "../utils/themes";
import { ICodeIcon } from "../components/CodeIcon/CodeIcon.styled";

export const LetsCodeContainer = styled.section`
  display: flex;
  position: relative;
  margin-top: 60px;
  height: 650px;
  font-family: ${themes.primary.font.family.roboto};
`;

export const LestCodeContent = styled.div`
  width: 50%;
`;

export const LetsCodeImageWrapper = styled.div`
  position: absolute;
`;

export const CatIconWrapper = styled.div`
  position: absolute;
  right: 5%;
  top: 24%;
`;

export const h2CodeIconOpen = styled(CodeIcon).attrs({
  color: themes.primary.colors.quinary,
})<ICodeIcon>`
  top: 23%;
  right: 44%;
`;

export const h2CodeIconClose = styled(CodeIcon).attrs({
  color: themes.primary.colors.quinary,
})<ICodeIcon>`
  top: 10%;
  right: 20%;
`;

export const pCodeIcon = styled(CodeIcon).attrs({
  color: "#90E645",
})<ICodeIcon>`
  top: 1%;
  right: 36%;
`;
