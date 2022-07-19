import React, { useState } from "react";
import { FaqPageTypes } from "../../../consts";
import { IQuestionContent } from "../../../types/Faq.types";
import * as Styles from "./question.styles";

interface IQuestionProps {
  title: string;
  image?: string;
  content: IQuestionContent[];
}

const Question: React.FC<IQuestionProps> = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <Styles.QuestionContainer isOpen={isOpen}>
      <Styles.QuestionTitleContainer isOpen={isOpen}>
        <Styles.QuestionTitle>{title}</Styles.QuestionTitle>
        <Styles.TogglePlus onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </Styles.TogglePlus>
      </Styles.QuestionTitleContainer>
      <Styles.QuestionContentContainer isOpen={isOpen}>
        <Styles.QuestionTextContainer>
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
        </Styles.QuestionTextContainer>
        {image?.length && <Styles.QuestionImage src={image} />}
      </Styles.QuestionContentContainer>
    </Styles.QuestionContainer>
  );
};

export default Question;
