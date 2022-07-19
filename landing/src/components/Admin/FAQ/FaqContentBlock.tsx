import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import { IFaqData } from "../../../types/Admin/AdminFaq.types";
import Question from "./Question";

const FaqContentBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IFaqData>();

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
        />
      ))}
    </Styled.AdminPaddedBlock>
  );
};

export default FaqContentBlock;
