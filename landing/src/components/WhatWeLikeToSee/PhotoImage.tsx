import React, { FC } from "react";
import Image from "next/image";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import clip from "../../../public/clip.png";
import photoFrame from "../../../public/photoFrame.png";
import photoPerson from "../../../public/photoPerson.png";
import { IWorkerData } from "../../types/Admin/Response.types";

interface IPhotoImage {
  data: IWorkerData;
}

const PhotoImage: FC<IPhotoImage> = ({ data }) => {
  return (
    <>
      <Styles.LikeToSeePhotoClip>
        <Image src={clip} alt={"clip"} />
      </Styles.LikeToSeePhotoClip>
      <Styles.LikeToSeePhotoFrame>
        <Image src={photoFrame} alt={"Photo Frame"} />
      </Styles.LikeToSeePhotoFrame>
      <Styles.LikeToSeePhotoPerson>
        <Image
          src={data.image?.url || photoPerson}
          objectFit={"cover"}
          alt={"Photo Person"}
          width="410px"
          height="420px"
        />
      </Styles.LikeToSeePhotoPerson>
      <Styles.LikeToSeePhotoText>{data.title}</Styles.LikeToSeePhotoText>
    </>
  );
};

export default PhotoImage;
