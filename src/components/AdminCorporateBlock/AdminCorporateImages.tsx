import PhotoBlockDashedHorizontal from "../AdminPageGlobal/PhotoBlockdashedHorizontal";
import React from "react";

const AdminCorporateImages = ({
  state,
}: {
  state: { images: { url: string }[] };
}) => {
  return (
    <div>
      {state.images.map((i, ind) => (
        <div key={ind*123131}>
          <PhotoBlockDashedHorizontal photo={i} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default AdminCorporateImages