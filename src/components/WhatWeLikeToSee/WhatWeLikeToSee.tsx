import React from "react";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import photoFrame from "../../../public/photoFrame.png";
import photoPerson from "../../../public/photoPerson.png";
import helmetPhoto from "../../../public/helmet.png";
import clip from "../../../public/clip.png";
import WhatWeLikeToSeeCard from "./WhatWeLikeToSeeCard";
import Image from "next/image";
import { careersReqierements } from "../../utils/variables";

const WhatWeLikeToSee = () => {
  return (
    <Styles.LikeToSeeContainer>
      <Styles.LikeToSeeItem>
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
            Meet Serhii. He is a React / Javascript developer. He began his way
            to the stratosphere as a Trainee in Camp. You can begin similarly :)
          </Styles.LikeToSeePhotoText>
        </Styles.LikeToSeePhotoContainer>
        <Styles.LikeToSeeTextContainer>
          <Styles.LikeToSeeHeader>
            We know that finding your first job can be quite nerve-wracking and
            challenging, especially for young engineers, and therefore we will
            try our best to make this experience with us as smooth and enjoyable
            as possible.
          </Styles.LikeToSeeHeader>
          <WhatWeLikeToSeeCard
            title={careersReqierements[0].title}
            arrayOfRequirements={careersReqierements[0].arrayOfRequirements}
            text={careersReqierements[0].text}
          />
        </Styles.LikeToSeeTextContainer>
      </Styles.LikeToSeeItem>
      <Styles.LikeToSeeItem
        className={careersReqierements[1].subFooter ? "reverseItem" : " "}
      >
        <Styles.LikeToSeePhotoContainer>
          <Image src={helmetPhoto} alt={careersReqierements[1].title} />
        </Styles.LikeToSeePhotoContainer>
        <Styles.LikeToSeeTextContainer>
          <WhatWeLikeToSeeCard
            title={careersReqierements[1].title}
            arrayOfRequirements={careersReqierements[1].arrayOfRequirements}
            text={careersReqierements[1].text}
            footer={careersReqierements[1].footer}
            subFooter={careersReqierements[1].subFooter}
          />
        </Styles.LikeToSeeTextContainer>
      </Styles.LikeToSeeItem>
    </Styles.LikeToSeeContainer>
  );
};

export default WhatWeLikeToSee;
