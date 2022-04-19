import React from "react";
import * as Styled from "../../styles/AdminPage";
import mainPhoto from "../../../public/mainLogo.png";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

const RightSideBlock = () => {
  return (
    <div>
      <Styled.AdminBlockSubTitle>Main page photo</Styled.AdminBlockSubTitle>
      <div>
        <PhotoBlockDashed photo={mainPhoto} deleteFlag={true} />
      </div>
      <br />
    </div>
  );
};

export default RightSideBlock;
