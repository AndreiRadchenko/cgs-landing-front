import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import icon from "../../../public/smallMountain.svg";

const FirstAdminBlock = () => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminBlockHeader>Home</Styled.AdminBlockHeader>
      <Styled.AdminBlockSubTitle>Upload Logo</Styled.AdminBlockSubTitle>
      <Styled.AdminAddMainLogoBlock>
        <PhotoBlockDashed photo={icon} />
      </Styled.AdminAddMainLogoBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default FirstAdminBlock;
