import React from "react";
import * as Styled from "../../../styles/AdminPage";
import LeftSideBlock from "./LeftSide";
import RightSideBlock from "./RightSide";

const EditInformationBlock = () => {
  return (
    <Styled.AdminMainPaddedBlock theme="dark">
      <Styled.AdminMainBlockHeader>
        Edit Information
      </Styled.AdminMainBlockHeader>

      <Styled.AdminMainEditInfoGridBlock>
        <LeftSideBlock />
        <RightSideBlock />
      </Styled.AdminMainEditInfoGridBlock>
    </Styled.AdminMainPaddedBlock>
  );
};

export default EditInformationBlock;
