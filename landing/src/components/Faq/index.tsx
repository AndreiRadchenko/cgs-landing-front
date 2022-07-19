import { FaqPageQuestions } from "../../consts";
import React from "react";
import Question from "./Question";
import { IQuestion, IQuestionContent } from "../../types/Faq.types";
import * as Styles from "./faq.styles";
import bottomDecor from "../../../public/FAQDecorations/bottomDecor.svg";

const Faq = () => {
  const questions = FaqPageQuestions as IQuestion[];

  return (
    <Styles.FaqContainer>
      <Styles.PageTitle>
        <div>frequently&nbsp;</div>
        <div>asked&nbsp;</div>
        <div>questions&nbsp;</div>
      </Styles.PageTitle>
      <Styles.Separator />
      {questions.map(({ title, content, image }, idx) => (
        <Question
          title={title}
          content={content as IQuestionContent[]}
          image={image?.src}
          key={idx}
        />
      ))}
      <Styles.BottomDecor src={bottomDecor.src} />
    </Styles.FaqContainer>
  );
};

export default Faq;
