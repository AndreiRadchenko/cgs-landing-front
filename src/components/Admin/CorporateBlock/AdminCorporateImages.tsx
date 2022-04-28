import PhotoBlockDashedHorizontal from "../Global/PhotoBlockdashedHorizontal";
import React from "react";

interface ICorporateProps {
  state: {
    images: { url: string }[]
  };
}

const AdminCorporateImages = ({
  state,
}: ICorporateProps) => {
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