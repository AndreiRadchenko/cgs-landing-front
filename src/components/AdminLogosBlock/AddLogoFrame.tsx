import React from "react";
import * as Styled from "../../styles/AdminPage";

const AddLogoFrame = () => {
  return (
    <Styled.AdminAddLogoBlock>
      <Styled.AdminBlockSubTitle>+ Add Logo</Styled.AdminBlockSubTitle>
      <Styled.AdminBlockComment>Supports: JPG, PNG</Styled.AdminBlockComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
