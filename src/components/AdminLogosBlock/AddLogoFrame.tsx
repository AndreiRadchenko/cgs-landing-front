import React from "react";
import * as Styled from "../../styles/AdminPage";

const AddLogoFrame = () => {
  return (
    <Styled.AdminAddLogoBlock>
      <Styled.AdminSubTitle>+ Add Logo</Styled.AdminSubTitle>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
