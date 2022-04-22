import React from "react";
import * as Styled from "../../styles/AdminPage";
import { IEditInformation } from "../../types/Admin/Response.types";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";

const EditInformationBlock = ({
  state,
  onChangeFunction,
}: {
  state: IEditInformation;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminHeader>Edit Information</Styled.AdminHeader>

      <Styled.AdminHalfGrid>
        <LeftSideBlock state={state} onChangeFunction={onChangeFunction} />
        <RightSideBlock image={state.image} />
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
