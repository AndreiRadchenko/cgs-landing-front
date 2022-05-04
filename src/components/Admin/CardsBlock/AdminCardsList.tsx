import { useFormikContext } from "formik";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import { AdminCardsGrid } from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminCard from "./AdminCard";

const AdminCardsList = () => {
  const { values, handleChange } = useFormikContext<
    IDataResponse
  >();
  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  return (
    <AdminCardsGrid>
      {values.CardsBlock.cards.map((card, ind) => {
        return (
          <div key={ind}>
            <AdminCard
              info={card}
              number={ind + 1}
              onChangeFunction={handleChange}
              uploadFunction={uploadImageFunction}
              deleteFunction={async (image: any) =>
                (await deleteImageFunction)(image)
              }
            />
          </div>
        );
      })}
    </AdminCardsGrid>
  );
};

export default AdminCardsList;
