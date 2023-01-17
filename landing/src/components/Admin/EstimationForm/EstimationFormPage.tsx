import React, { useState } from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import { useScrollTo } from "../../../hooks/useScrollTo";
import BlockDropdown from "../BlockDropdown";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import SaveBtn from "../Global/SaveBtn";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import QuestionBlock from "./QuestionBlock";
import AddQuestionButton from "./AddQuestionButton";
import { IEstimationFormPage } from "../../../types/Admin/AdminEstimationForm.types";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";

const EstimationFormPage = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IEstimationFormPage>();

  console.log(values);

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  console.log(values.pageNumber.slice(0, 1));

  return (
    <BlockDropdown title={`Page ${values.pageNumber.slice(0, 1)}`}>
      <div>
        <SubHeaderWithInput
          header="Title"
          inputValue={values?.title}
          name="title"
          minRows={1}
          onChangeFunction={handleChange}
        />
        {values.questions
          ? values.questions.map((question, i) => {
              return (
                <QuestionBlock
                  key={question._id}
                  question={question}
                  name={values.questions[i].title}
                />
              );
            })
          : null}
        <AddQuestionButton
          type="button"
          buttonText="+ Add a question"
          handleClick={() => {
            return;
          }}
        />
        <SubHeaderWithInput
          header="Button"
          inputValue={values.buttonName}
          name="buttonName"
          minRows={1}
          onChangeFunction={handleChange}
        />
        <SaveBtn title="Save Changes" handleClick={submitFunction} />
      </div>
    </BlockDropdown>
  );
};

export default EstimationFormPage;
