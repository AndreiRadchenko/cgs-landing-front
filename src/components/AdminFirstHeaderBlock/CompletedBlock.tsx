import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import icon from "../../../public/smallMountain.svg";

const FirstAdminBlock = () => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Home</Styled.AdminHeader>
      <Styled.AdminSubTitle>Upload Logo</Styled.AdminSubTitle>
      <Styled.AdminAddMainLogoBlock>
        <PhotoBlockDashed photo={icon} />
      </Styled.AdminAddMainLogoBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default FirstAdminBlock;
