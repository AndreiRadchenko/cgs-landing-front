import React from "react";
import * as Styled from "../../../styles/AdminPage";
import TextEditor from "../../TextEditor/TextEditor";

const SubtitleBlock = () => {
  return (
    <>
      <Styled.AdminPaddedBlock>
        <TextEditor
          mainPage={true}
          header="Subtitle"
          name="SubtitleBlock.title"
          isBlog={false}
        />
      </Styled.AdminPaddedBlock>
    </>
  );
};

export default SubtitleBlock;
