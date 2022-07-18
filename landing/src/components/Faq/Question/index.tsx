import React from "react";
import { FaqPageTypes } from "../../../consts";
import { IQuestionContent } from "../../../types/Faq.types";
import * as Styles from "./question.styles";

interface IQuestionProps {
  title: string;
  image?: string;
  content: IQuestionContent[];
}

const Question: React.FC<IQuestionProps> = ({ title, content, image }) => {
  const mapLi = (elements: string[]) => (
    <Styles.QuestionList>
      {elements.map((el, idx) => (
        <Styles.QuestionListElement key={idx + "100"}>
          {el}
        </Styles.QuestionListElement>
      ))}
    </Styles.QuestionList>
  );

  return (
    <Styles.QuestionContainer>
      <Styles.QuestionTitleContainer>
        <Styles.QuestionTitle>{title}</Styles.QuestionTitle>
      </Styles.QuestionTitleContainer>
      <Styles.QuestionContentContainer>
        {content.map((el, idx) => {
          switch (el.type) {
            case FaqPageTypes.Description:
              return (
                <Styles.QuestionDescription key={idx}>
                  {el.text}
                </Styles.QuestionDescription>
              );
            case FaqPageTypes.List:
              return (
                <Styles.QuestionListContainer key={idx}>
                  {mapLi(el.elements)}
                </Styles.QuestionListContainer>
              );
          }
        })}
        {image?.length && <Styles.QuestionImage src={image} />}
      </Styles.QuestionContentContainer>
    </Styles.QuestionContainer>
  );
};

export default Question;
