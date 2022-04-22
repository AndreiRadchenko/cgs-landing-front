import { AdminCardsGrid } from "../../styles/AdminPage";
import { ICard } from "../../types/Admin/Response.types";
import AdminCard from "./AdminCard";

const AdminCardsList = ({
  state,
  onChangeFunction,
}: {
  state: ICard[];
  onChangeFunction: any;
}) => {
  return (
    <AdminCardsGrid>
      {state.map((card, ind) => {
        return (
          <div key={ind}>
            <AdminCard
              info={card}
              number={ind + 1}
              onChangeFunction={onChangeFunction}
            />
          </div>
        );
      })}
    </AdminCardsGrid>
  );
};

export default AdminCardsList;
