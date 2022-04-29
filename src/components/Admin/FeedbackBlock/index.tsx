import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import arrowAdminFeedbackL from "../../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";
import { renderInputs } from "../../../utils/renderInputs";
import { FieldArray, useFormikContext } from "formik";

const AdminFeedbackBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const [feedback, setFeedback] = useState(0);
  const renderState = {
    subtitle: values.FeedbackBlock.subtitle,
    text3: values.FeedbackBlock.text3,
  };

  const feedbackUp = () =>
    setFeedback(
      feedback + 1 < values.FeedbackBlock.feedBacks.length ? feedback + 1 : 0
    );

  const feedbackDown = () =>
    setFeedback(
      feedback > 0 ? feedback - 1 : values.FeedbackBlock.feedBacks.length - 1
    );

  const deleteFunc = (id: number) => {
    values.FeedbackBlock.feedBacks.splice(id, 1);
    setFeedback(id > 0 ? id - 1 : 1);
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
          <AdminFeedback
            feedback={values.FeedbackBlock.feedBacks[feedback]}
            deleteFunc={() => deleteFunc(feedback)}
          />
          <Styled.AdminFeedbackArrows>
            <Styled.AdminPointer onClick={feedbackUp}>
              <Image src={arrowAdminFeedbackL} />
            </Styled.AdminPointer>
            <Styled.AdminPointer onClick={feedbackDown}>
              <Image src={arrowAdminFeedbackR} />
            </Styled.AdminPointer>
          </Styled.AdminFeedbackArrows>
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFeedbackBlock;
