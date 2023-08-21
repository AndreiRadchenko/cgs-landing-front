﻿import { useFormikContext } from "formik";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import {
  AdminHeader,
  AdminHeaderGrid,
  AdminPaddedBlock,
} from "../../../../styles/AdminPage";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import HistoryLink from "../../HistoryLink";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceWeb } from "../../../../types/Admin/Response.types";
import { renderInputs } from "../../../../utils/renderInputs";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import { queryKeys } from "../../../../consts/queryKeys";

const AdminHeadBlockWeb = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWeb>([
    queryKeys.getServiceWebPage,
  ])?.headerBlock;

  const { values, handleChange, handleSubmit } =
    useFormikContext<IServiceWeb>();

  const deleteMainImage = useDeleteImageFunction(values.headerBlock);
  const uploadMainImage = useUploadImageFunction(values.headerBlock);

  const { text, button, buttonLink } = values.headerBlock;

  const headerBlock = { text, button, buttonLink };

  const handleClick = () => handleSubmit();
  // const handleClick = () => null;
  return (
    <AdminPaddedBlock>
      <AdminHeader>Web // Desktop Development</AdminHeader>
      <AdminHeaderGrid>
        <div>
          <SubHeaderWithInput
            header="Title"
            onChangeFunction={handleChange}
            name="headerBlock.title"
            inputValue={values.headerBlock.title}
            width="257px"
          />
          {renderInputs({
            props: { name: "headerBlock" },
            state: headerBlock,
            onChangeFunction: handleChange,
          })}
        </div>
        <PhotoBlockDashed
          photo={values.headerBlock.image}
          deleteFunction={async () => (await deleteMainImage)()}
          uploadFunction={(image: IImage) => uploadMainImage(image)}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
          className="fullWidth"
        />
      </AdminHeaderGrid>
      {data?.lastModified && (
        <HistoryLink
          sectionName="Head Block"
          lastModified={data?.lastModified}
          link={"/history/web/headerBlock"}
        />
      )}
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default AdminHeadBlockWeb;
