import React from "react";
import Image from "next/image";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import clip from "../../../public/clip.png";
import photoFrame from "../../../public/photoFrame.png";
import photoPerson from "../../../public/photoPerson.png";

const PhotoImage = () => {
  return (
    <Styles.LikeToSeePhotoContainer>
      <Styles.LikeToSeePhotoClip>
        <Image src={clip} alt={"clip"} />
      </Styles.LikeToSeePhotoClip>
      <Styles.LikeToSeePhotoFrame>
        <Image src={photoFrame} alt={"Photo Frame"} />
      </Styles.LikeToSeePhotoFrame>
      <Styles.LikeToSeePhotoPerson>
        <Image src={photoPerson} objectFit={"cover"} alt={"Photo Person"} />
      </Styles.LikeToSeePhotoPerson>
      <Styles.LikeToSeePhotoText>
        Meet Serhii. He is a React / Javascript developer. He began his way to
        the stratosphere as a Trainee in Camp. You can begin similarly :)
      </Styles.LikeToSeePhotoText>
    </Styles.LikeToSeePhotoContainer>
  );
};

export default PhotoImage;
