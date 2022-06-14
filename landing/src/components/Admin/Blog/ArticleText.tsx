import React, { ChangeEvent, FC } from "react";
import TextEditor from "../../TextEditor/TextEditor";
import { useFormikContext } from "formik";

interface IArticleText {
  value?: string;
  handleChange: (e?: string | ChangeEvent<any> | undefined) => void;
  name: string;
}

const ArticleText: FC<IArticleText> = ({ value, handleChange, name }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <TextEditor
        header="Text"
        setFieldValue={(val) => setFieldValue(name, val)}
        value={value as string}
      />
      {/*<SubHeaderWithInput*/}
      {/*  header="Text"*/}
      {/*  inputValue={value as string}*/}
      {/*  name={name}*/}
      {/*  onChangeFunction={handleChange}*/}
      {/*  isBlog={true}*/}
      {/*  height="473px"*/}
      {/*/>*/}
    </>
  );
};

export default ArticleText;
