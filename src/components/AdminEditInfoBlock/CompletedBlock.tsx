import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IEditInformation } from "../../types/Admin/Admin.types";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";

const EditInformationBlock = ({state}: {state: IEditInformation}) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHeader>Edit Information</Styled.AdminHeader>

      <Styled.AdminEditInfoGridBlock>
        <LeftSideBlock state={state} />
        <RightSideBlock />
      </Styled.AdminEditInfoGridBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
