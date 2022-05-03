import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import { renderInputs } from "../../../utils/renderInputs";
import { FieldArray, useFormikContext } from "formik";
import AdminCarousel from "../Global/AdminImageCarousel";

const AdminFeedbackBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const [feedback, setFeedback] = useState(0);
  const renderState = {
    subtitle: values.FeedbackBlock.subtitle,
    text3: values.FeedbackBlock.text3,
  };

  const deleteFunc = (id: number) => {
    values.FeedbackBlock.feedBacks.splice(id, 1);
    setFeedback(id > 0 ? id - 1 : 0);
    handleSubmit();
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
        <AdminFeedbackForm state={values.FeedbackBlock} submit={handleSubmit} />
        <div>
          {values.FeedbackBlock.feedBacks.length === 0 ? (
            <h1>No feedbacks</h1>
          ) : (
            <AdminFeedback
              feedback={values.FeedbackBlock.feedBacks[feedback]}
              deleteFunc={() => deleteFunc(feedback)}
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
