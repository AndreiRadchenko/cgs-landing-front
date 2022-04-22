import React from "react";
import { AdminCardsGrid } from "../../styles/AdminPage";
import { ITechnologyBlock } from "../../types/Admin/Response.types";
import AdminTech from "./AdminTech";

const AdminTechList = ({
  state,
  onChangeFunction,
}: {
  state: ITechnologyBlock;
  onChangeFunction: any;
}) => {
  return (
    <AdminCardsGrid>
      {state.techs.map((i, ind) => (
        <AdminTech
          key={`TechAdmin${ind}`}
          info={i}
          onChangeFunction={onChangeFunction}
          ind={ind}
        />
      ))}
    </AdminCardsGrid>
  );
};

export default AdminTechList;
