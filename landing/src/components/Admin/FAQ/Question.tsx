import React from "react";
import * as Styled from "./adminFaq.styled";
import { IQuestion } from "../../../types/Admin/AdminFaq.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TextEditor from "../../TextEditor/TextEditor";

interface IQuestionComponent {
  question: IQuestion;
  handleChange: (e?: string | React.ChangeEvent<any>) => void;
  questionName: string;
  questionText: string;
}

const Question = ({
  question,
  handleChange,
  questionName,
  questionText,
}: IQuestionComponent) => {
  return (
    <div>
      <SubHeaderWithInput
        placeholder="Question"
        inputValue={question.question}
        onChangeFunction={handleChange}
        name={questionName}
        header={"Question"}
      />
      <TextEditor
        value={question.text}
        name={questionText}
        header={"Answer"}
        isBlog={false}
      />
      <Styled.AddButton>[ + add next question ]</Styled.AddButton>
    </div>
  );
};

export default Question;
