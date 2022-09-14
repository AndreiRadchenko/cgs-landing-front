import React, { useState, FC } from "react";
import parse from "html-react-parser";
import * as Styles from "./question.styles";

interface IQuestionProps {
  title: string;
  image: { url: string } | null;
  content: string;
}

const Question: FC<IQuestionProps> = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Styles.QuestionBox isOpen={isOpen}>
      <Styles.QuestionContainer isOpen={isOpen}>
        <Styles.QuestionTitleContainer
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Styles.QuestionTitle isOpen={isOpen}>{title}</Styles.QuestionTitle>
          <Styles.TogglePlus>{isOpen ? "-" : "+"}</Styles.TogglePlus>
        </Styles.QuestionTitleContainer>
        <Styles.QuestionContentContainer isOpen={isOpen}>
          <Styles.QuestionTextContainer>
            {parse(content)}
          </Styles.QuestionTextContainer>
          {image?.url && <Styles.QuestionImage src={image.url} />}
        </Styles.QuestionContentContainer>
      </Styles.QuestionContainer>
    </Styles.QuestionBox>
  );
};

export default Question;
