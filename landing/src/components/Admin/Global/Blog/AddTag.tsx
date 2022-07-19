import { useFormikContext } from "formik";
import React, { useRef, useState } from "react";
import { AdminInput } from "../../../../styles/AdminPage";
import * as Styled from "../../../../styles/BlogTags.styled";
import { IBlogResponse } from "../../../../types/Admin/Response.types";

const AddTag = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const { values, handleSubmit } = useFormikContext<IBlogResponse>();
  const handleClick = () => {
    if (
      ref.current &&
      inputVal.length > 0 &&
      !values.newArticle.possibleTags.includes(inputVal)
    ) {
      values.newArticle.possibleTags.push(inputVal);
      setInputVal("");
      ref.current.value = "";
      handleSubmit();
    }
  };

  const handleChange = () => {
    if (ref.current) {
      setInputVal(ref.current.value);
    }
  };
  return (
    <Styled.TagInputWrapper>
      <Styled.TagInputWrapper>
        <AdminInput
          onChange={handleChange}
          ref={ref}
          width="280px"
          height="56px"
        />
      </Styled.TagInputWrapper>
      <Styled.TagInputSubmit onClick={handleClick}>
        Add tag
      </Styled.TagInputSubmit>
    </Styled.TagInputWrapper>
  );
};

export default AddTag;
