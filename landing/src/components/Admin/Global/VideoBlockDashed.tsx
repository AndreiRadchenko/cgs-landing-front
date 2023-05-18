import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { IPhotoBlock } from "../../../types/Admin/Admin.types";
import AdminUploadModal from "../UploadModal";
import AdminEmptyImage from "./AdminEmptyImage";

import * as Styled from "../../../styles/AdminPage";
import useUploadModal from "../../../hooks/useUploadModal";
import { queryKeys } from "../../../consts/queryKeys";

const VideoBlockDashed = ({
  photo,
  deleteFlag,
  header = "Drop new video here",
  deleteFunction,
  uploadFunction,
  className,
  imageStyle,
  style,
}: IPhotoBlock) => {
  const queryClient = useQueryClient();
  const { modal, toggleModal } = useUploadModal();
  const deleteFunc = () => deleteFunction!();

  const stateUpload = queryClient.getQueryData([queryKeys.uploadImage]);

  return photo !== null && photo !== undefined ? (
    <Styled.AdminPhotoBlock className={className} style={style}>
      {modal ? (
        <AdminUploadModal func={uploadFunction} back={toggleModal} />
      ) : null}
      <Styled.AdminPhotoGrid className="fullWidth">
        <Styled.AdminImageWrapper style={imageStyle}>
          <p>
            Loaded video url:{" "}
            <a
              style={{ color: "blue" }}
              href={photo.url}
              target="blank"
              rel="noreferrer noopener"
            >
              {photo.url}
            </a>
          </p>
        </Styled.AdminImageWrapper>
      </Styled.AdminPhotoGrid>
      <Styled.AdminDashedPositionGrid>
        {/* {1 !== 0 && (
          <Styled.AdminSubTitle size="1.165em">Loading...</Styled.AdminSubTitle>
        )} */}
        {deleteFlag ? (
          <Styled.AdminDeleteText onClick={deleteFunc}>
            one click delete video
          </Styled.AdminDeleteText>
        ) : null}
      </Styled.AdminDashedPositionGrid>
    </Styled.AdminPhotoBlock>
  ) : (
    <AdminEmptyImage
      className={className}
      func={uploadFunction}
      style={style}
      header={header}
    />
  );
};

export default VideoBlockDashed;
