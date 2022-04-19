import React from "react";
import * as Styled from "../../styles/AdminPage";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";

const EditInformationBlock = () => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminBlockHeader>Edit Information</Styled.AdminBlockHeader>

      <Styled.AdminEditInfoGridBlock>
        <LeftSideBlock />
        <RightSideBlock />
      </Styled.AdminEditInfoGridBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default EditInformationBlock;
