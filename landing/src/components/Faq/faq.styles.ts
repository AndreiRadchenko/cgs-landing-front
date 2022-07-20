import styled from "styled-components";
import themes from "../../utils/themes";

export const FaqContainer = styled.div`
  padding: 50px 21% 200px 50px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  min-height: 95vh;
`;

export const BottomDecor = styled.img`
  position: absolute;
  right: 0;
  width: 240.83px;
  height: 196.83px;
  bottom: 5px;
`;

export const PageTitle = styled.div`
  text-transform: uppercase;
  font-size: 4.45vw;
  display: flex;
  margin-bottom: 40px;
  div::first-letter {
    color: ${themes.primary.colors.darkBlue};
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${themes.primary.colors.faqBorder};
`;
