import { AdminCardsGrid } from "../../../styles/AdminPage";
import { ICard } from "../../../types/Admin/Response.types";
import AdminCard from "./AdminCard";

interface ICardsListProps {
  state: ICard[];
  onChangeFunction:  (e?: React.ChangeEvent<any>) => void;
}

const AdminCardsList = ({ state, onChangeFunction }: ICardsListProps) => {
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
