import React, { useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import { IFeedbackBlock } from "../../../types/Admin/Response.types";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import arrowAdminFeedbackL from "../../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";
import { renderInputs } from "../../../utils/renderInputs";
import { FieldArray } from "formik";

interface IFeedbackBlockProps {
  state: IFeedbackBlock;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const AdminFeedbackBlock = ({
  state,
  onChangeFunction,
}: IFeedbackBlockProps) => {
  const [feedback, setFeedback] = useState(0);
  const renderState = { subtitle: state.subtitle, text3: state.text3 };

  const feedbackUp = () =>
    setFeedback(feedback + 1 < state.feedBacks.length ? feedback + 1 : 0);

  const feedbackDown = () =>
    setFeedback(feedback > 0 ? feedback - 1 : state.feedBacks.length - 1);

  const deleteFunc = (id: number) => {
    state.feedBacks.splice(id, 1);
    setFeedback(id > 0 ? id - 1 : 1);
  };
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <FieldArray name="FeedbackBlock">
          {(props) =>
            renderInputs({ props, state: renderState, onChangeFunction })
          }
        </FieldArray>
        <div />
        <AdminFeedbackForm state={state} />
        <div>
          <AdminFeedback
            feedback={state.feedBacks[feedback]}
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
