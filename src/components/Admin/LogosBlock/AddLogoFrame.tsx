import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../consts/queryKeys";
import useUploadModal from "../../../hooks/useUploadModal";
import { adminGlobalService } from "../../../services/adminHomePage";
import * as Styled from "../../../styles/AdminPage";
import AdminUploadModal from "../UploadModal";

export interface ILogosProps {
  state: { images: any[] };
  submit: () => void;
}

const AddLogoFrame = ({ state, submit }: ILogosProps) => {
  const { modal, toggleModal } = useUploadModal();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(queryKeys.uploadImage, (image) =>
    adminGlobalService.uploadImage(image)
  );

  const addNewLogo = async (image: any) => {
    state.images.push(await mutateAsync(image));
    submit();
    queryClient.invalidateQueries(queryKeys.GetFullPage);
  };

  return (
    <Styled.AdminAddLogoBlock>
      {modal ? <AdminUploadModal back={toggleModal} func={addNewLogo} /> : null}
      <Styled.AdminPointer>
        <Styled.AdminSubTitle onClick={toggleModal}>
          + Add Logo
        </Styled.AdminSubTitle>
      </Styled.AdminPointer>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
