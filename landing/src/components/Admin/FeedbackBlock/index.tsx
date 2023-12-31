import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import { renderInputs } from "../../../utils/renderInputs";
import {
  FieldArray,
  FieldArrayRenderProps,
  Formik,
  useFormikContext,
} from "formik";
import AdminCarousel from "../Global/AdminImageCarousel";
import { feedbackInit } from "../../../consts";
import useFeedbackLogic from "../../../hooks/useFeedbackLogic";

const AdminFeedbackBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IDataResponse>();
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

  const render = (props: FieldArrayRenderProps) =>
    renderInputs({
      props: { ...props, isAdmin: true },
      state: renderState,
      onChangeFunction: handleChange,
    });

  const deleteFunc = () => deleteFunction(feedback);

  return (
    <div style={{ marginBottom: "3em" }}>
      <Styled.AdminHalfGrid>
        <div>
          <FieldArray name="FeedbackBlock">{render}</FieldArray>
        </div>
        <div />

        <Formik
          enableReinitialize
          key={`feedbackForm${isNewFeedback}`}
          validateOnChange={false}
          onSubmit={isNewFeedback ? submitFunction : editFunction}
          initialValues={
            isNewFeedback
              ? feedbackInit
              : values.FeedbackBlock.feedBacks[feedback]
          }
        >
          <AdminFeedbackForm
            submit={handleSubmit}
            isNewFeedback={isNewFeedback}
          />
        </Formik>

        <div>
          {values.FeedbackBlock.feedBacks.length === 0 ? (
            <h1>No feedbacks</h1>
          ) : (
            <AdminFeedback
              setIsNewFeedback={setIsNewFeedback}
              isNewFeedback={isNewFeedback}
              feedback={values.FeedbackBlock.feedBacks[feedback]}
              deleteFunc={deleteFunc}
            />
          )}
          <AdminCarousel
            page={feedback}
            setPage={setFeedback}
            length={values.FeedbackBlock.feedBacks.length}
          />
        </div>
      </Styled.AdminHalfGrid>
    </div>
  );
};

export default AdminFeedbackBlock;
