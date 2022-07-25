import React from "react";
import { useFormikContext } from "formik";
import { AdminCardsGrid } from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminCard from "./AdminCard";

const AdminCardsList = () => {
  const { values, handleChange } = useFormikContext<IDataResponse>();

  return (
    <AdminCardsGrid className="cards">
      {Object.entries(values.CardsBlock).map((card, ind) => (
        <div key={ind}>
          <AdminCard
            info={card[1]}
            name={card[0]}
            number={ind + 1}
            onChangeFunction={handleChange}
          />
        </div>
      ))}
      {/* {values.CardsBlock.cards?.map((card, ind) => {
        return (
          <div key={ind}>
            <AdminCard
              info={card}
              number={ind + 1}
              onChangeFunction={handleChange}
              uploadFunction={uploadImageFunction}
              deleteFunction={deleteFunc}
            />
          </div>
        );
      })} */}
    </AdminCardsGrid>
  );
};

export default AdminCardsList;
