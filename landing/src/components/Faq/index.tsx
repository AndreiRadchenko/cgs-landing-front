import React from "react";
import Question from "./Question";
import { IFaqData } from "../../types/Faq.types";
import * as Styles from "./faq.styles";
import bottomDecor from "../../../public/FAQDecorations/bottomDecor.svg";

const Faq = ({ questions }: IFaqData) => {
  return (
    <>
      <Styles.FaqContainer>
        <Styles.PageTitle>
          <div>frequently&nbsp;</div>
          <div>asked&nbsp;</div>
          <div>questions&nbsp;</div>
        </Styles.PageTitle>
        <Styles.Separator />
        {questions.map(({ question, text, image, id }) => (
          <Question title={question} content={text} image={image} key={id} />
        ))}
        <Styles.BottomDecor src={bottomDecor.src} />
      </Styles.FaqContainer>
    </>
  );
};

export default Faq;
