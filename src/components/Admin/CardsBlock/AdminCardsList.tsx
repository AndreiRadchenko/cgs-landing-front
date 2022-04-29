import { useFormikContext } from "formik";
import useDeleteImageFunction from "../../../hooks/deleteImageFunction";
import useUploadImageFunction from "../../../hooks/uploadImageFunction";
import { AdminCardsGrid } from "../../../styles/AdminPage";
import { IDataResponse } from "../../../types/Admin/Response.types";
import AdminCard from "./AdminCard";

const AdminCardsList = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<
    IDataResponse
  >();
  const uploadImageFunction = useUploadImageFunction(handleSubmit);
  const deleteImageFunction = useDeleteImageFunction(values, handleSubmit);

  return (
    <AdminCardsGrid>
      {values.CardsBlock.cards.map((card, ind) => {
        return (
          <div key={ind}>
            <AdminCard
              info={card}
              number={ind + 1}
              onChangeFunction={handleChange}
              uploadImage={uploadImageFunction}
              deleteImage={async (image: any) => (await deleteImageFunction)(image)}
            />
          </div>
        );
      })}
    </AdminCardsGrid>
  );
};

export default AdminCardsList;
