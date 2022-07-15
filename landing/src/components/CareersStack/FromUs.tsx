import React, { FC, useEffect, useState } from "react";
import Plus from "../../../public/plus.svg";

import * as Styles from "../../../src/styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IDataCareersResponse } from "../../types/Admin/Response.types";

interface IBlogTags {
  isNewTicket: boolean;
  ticket: number;
}

const FromUs: FC<IBlogTags> = ({ isNewTicket, ticket }) => {
  const [fromUsList, setFromUsList] = useState<JSX.Element[]>([]);
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const newFromUs = values.vacancy?.fromUs;
  const editFromUs = values.tickets[ticket]?.fromUs;

  const componentsArray = () => {
    return !isNewTicket
      ? newFromUs?.map((tag, i) => newArticleTag(i))
      : editFromUs.map((tag, i) => editArticleTag(i));
  };

  useEffect(() => {
    const result = componentsArray();
    result && setFromUsList(result);
  }, [ticket, isNewTicket, values.tickets, values.vacancy]);

  const newArticleTag = (index: number) => (
    <Styles.Tag
      name={`vacancy.fromUs[${index}]`}
      onChange={handleChange}
      value={values.vacancy?.fromUs[index]}
      key={index}
    />
  );

  const editArticleTag = (index: number) => (
    <Styles.Tag
      name={`tickets[${ticket}].fromUs[${index}]`}
      onChange={handleChange}
      value={values.tickets[ticket].fromUs[index]}
      key={index}
    />
  );

  const addTagOnClick = () => {
    const newArticleCase = () => {
      newFromUs?.push("");
      if (newFromUs) {
        const index = newFromUs.length - 1;
        setFromUsList((oldTagList) => oldTagList.concat(newArticleTag(index)));
      }
    };
    const editArticleCase = () => {
      editFromUs.push("");
      const index = editFromUs.length - 1;
      setFromUsList((oldTagList) => oldTagList.concat(editArticleTag(index)));
    };
    !isNewTicket ? newArticleCase() : editArticleCase();
  };

  const deleteItem = () => {
    setFromUsList(fromUsList.slice(0, -1));
    !isNewTicket
      ? values.vacancy?.fromUs.pop()
      : values.tickets[ticket].fromUs.pop();
  };

  return (
    <Styles.TagsWrapper>
      {fromUsList}
      <Styles.AddTag onClick={addTagOnClick}>
        <Styles.PlusIcon src={Plus.src} />
      </Styles.AddTag>
      <Styles.AddTag onClick={deleteItem}>
        <Styles.Minus>-</Styles.Minus>
      </Styles.AddTag>
    </Styles.TagsWrapper>
  );
};

export default FromUs;
