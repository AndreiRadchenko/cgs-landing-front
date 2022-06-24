import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { useFormikContext } from "formik";
import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { IImage } from "../../../types/Admin/Admin.types";
import { IDataBlockchainResponse } from "../../../types/Admin/Response.types";

interface IBlockchainProjectEditProps {
  current: number;
  newFlag: boolean;
}

const BlockchainProjectEditor = ({
  current,
  newFlag,
}: IBlockchainProjectEditProps) => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IDataBlockchainResponse>();
  const deleteFunction = useDeleteImageFunction(values.projects[current], "");
  const uploadFunction = useUploadImageFunction(values.projects[current], "");

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();
    handleSubmit();
  };

  const deleteFunc = async () => (await deleteFunction)();
  const uploadFunc = (image: IImage) => uploadFunction(image);

  return (
    <div>
      <Styled.AdminPortfolioImage>
        <PhotoBlockDashedHorizontal
          emptyHeader="Drop banner here"
          photo={
            newFlag ? values.newProject.image : values.projects[current].image
          }
          deleteFunction={deleteFunc}
          uploadFunction={uploadFunc}
        />
      </Styled.AdminPortfolioImage>
      <div>
        <Styled.AdminInput
          placeholder="Name project"
          value={
            newFlag ? values.newProject.name : values.projects[current].name
          }
          onChange={handleChange}
          name={newFlag ? "newProject.name" : `projects.${current}.name`}
        />
        <Styled.AdminInput
          minRows={4}
          placeholder="Text"
          value={
            newFlag ? values.newProject.text : values.projects[current].text
          }
          onChange={handleChange}
          name={newFlag ? "newProject.text" : `projects.${current}.text`}
        />
        <Styled.AdminBigButton onClick={submitFunction} type="button">
          {newFlag ? "Add case" : "Edit case"}
        </Styled.AdminBigButton>
      </div>
    </div>
  );
};

export default BlockchainProjectEditor;
