import React from "react";

import Image from "next/image";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import PhotoImage from "./PhotoImage";
import WhatWeLikeToSeeCard from "./WhatWeLikeToSeeCard";
import { careersCardArr } from "../../utils/variables";

const WhatWeLikeToSee = () => {
  return (
    <Styles.LikeToSeeContainer>
      {careersCardArr.map((requirement, ind) => (
        <Styles.LikeToSeeItem
          key={ind + requirement.title}
          className={ind % 2 !== 0 ? "reverseItem" : ""}
        >
          {requirement.img === "Photo" ? (
            <PhotoImage />
          ) : (
            <Styles.LikeToSeePhotoContainer>
              <Image src={requirement.img} alt={requirement.title} />
            </Styles.LikeToSeePhotoContainer>
          )}
          <Styles.LikeToSeeTextContainer>
            <Styles.LikeToSeeHeader>
              {requirement.header}
            </Styles.LikeToSeeHeader>
            <WhatWeLikeToSeeCard
              title={requirement.title}
              arrayOfRequirements={requirement.arrayOfRequirements}
              text={requirement.text}
              footer={requirement.footer}
              subFooter={requirement.subFooter}
            />
          </Styles.LikeToSeeTextContainer>
        </Styles.LikeToSeeItem>
      ))}
    </Styles.LikeToSeeContainer>
  );
};

export default WhatWeLikeToSee;
