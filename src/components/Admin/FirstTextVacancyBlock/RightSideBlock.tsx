import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
const RightSideBlock = ({ image, uploadF, deleteF }) => {
  return (
    <div>
      <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
      <div>
        <PhotoBlockDashed
          photo={image}
          deleteFlag={true}
          uploadFunction={(image) => uploadF(image)}
          deleteFunction={deleteF}
        />
      </div>
      <br />
    </div>
  );
};

export default RightSideBlock;
