import React from "react";
import * as Styled from "../../../styles/AdminPage";
import { IImage } from "../../../types/Admin/Admin.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";

interface IRightProps extends IPropsWithImage {
  image: IImage;
}

const RightSideBlock = ({
  image,
  uploadFunction,
  deleteFunction,
}: IRightProps) => {
  const uploadFunc = (image: any) => uploadFunction(image);

  return (
    <div>
      <Styled.AdminSubTitle>Main page photo</Styled.AdminSubTitle>
      <div>
        <PhotoBlockDashed
          photo={image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunction}
        />
      </div>
      <br />
    </div>
  );
};

export default RightSideBlock;