import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IFeedbackBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminFeedback from "./AdminFeedback";
import AdminFeedbackForm from "./AdminFeedbackForm";
import arrowAdminFeedbackL from "../../../public/arrowAdminFeedbackL.svg";
import arrowAdminFeedbackR from "../../../public/arrowAdminFeedbackR.svg";
import Image from "next/image";

const AdminFeedbackBlock = ({ state }: { state: IFeedbackBlock }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminEditInfoGridBlock>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.subtitle}
            onChangeFunction={() => {}}
          />
          <SubHeaderWithInput
            header="Text 3"
            inputValue={state.text3}
            onChangeFunction={() => {}}
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
      </Styled.AdminEditInfoGridBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminFeedbackBlock;
