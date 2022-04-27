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
        <div key={`CorporateImages${ind}`}>
          <PhotoBlockDashedHorizontal photo={i} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default AdminCorporateImages