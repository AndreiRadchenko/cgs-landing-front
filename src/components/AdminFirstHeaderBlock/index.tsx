import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

const FirstAdminBlock = ({ state }: { state: { image: { url: string } } }) => {
  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Home</Styled.AdminHeader>
      <Styled.AdminSubTitle>Upload Logo</Styled.AdminSubTitle>
      <Styled.AdminAddMainLogoBlock>
        <PhotoBlockDashed photo={state.image} deleteFlag={true} />
      </Styled.AdminAddMainLogoBlock>
    </Styled.AdminPaddedBlock>
  );
};

export default FirstAdminBlock;
