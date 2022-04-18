import React from "react";
import * as Styled from "../../styles/AdminPage";
import DropImage from "./DropImage";

const FirstAdminBlock = () => {
  return (
    <Styled.AdminMainPaddedBlock>
      <Styled.AdminMainBlockHeader>Home</Styled.AdminMainBlockHeader>
      <Styled.AdminMainBlockSubTitle>Upload Logo</Styled.AdminMainBlockSubTitle>
      <DropImage />
    </Styled.AdminMainPaddedBlock>
  );
};

export default FirstAdminBlock;
