import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import { renderInputs } from "../../../utils/renderInputs";
import { FieldArray, Formik, useFormikContext } from "formik";
import AdminCarousel from "../Global/AdminImageCarousel";
import { feedbackInit } from "../../../consts";
import useFeedbackLogic from "../../../hooks/useFeedbackLogic";

const AdminFeedbackBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const [isNewFeedback, setIsNewFeedback] = useState(true);
  const {
    submitFunction,
    deleteFunction,
    setFeedback,
    feedback,
    editFunction,
  } = useFeedbackLogic();

  const renderState = {
    subtitle: values.FeedbackBlock.subtitle,
    text3: values.FeedbackBlock.text3,
  };

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <FieldArray name="FeedbackBlock">
          {(props) =>
            renderInputs({
              props,
              state: renderState,
              onChangeFunction: handleChange,
            })
          }
        </FieldArray>
        <div />

        <Formik
          key={`feedbackForm${isNewFeedback}`}
          validateOnChange={false}
          onSubmit={isNewFeedback ? submitFunction : editFunction}
          initialValues={
            isNewFeedback
              ? JSON.parse(JSON.stringify(feedbackInit))
              : values.FeedbackBlock.feedBacks[feedback]
          }
        >
          <AdminFeedbackForm submit={handleSubmit} isNewFeedback={isNewFeedback} />
        </Formik>

        <div>
          {values.FeedbackBlock.feedBacks.length === 0 ? (
            <h1>No feedbacks</h1>
          ) : (
            <AdminFeedback
              setIsNewFeedback={setIsNewFeedback}
              isNewFeedback={isNewFeedback}
              feedback={values.FeedbackBlock.feedBacks[feedback]}
              deleteFunc={() => deleteFunction(feedback)}
            />
          )}
          <AdminCarousel
            page={feedback}
            setPage={setFeedback}
            length={values.FeedbackBlock.feedBacks.length}
          />
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFeedbackBlock;
