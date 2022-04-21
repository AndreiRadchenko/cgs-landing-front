import React from "react";
import * as Styled from "../../styles/AdminPage";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

const RightSideBlock = ({image}: any) => {
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
