import React from "react";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ITech } from "../../../types/Admin/Response.types";

interface ITechProps {
  info: ITech;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  ind: number;
  uploadImage: (image: any) => void;
  deleteImage: () => void;
}

const AdminTech = ({
  info,
  onChangeFunction,
  ind,
  uploadImage,
  deleteImage,
}: ITechProps) => {
  return (
    <Styled.AdminCardsGrid>
      <div>
        <SubHeaderWithInput
          header="Subtitle 1"
          name={`TechnologyBlock.techs.${ind}.subtitle1`}
          inputValue={info.subtitle1}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
          header="Text"
          name={`TechnologyBlock.techs.${ind}.text`}
          inputValue={info.text}
          onChangeFunction={onChangeFunction}
        />
      </div>
      <Styled.AdminTechWrapper>
        <PhotoBlockDashed
          deleteFunction={deleteImage}
          uploadFunction={(image) => uploadImage(image)}
          photo={info.image}
          header="+ Add image here"
          deleteFlag={true}
        />
      </Styled.AdminTechWrapper>
    </Styled.AdminCardsGrid>
  );
};

export default AdminTech;
