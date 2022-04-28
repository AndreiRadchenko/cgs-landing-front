import React from "react";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ICard } from "../../../types/Admin/Response.types";

interface ICardProps {
  info: ICard;
  number: number;
  onChangeFunction: (e?: React.ChangeEvent<any>) => void;
}

const AdminCard = ({ info, number, onChangeFunction }: ICardProps) => {
  return (
    <Styled.AdminCardsGrid>
      <div>
        <SubHeaderWithInput
          name={`CardsBlock.cards.${number - 1}.subtitle`}
          header={`${number} Card subtitle`}
          inputValue={info.subtitle}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
          name={`CardsBlock.cards.${number - 1}.text`}
          header="Text 5"
          inputValue={info.text}
          onChangeFunction={onChangeFunction}
        />
      </div>
      <PhotoBlockDashed
        photo={info.image}
        header="+ Add Icon"
        deleteFlag={true}
      />
    </Styled.AdminCardsGrid>
  );
};

export default AdminCard;
