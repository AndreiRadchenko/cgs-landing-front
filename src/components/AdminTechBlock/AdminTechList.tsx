import React from "react";
import { AdminCardsGrid } from "../../styles/AdminPage";
import { ITechnologyBlock } from "../../types/Admin/Response.types";
import AdminTech from "./AdminTech";

interface ITechListProps {
  state: ITechnologyBlock;
  onChangeFunction: any;
}

const render = ({ state, onChangeFunction }: ITechListProps) =>
  state.techs.map((i, ind) => (
    <AdminTech
      key={`TechAdmin${ind}`}
      info={i}
      onChangeFunction={onChangeFunction}
      ind={ind}
    />
  ));

const AdminTechList = ({ state, onChangeFunction }: ITechListProps) => {
  return <AdminCardsGrid>{render({ state, onChangeFunction })}</AdminCardsGrid>;
};

export default AdminTechList;
