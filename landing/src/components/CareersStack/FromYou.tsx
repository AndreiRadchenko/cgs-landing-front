import React, { FC, useEffect, useState } from "react";
import Plus from "../../../public/plus.svg";

import * as Styles from "../../../src/styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IDataCareersResponse } from "../../types/Admin/Response.types";

interface IBlogTags {
  isNewTicket: boolean;
  ticket: number;
}

const FromYou: FC<IBlogTags> = ({ isNewTicket, ticket }) => {
  const [tagList, setTagList] = useState<JSX.Element[]>([]);
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const newStack = values.vacancy?.fromYou;
  const editStack = values.tickets[ticket]?.fromYou;

  const componentsArray = () => {
    return !isNewTicket
      ? newStack?.map((tag, i) => newArticleTag(i))
      : editStack.map((tag, i) => editArticleTag(i));
  };

  useEffect(() => {
    const result = componentsArray();
    result && setTagList(result);
  }, [ticket, isNewTicket, values.tickets, values.vacancy]);

  const newArticleTag = (index: number) => (
    <Styles.Tag
      name={`vacancy.fromYou[${index}]`}
      onChange={handleChange}
      value={values.vacancy?.fromYou[index]}
      key={index}
    />
  );

  const editArticleTag = (index: number) => (
    <Styles.Tag
      name={`tickets[${ticket}].fromYou[${index}]`}
      onChange={handleChange}
      value={values.tickets[ticket].fromYou[index]}
      key={index}
    />
  );

  const addTagOnClick = () => {
    const newArticleCase = () => {
      newStack?.push("");
      if (newStack) {
        const index = newStack.length - 1;
        setTagList((oldTagList) => oldTagList.concat(newArticleTag(index)));
      }
    };
    const editArticleCase = () => {
      editStack.push("");
      const index = editStack.length - 1;
      setTagList((oldTagList) => oldTagList.concat(editArticleTag(index)));
    };
    !isNewTicket ? newArticleCase() : editArticleCase();
  };

  const deleteItem = () => {
    setTagList(tagList.slice(0, -1));
    !isNewTicket
      ? values.vacancy?.fromYou.pop()
      : values.tickets[ticket].fromYou.pop();
  };

  return (
    <Styles.TagsWrapper>
      {tagList}
      <Styles.AddTag onClick={addTagOnClick}>
        <Styles.PlusIcon src={Plus.src} />
      </Styles.AddTag>
      <Styles.AddTag onClick={deleteItem}>
        <Styles.Minus>-</Styles.Minus>
      </Styles.AddTag>
    </Styles.TagsWrapper>
  );
};

export default FromYou;
