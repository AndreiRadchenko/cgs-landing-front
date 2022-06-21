import React, { ChangeEvent, FC } from "react";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IArticleText {
  value?: string;
  handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
  name: string;
}

const ArticleText: FC<IArticleText> = ({ value, handleChange, name }) => {
  return (
    <SubHeaderWithInput
      header="Text"
      inputValue={value as string}
      name={name}
      onChangeFunction={handleChange}
      isBlog={true}
      height="473px"
    />
  );
};

export default ArticleText;
