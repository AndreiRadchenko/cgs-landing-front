import { FieldArray } from "formik";
import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ITechnologyBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminTechList from "./AdminTechList";

interface ITechBlockProps {
  state: ITechnologyBlock;
  onChangeFunction: any;
}

const render = ({ state, onChangeFunction }: ITechBlockProps) => (
  <AdminTechList state={state} onChangeFunction={onChangeFunction} />
);

const AdminTechBlock = ({ state, onChangeFunction }: ITechBlockProps) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.subtitle}
            name="TechnologyBlock.subtitle"
            onChangeFunction={onChangeFunction}
          />
        </div>
      </Styled.AdminCardsGrid>
      <FieldArray name="TechnologyBlock.techs">
        {() => render({ state, onChangeFunction })}
      </FieldArray>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminTechBlock;
