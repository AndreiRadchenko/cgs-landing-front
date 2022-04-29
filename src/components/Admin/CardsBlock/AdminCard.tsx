import React from "react";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ICard } from "../../../types/Admin/Response.types";
import { IImage } from "../../../types/Admin/Admin.types";

interface ICardProps {
  info: ICard;
  number: number;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  deleteImage: (localState?: IImage) => void;
  uploadImage: (image: any, localState: IImage) => void;
}

const AdminCard = ({
  info,
  number,
  onChangeFunction,
  deleteImage,
  uploadImage,
}: ICardProps) => {
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
        deleteFunction={() => deleteImage(info)}
        uploadFunction={(image) => uploadImage(image, info)}
      />
    </Styled.AdminCardsGrid>
  );
};

export default AdminCard;
