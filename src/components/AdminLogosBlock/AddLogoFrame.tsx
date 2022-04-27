import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import useUploadModal from "../../hooks/useUploadModal";
import * as Styled from "../../styles/AdminPage";
import AdminUploadModal from "../AdminUploadModal";

const AddLogoFrame = ({ state }: { state: { images: any[] } }) => {
  const { modal, toggleModal } = useUploadModal();
  const queryClient = useQueryClient();

  const addNewLogo = (response: string) => {
    state.images.push(response);
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return (
    <Styled.AdminAddLogoBlock>
      {modal ? <AdminUploadModal back={toggleModal} func={addNewLogo} /> : null}
      <Styled.AdminSubTitle onClick={toggleModal} style={{ cursor: "pointer" }}>
        + Add Logo
      </Styled.AdminSubTitle>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
