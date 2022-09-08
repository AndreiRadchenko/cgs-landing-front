import React from "react";
import Question from "./Question";
import { IFaqData } from "../../types/Faq.types";
import * as Styles from "./faq.styles";
import bottomDecor from "../../../public/FAQDecorations/bottomDecor.svg";

const Faq = ({ questions }: IFaqData) => {
  return (
    <Styles.FaqContainer>
      <Styles.PageTitle>
        <p className="word first">frequently&nbsp;</p>
        <p className="word">asked&nbsp;</p>
        <p className="word">questions&nbsp;</p>
      </Styles.PageTitle>
      <Styles.QuestionsWrapper>
        {questions.map(({ question, text, image, id }) => (
          <Question title={question} content={text} image={image} key={id} />
        ))}
      </Styles.QuestionsWrapper>
      <Styles.BottomDecorWrap>
        <Styles.BottomDecor src={bottomDecor.src} />
      </Styles.BottomDecorWrap>
    </Styles.FaqContainer>
  );
};

export default Faq;
