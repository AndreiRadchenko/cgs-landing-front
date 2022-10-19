import React from "react";
import TextEditor from "../../TextEditor/TextEditor";

const SubtitleBlock = () => {
  return (
    <div>
      <TextEditor
        onlyColor={true}
        header="Subtitle"
        name="SubtitleBlock.title"
        isBlog={false}
      />
    </div>
  );
};

export default SubtitleBlock;
