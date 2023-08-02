import React, { useEffect, useState } from "react";
import * as Styled from "./adminFaq.styled";
import { IQuestion } from "../../../types/Admin/AdminFaq.types";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
const TextEditor = dynamic(() => import("../../TextEditor/TextEditor"), {
  ssr: false,
});
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { useFormikContext } from "formik";
import { IFaqData } from "../../../types/Company.types";
import { IImage } from "../../../types/Admin/Admin.types";
import dynamic from "next/dynamic";

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
  const { values } = useFormikContext<IFaqData>();
  const [isImage, setIsImage] = useState<boolean>(false);

  const deleteImage = useDeleteImageFunction(values.questions[index], "");
  const uploadImage = useUploadImageFunction(values.questions[index], "");

  const toggleImage = () => {
    if (isImage && values.questions[index].image !== null) {
      values.questions[index].image = null;
    }
    setIsImage((old) => !old);
  };

  useEffect(() => {
    setIsImage(values.questions[index].image !== undefined);
  }, [index, values.questions]);
  return (
    <Styled.ContentWrapper className={isImage ? "image" : undefined}>
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
        <TextEditor name={questionText} header={"Answer"} />
        <Styled.ButtonsContainer>
          <Styled.AddButton onClick={() => addQuestion(index)}>
            [ + add next question ]
          </Styled.AddButton>
          <Styled.AddButton onClick={() => toggleImage()}>
            {` [  ${isImage ? "- delete" : "+ add"} image to this answer ]`}
          </Styled.AddButton>
          <Styled.DeleteButton onClick={() => deleteQuestion(index)}>
            delete point
          </Styled.DeleteButton>
        </Styled.ButtonsContainer>
      </Styled.QuestionContainer>
      {isImage && (
        <Styled.PhotoContainer>
          <PhotoBlockDashed
            className="faq"
            deleteFlag={true}
            photo={values.questions[index].image}
            deleteFunction={async () => (await deleteImage)()}
            uploadFunction={(image: IImage) => uploadImage(image)}
          />
        </Styled.PhotoContainer>
      )}
    </Styled.ContentWrapper>
  );
};

export default Question;
