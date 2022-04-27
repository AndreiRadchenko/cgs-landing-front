import React from "react";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import * as Styled from "../../styles/AdminPage";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ITech } from "../../types/Admin/Response.types";

const AdminTech = ({
  info,
  onChangeFunction,
  ind,
}: {
  info: ITech;
  onChangeFunction: any;
  ind: number;
}) => {
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
          photo={info.image}
          header="+ Add image here"
          deleteFlag={true}
        />
      </Styled.AdminTechWrapper>
    </Styled.AdminCardsGrid>
  );
};

export default AdminTech;
