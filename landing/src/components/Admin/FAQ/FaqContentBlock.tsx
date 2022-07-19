import React, { useEffect } from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IFaqData } from "../../../types/Admin/AdminFaq.types";
import Question from "./Question";
import MetaTagsBlock from "../MetaTagsBlock";

const FaqContentBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IFaqData>();

  const addQuestion = (index: number) => {
    values.questions.splice(index + 1, 0, {
      question: "",
      text: "",
      id: `${Math.random()}.${Math.random()}`,
    });
  };

  const deleteQuestion = (index: number) => {
    values.questions.splice(index, 1);
  };

  console.log(values);

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>FAQ</Styled.AdminHeader>
      {values.questions.map((question, index) => (
        <Question
          key={question.id}
          question={question}
          handleChange={handleChange}
          questionName={`questions[${index}].question`}
          questionText={`questions[${index}].text`}
          addQuestion={addQuestion}
          index={index}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <MetaTagsBlock />
    </Styled.AdminPaddedBlock>
  );
};

export default FaqContentBlock;
