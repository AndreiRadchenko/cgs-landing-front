import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IFeedbackBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import arrowAdminFeedbackL from "../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";

const AdminFeedbackBlock = ({ state, onChangeFunction }: { state: IFeedbackBlock, onChangeFunction: any }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            name="FeedbackBlock.subtitle"
            inputValue={state.subtitle}
            onChangeFunction={onChangeFunction}
          />
          <SubHeaderWithInput
            header="Text 3"
            name="FeedbackBlock.text3"
            inputValue={state.text3}
            onChangeFunction={onChangeFunction}
          />
        </div>
        <div />
        <AdminFeedbackForm />
        <div>
          <AdminFeedback feedback={state.feedbacks[0]} />
          <Styled.AdminFeedbackArrows>
            <Image src={arrowAdminFeedbackL} />
            <Image src={arrowAdminFeedbackR} />
          </Styled.AdminFeedbackArrows>
        </div>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFeedbackBlock;
