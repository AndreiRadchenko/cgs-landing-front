import React from "react";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import * as Styled from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { ITech } from "../../../types/Admin/Response.types";
import { IPropsWithImage } from "../../../types/Admin/BlockProps";

interface ITechProps extends IPropsWithImage {
  info: ITech;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
  ind: number;
}

const AdminTech = ({
  info,
  onChangeFunction,
  ind,
  uploadFunction,
  deleteFunction,
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
          deleteFunction={deleteFunction}
          uploadFunction={(image) => uploadFunction(image)}
          photo={info.image}
          header="+ Add image here"
          deleteFlag={true}
        />
      </Styled.AdminTechWrapper>
    </Styled.AdminCardsGrid>
  );
};

export default AdminTech;
