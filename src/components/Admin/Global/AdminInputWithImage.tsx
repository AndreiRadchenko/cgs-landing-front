import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { InputWithImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "./PhotoBlockDashed";

const AdminInputWithImage = ({
  photo,
  inputValue,
  onChangeFunction,
  name,
}: InputWithImage) => {
  return (
    <Styled.AdminFlyingElement>
      <PhotoBlockDashed photo={photo} deleteFlag={true} />
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
