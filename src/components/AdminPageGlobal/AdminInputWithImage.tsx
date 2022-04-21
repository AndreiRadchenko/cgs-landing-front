import React from "react";
import * as Styled from "../../styles/AdminPage";
import { InputWithImage } from "../../types/Admin/Admin.types";
import PhotoBlockDashed from "./PhotoBlockDashed";

const AdminInputWithImage = ({photo, inputValue, onChangeFunction}: InputWithImage) => {
  return (
    <Styled.AdminFlyingElement key={Math.random()}>
      <PhotoBlockDashed photo={photo} deleteFlag={true} />
      <br />
      <div>
        <Styled.AdminInput value={inputValue} onChange={onChangeFunction} rows={Math.ceil(inputValue.length / 40)} />
      </div>
    </Styled.AdminFlyingElement>
  );
};

export default AdminInputWithImage;
