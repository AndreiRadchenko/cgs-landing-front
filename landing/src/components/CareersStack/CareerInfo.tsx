import React, { FC, useEffect, useState } from "react";
import Plus from "../../../public/plus.svg";

import * as Styles from "../../../src/styles/BlogTags.styled";
import { useFormikContext } from "formik";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { VacancyInput } from "../../styles/AdminCareersPage";

interface IBlogTags {
  isNewTicket: boolean;
  ticket: number;
  infoIndex: number;
}

const CareerInfo: FC<IBlogTags> = ({ isNewTicket, ticket, infoIndex }) => {
  const [fromUsList, setFromUsList] = useState<JSX.Element[]>([]);
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();
  const newInfo = values.vacancy?.info;
  const editInfo = values.tickets[ticket]?.info;

  const componentsArray = () => {
    return !isNewTicket
      ? newInfo?.map((tag, i) => newArticleTag(i))
      : editInfo.map((tag, i) => editArticleTag(i));
  };

  useEffect(() => {
    const result = componentsArray();
    result && setFromUsList(result);
  }, [ticket, isNewTicket, values.tickets, values.vacancy]);

  const newArticleTag = (index: number) => (
    <Styles.Tag
      name={`vacancy.fromUs[${index}]`}
      onChange={handleChange}
      value={values.vacancy?.info[infoIndex].values[index]}
      key={index}
    />
  );

  const editArticleTag = (index: number) => (
    <Styles.Tag
      name={`tickets[${ticket}].fromUs[${index}]`}
      onChange={handleChange}
      value={values.tickets[ticket].info[infoIndex].values[index]}
      key={index}
    />
  );

  // const addTagOnClick = () => {
  //   const newArticleCase = () => {
  //     newFromUs?.push("");
  //     if (newFromUs) {
  //       const index = newFromUs.length - 1;
  //       setFromUsList((oldTagList) => oldTagList.concat(newArticleTag(index)));
  //     }
  //   };
  //   const editArticleCase = () => {
  //     editFromUs.push("");
  //     const index = editFromUs.length - 1;
  //     setFromUsList((oldTagList) => oldTagList.concat(editArticleTag(index)));
  //   };
  //   !isNewTicket ? newArticleCase() : editArticleCase();
  // };
  //
  // const deleteItem = () => {
  //   setFromUsList(fromUsList.slice(0, -1));
  //   !isNewTicket
  //     ? values.vacancy?.fromUs.pop()
  //     : values.tickets[ticket].fromUs.pop();
  // };

  return (
    <>
      <VacancyInput
        type="text"
        name={
          isNewTicket
            ? `tickets[${ticket}].info[${infoIndex}].heading`
            : `vacancy?.info[${infoIndex}].heading`
        }
        placeholder="vacancy"
        value={
          isNewTicket
            ? values.tickets[ticket].info[infoIndex].heading
            : values.vacancy?.vacancy
        }
        onChange={handleChange}
      />
      <Styles.TagsWrapper>
        {fromUsList}
        <Styles.AddTag>
          <Styles.PlusIcon src={Plus.src} />
        </Styles.AddTag>
        <Styles.AddTag>
          <Styles.Minus>-</Styles.Minus>
        </Styles.AddTag>
      </Styles.TagsWrapper>
    </>
  );
};

export default CareerInfo;
