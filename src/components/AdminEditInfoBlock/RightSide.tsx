import React from "react";
import * as Styled from "../../styles/AdminPage";
import mainPhoto from "../../../public/mainLogo.png";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";

const RightSideBlock = () => {
  return (
    <div>
      <Styled.AdminMainBlockSubTitle>
        Main page photo
      </Styled.AdminMainBlockSubTitle>

      <PhotoBlockDashed photo={mainPhoto} deleteFlag={true} />
    </div>
  );
};

export default RightSideBlock;
