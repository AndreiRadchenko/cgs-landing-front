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
  addQuestion: (index: number) => void;
  deleteQuestion: (index: number) => void;
  index: number;
}

const Question = ({
  question,
  handleChange,
  questionName,
  questionText,
  addQuestion,
  deleteQuestion,
  index,
}: IQuestionComponent) => {
  return (
    <Styled.QuestionContainer>
      <Styled.QuestionTitleContainer>
        <SubHeaderWithInput
          placeholder="Question"
          inputValue={question.question}
          onChangeFunction={handleChange}
          name={questionName}
          header={"Question"}
        />
      </Styled.QuestionTitleContainer>
      <TextEditor
        value={question.text}
        name={questionText}
        header={"Answer"}
        isBlog={false}
      />
      <Styled.ButtonsContainer>
        <Styled.AddButton onClick={() => addQuestion(index)}>
          [ + add next question ]
        </Styled.AddButton>
        <Styled.DeleteButton onClick={() => deleteQuestion(index)}>
          delete point
        </Styled.DeleteButton>
      </Styled.ButtonsContainer>
    </Styled.QuestionContainer>
  );
};

export default Question;
