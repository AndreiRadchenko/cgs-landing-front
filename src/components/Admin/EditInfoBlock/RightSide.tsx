import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

const RightSideBlock = ({ image }: IImage) => {
  return (
    <div>
      <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
      <div>
        <PhotoBlockDashed photo={image} deleteFlag={true} />
      </div>
      <br />
    </div>
  );
};

export default RightSideBlock;
