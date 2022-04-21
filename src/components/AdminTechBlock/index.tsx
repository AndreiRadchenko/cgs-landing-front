import React from "react";
import * as Styled from "../../styles/AdminPage";
import { ITechnologyBlock } from "../../types/Admin/Response.types";
import SubHeaderWithInput from "../AdminPageGlobal/SubHeaderWithInput";
import AdminTech from "./AdminTech";

const AdminTechBlock = ({ state }: { state: ITechnologyBlock }) => {
  return (
    <Styled.AdminPaddedBlock theme="dark">
      <Styled.AdminCardsGrid>
        <div>
          <SubHeaderWithInput
            header="Subtitle"
            inputValue={state.subtitle}
            onChangeFunction={() => {}}
          />
        </div>
        <div></div>
        {state.techs.map((i) => {
          return (
            <AdminTech
              key={Math.random()}
              subtitle1={i.subtitle1}
              text={i.text}
              image={i.image}
            />
          );
        })}
      </Styled.AdminCardsGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default AdminTechBlock;
