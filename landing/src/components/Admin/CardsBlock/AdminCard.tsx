import React from "react";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ICard } from "../../../types/Admin/Response.types";

interface ICardProps {
  name: string;
  info: ICard;
  number: number;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const AdminCard = ({ info, number, onChangeFunction, name }: ICardProps) => {
  return (
    <>
      <Styled.AdminCardsHeader># {number}</Styled.AdminCardsHeader>
      <SubHeaderWithInput
        name={`CardsBlock.${name}.subtitle`}
        header={`Subtitle`}
        inputValue={info.subtitle}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        name={`CardsBlock.${name}.text`}
        header="Text"
        minRows={3}
        inputValue={info.text}
        onChangeFunction={onChangeFunction}
      />
    </>
  );
};

export default AdminCard;
