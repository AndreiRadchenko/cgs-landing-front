import React, { ChangeEvent } from "react";
import { IImage } from "../../../types/Admin/Admin.types";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ICard } from "../../../types/Admin/Response.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";

interface ICardProps extends IPropsWithImage {
  info: ICard;
  number: number;
  onChangeFunction: (e?: ChangeEvent<HTMLInputElement> | string) => void;
}

const AdminCard = ({
  info,
  number,
  onChangeFunction,
  deleteFunction,
  uploadFunction,
}: ICardProps) => {
  const deleteFun = () => deleteFunction(info);
  const uploadFunc = (image: IImage) => uploadFunction(image, info);

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
        deleteFunction={deleteFun}
        uploadFunction={uploadFunc}
      />
    </Styled.AdminCardsGrid>
  );
};

export default AdminCard;
