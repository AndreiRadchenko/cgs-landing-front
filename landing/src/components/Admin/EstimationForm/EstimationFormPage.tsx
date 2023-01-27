import React, { Fragment, useRef, useState, memo } from "react";
import BlockDropdown from "../BlockDropdown";
import QuestionBlock from "./QuestionBlock";
import {
  IEstimationFormPage,
  IEstimationFormPages,
  IEstimationFormQuestion,
  IUpdatePageBody,
} from "../../../types/Admin/AdminEstimationForm.types";
import AddQuestionButton from "./AddQuestionButton";
import SaveBtn from "../Global/SaveBtn";
import Title from "./Title";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";

interface IEstimationFormPageProps {
  values: IEstimationFormPage;
  pageNumber: number;
  refetch: () => void;
  setIsCustomLoading: React.Dispatch<React.SetStateAction<boolean>>;
  pages: IEstimationFormPages;
}

const EstimationFormPage = ({
  values,
  pageNumber,
  refetch,
  pages,
  setIsCustomLoading,
}: IEstimationFormPageProps) => {
  const textInput = useRef<HTMLTextAreaElement>(null);
  const buttonTextInput = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync } = useMutation(
    [queryKeys.updateEstimationForm],
    (data: IUpdatePageBody) => adminEstimationFormService.updatePageData(data)
  );

  const [questions, setQuestions] = useState(values.questions ?? []);

  const saveChagesHandler = async () => {
    setIsCustomLoading((prev) => !prev);
    document.body.style.cursor = "wait";
    await mutateAsync({
      pageId: values._id,
      data: {
        ...values,
        questions,
        title: textInput.current?.value ?? values.title,
        buttonName: buttonTextInput.current?.value ?? values.buttonName,
      },
    });
    await refetch();
    document.body.style.cursor = "auto";
    setIsCustomLoading((prev) => !prev);
  };

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };
  const saveQuestion = (obj: IEstimationFormQuestion, index: number) => {
    const newQuestions = questions;
    newQuestions[index] = obj;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        title: "",
        isRequired: false,
        isSplitColumns: false,
        isAbilityToAttachFile: false,
        isHiddenText: false,
        hiddenText: "",
        optionsType: "TEXT",
        options: [],
        conditionsForAppearance: null,
        questionNumber: 1,
      },
    ]);
  };

  return (
    <BlockDropdown isOpened={pageNumber === 1} title={`Page ${pageNumber}`}>
      <div>
        <Title
          header="Title"
          ref={textInput}
          inputValue={values.title}
          minRows={1}
        />

        {questions
          ? questions.map((question, i) => {
              return (
                <Fragment key={question.optionsType + question.title + i}>
                  <QuestionBlock
                    pages={pages}
                    onRemoveHandler={removeQuestion}
                    saveQuestion={saveQuestion}
                    question={question}
                    name={questions[i].title}
                    index={i + 1}
                    currentPage={pageNumber - 1}
                  />
                </Fragment>
              );
            })
          : null}

        <AddQuestionButton
          type="button"
          buttonText="+ Add a question"
          handleClick={addQuestion}
        />

        <Title
          header="Button"
          ref={buttonTextInput}
          inputValue={values.buttonName}
          minRows={1}
        />

        <SaveBtn title="Save Changes" handleClick={saveChagesHandler} />
      </div>
    </BlockDropdown>
  );
};

export default memo(EstimationFormPage);
