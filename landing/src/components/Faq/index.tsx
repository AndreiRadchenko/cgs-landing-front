import { FaqPageQuestions } from "../../consts";
import React from "react";
import Question from "./Question";
import { IQuestion, IQuestionContent } from "../../types/Faq.types";
import * as Styles from "./faq.styles";

const Faq = () => {
  const questions = FaqPageQuestions as IQuestion[];

  return (
    <Styles.FaqContainer>
      {questions.map(({ title, content, image }, idx) => (
        <Question
          title={title}
          content={content as IQuestionContent[]}
          image={image}
          key={idx}
        />
      ))}
    </Styles.FaqContainer>
  );
};

export default Faq;
