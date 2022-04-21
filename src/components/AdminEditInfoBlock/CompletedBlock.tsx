import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IEditInformation } from "../../types/Admin/Response.types";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";

const EditInformationBlock = ({state}: {state: IEditInformation}) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHeader>Edit Information</Styled.AdminHeader>

      <Styled.AdminEditInfoGridBlock>
        <LeftSideBlock state={state} />
        <RightSideBlock image={state.image} />
      </Styled.AdminEditInfoGridBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
