import React from "react";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import * as Styled from "../../styles/AdminPage";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ICard } from "../../types/Admin/Response.types";

const AdminCard = ({ subtitle, text, image, number }: ICard) => {
  return (
    <Styled.AdminCardsGrid>
      <div>
        <SubHeaderWithInput
          header={`${number} Card subtitle`}
          inputValue={subtitle}
          onChangeFunction={() => {}}
          limit={28}
        />
        <SubHeaderWithInput
          header="Text 5"
          inputValue={text}
          onChangeFunction={() => {}}
          limit={28}
        />
      </div>
      <PhotoBlockDashed photo={image} header="+ Add Icon" deleteFlag={true} />
    </Styled.AdminCardsGrid>
  );
};

export default AdminCard;
