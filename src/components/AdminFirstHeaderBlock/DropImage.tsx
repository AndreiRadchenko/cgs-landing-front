import React from "react";
import * as Styled from "../../styles/AdminPage";
import SmallImage from "./smallImage";

const DropImage = () => {
  return (
    <Styled.AdminAddLogoBlock>
      <SmallImage />
      <Styled.AdminMainBlockSubTitle>
        Drop image here
      </Styled.AdminMainBlockSubTitle>

      <Styled.AdminMainBlockComment>
        Supports: JPG, PNG
      </Styled.AdminMainBlockComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default DropImage;
