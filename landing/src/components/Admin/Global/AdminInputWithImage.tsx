import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { InputWithImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "./PhotoBlockDashed";

const AdminInputWithImage = ({
  photo,
  inputValue,
  onChangeFunction,
  name,
  uploadFunction,
  deleteFunction,
}: InputWithImage) => {
  return (
    <Styled.AdminFlyingElement>
      <PhotoBlockDashed
        photo={photo}
        deleteFlag={true}
        uploadFunction={uploadFunction!}
        deleteFunction={deleteFunction!}
      />
      <br />
      <div>
        <Styled.AdminInput
          name={name}
          value={inputValue}
          onChange={onChangeFunction}
        />
      </div>
    </Styled.AdminFlyingElement>
  );
};

export default AdminInputWithImage;