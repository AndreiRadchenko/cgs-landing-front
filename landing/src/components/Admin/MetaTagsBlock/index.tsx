﻿import React, { useEffect, useState } from "react";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { useFormikContext } from "formik";
import { IMetaBlock } from "../../../types/Admin/Response.types";
import { Counter, Message, Text } from "../../../styles/AdminBlogPage";
import { getNested } from "../../../utils/getNestedObjectByKeys";

interface IMetaBlockProps {
  theme?: string;
  nestedMeta?: { meta: IMetaBlock };
  nameBefore?: string;
}

const MetaTagsBlock = ({
  theme,
  nestedMeta,
  nameBefore = "",
}: IMetaBlockProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, handleChange } = useFormikContext<any>();
  const { meta } = nestedMeta ? nestedMeta : values;
  const [titleLength, setTitleLength] = useState(0);
  const [descLength, setDescLength] = useState(0);

  const handleDescInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescLength(e.target.value.length);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleLength(e.target.value.length);
  };

  const checkForChangeFunction = (name: string) => {
    switch (name) {
      case "customHead":
        return undefined;
      case "metaTitle":
        return handleTitle;
      case "metaDescription":
        return handleDescInput;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getMetaByName = (values: any, metaName: string) => {
      const arr = nameBefore.replace("]", "").replace(".", "[").split("[");
      const nestedObj = getNested(values, ...arr);
      return nestedObj.meta[metaName];
    };

    setDescLength(
      nameBefore
        ? getMetaByName(values, "metaDescription").length
        : values.meta.metaDescription.length
    );
    setTitleLength(
      nameBefore
        ? getMetaByName(values, "metaTitle").length
        : values.meta.metaTitle.length
    );
  }, [nameBefore, values]);

  return (
    <Styled.AdminPaddedBlock theme={theme}>
      {Object.entries(meta).map((el, id) => {
        return (
          <div key={id}>
            <SubHeaderWithInput
              header={el[0]
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str: string) => str.toUpperCase())}
              minRows={5}
              inputValue={el[1] as string}
              onInputFunction={() => checkForChangeFunction(el[0])}
              name={
                nameBefore != ""
                  ? `${nameBefore}.meta.${el[0]}`
                  : `meta.${el[0]}`
              }
              onChangeFunction={handleChange}
            />
            {el[0] !== "customHead" &&
              ((el[0] === "metaDescription" && (
                <Text>
                  <Message>
                    {(descLength > 160 || descLength < 120) &&
                      "Description should be between 120 and 160 characters"}
                  </Message>
                  <Counter
                    className={
                      descLength > 160 || descLength < 120 ? "error" : undefined
                    }
                  >
                    {descLength}
                  </Counter>
                </Text>
              )) || (
                <Text>
                  <Message>
                    {(titleLength > 60 || titleLength < 10) &&
                      "Title should be between 10 and 60 characters"}
                  </Message>
                  <Counter
                    className={
                      titleLength > 60 || titleLength < 10 ? "error" : undefined
                    }
                  >
                    {titleLength}
                  </Counter>
                </Text>
              ))}
          </div>
        );
      })}
    </Styled.AdminPaddedBlock>
  );
};

export default MetaTagsBlock;
