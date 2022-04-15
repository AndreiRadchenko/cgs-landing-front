import React from "react";
import * as Styled from "../../../styles/AdminPage";

const LeftSideBlock = () => {
  return (
    <div>
      {["Title", "Text 1", "Text 2", "Button"].map((i) => (
        <>
          <Styled.AdminMainBlockSubTitle key={Math.random()}>
            {i}
          </Styled.AdminMainBlockSubTitle>
          <Styled.AdminPageInput />
        </>
      ))}
    </div>
  );
};

export default LeftSideBlock;
