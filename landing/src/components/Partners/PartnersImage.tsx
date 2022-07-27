import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { Image } from "../../styles/HomePage/Partners.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import { IPartnersImage } from "../../types/Partners.types";

const PartnersImage = ({ img, idx }: IPartnersImage) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.LogosBlock.images.hover;
  const hoverImg = (data && data[idx].url) || img;

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) =>
    (e.currentTarget.src = hoverImg);

  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) =>
    (e.currentTarget.src = img);

  return (
    <Image
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      src={img}
      alt="partner img"
    />
  );
};

export default PartnersImage;
