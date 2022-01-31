import styled from "styled-components";
import themes from "../utils/themes";

export const FeedbackContainer = styled.section`
  font-family: ${themes.primary.font.family.roboto};
  margin-top: 200px;
`;

export const FeedbackSectionTitle = styled.h2`
  font-size: 2.5em;
  margin: 0;
`;

export const FeedbackSectionSubTitle = styled.h3`
  font-weight: 300;
  font-size: 1.65em;
  line-height: 125%;
  margin-top: 12px;
  margin-bottom: 50px;
`;

export const FeedbackRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledArrowButton = styled.button`
  position: absolute;
  width: 6em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: 300ms;

  &:last-child {
    transform: rotate(180deg);
    right: -5%;
    top: 15%;
  }

  &:first-child {
    left: -10%;
    top: 15%;
  }

  &:hover {
    &:first-child {
      left: -11%;
    }

    &:last-child {
      right: -6%;
    }
  }
`;
