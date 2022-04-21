import React from "react";
import PhotoBlockDashed from "../AdminPageGlobal/PhotoBlockDashed";
import * as Styled from "../../styles/AdminPage";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import { ITech } from "../../types/Admin/Response.types";

const AdminTech = ({ subtitle1, text, image }: ITech) => {
  return (
    <Styled.AdminCardsGrid>
      <div>
        <SubHeaderWithInput
          header="Subtitle 1"
          inputValue={subtitle1}
          onChangeFunction={() => {}}
          limit={28}
        />
        <SubHeaderWithInput
          header="Text"
          inputValue={text.replaceAll("|", "")}
          onChangeFunction={() => {}}
          rows={
            text.split(`
`).length
          }
        />
      </div>
      <Styled.AdminTechWrapper>
        <PhotoBlockDashed
          photo={image}
          header="+ Add image here"
          deleteFlag={true}
        />
      </Styled.AdminTechWrapper>
    </Styled.AdminCardsGrid>
  );
};

export default AdminTech;
