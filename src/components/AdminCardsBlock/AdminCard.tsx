import React from "react";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import * as Styled from "../../styles/AdminPage";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ICard } from "../../types/Admin/Response.types";

const AdminCard = ({
  info,
  number,
  onChangeFunction,
}: {
  info: ICard;
  number: number;
  onChangeFunction: any;
}) => {
  return (
    <Styled.AdminCardsGrid>
      <div>
        <SubHeaderWithInput
        name={`CardsBlock.cards.${number-1}.subtitle`}
          header={`${number} Card subtitle`}
          inputValue={info.subtitle}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
        name={`CardsBlock.cards.${number-1}.text`}
          header="Text 5"
          inputValue={info.text}
          onChangeFunction={onChangeFunction}
        />
      </div>
      <PhotoBlockDashed photo={info.image} header="+ Add Icon" deleteFlag={true} />
    </Styled.AdminCardsGrid>
  );
};

export default AdminCard;
