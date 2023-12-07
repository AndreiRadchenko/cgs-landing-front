import React, { useState } from "react";
import * as Styled from "../../../../styles/BlogTags.styled";
import { AdminInput } from "../../../../styles/AdminPage";

interface IAddTag {
  handleCreateTag: (tag: string) => void;
}

const AddTag = ({ handleCreateTag }: IAddTag) => {
  const [inputVal, setInputVal] = useState<string>("");

  const handleClick = () => {
    if (inputVal) {
      handleCreateTag(inputVal);
      setInputVal("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.target.value);
  };
  return (
    <Styled.TagInputWrapper>
      <AdminInput
        value={inputVal}
        onChange={(e) => handleChange(e)}
        style={{ marginBottom: "0px" }}
        placeholder="Add new tag"
      />
      <Styled.TagInputSubmit type="button" onClick={handleClick}>
        +
      </Styled.TagInputSubmit>
    </Styled.TagInputWrapper>
  );
};

export default AddTag;
