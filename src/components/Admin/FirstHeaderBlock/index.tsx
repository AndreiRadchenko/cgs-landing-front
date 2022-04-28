import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

const FirstAdminBlock = ({ state }: { state: IImage }) => {
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
