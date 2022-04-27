import React from "react";
import useUploadModal from "../../hooks/useUploadModal";
import * as Styled from "../../styles/AdminPage";
import AdminUploadModal from "../AdminUploadModal";

const AddLogoFrame = () => {
  const { modal, toggleModal } = useUploadModal();

  return (
    <Styled.AdminAddLogoBlock>
      {modal ? <AdminUploadModal back={toggleModal} /> : null}
      <Styled.AdminSubTitle onClick={toggleModal} style={{cursor: "pointer"}}>
        + Add Logo
      </Styled.AdminSubTitle>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
