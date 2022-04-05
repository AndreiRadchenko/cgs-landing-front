import React from "react";
import starIMG from "../../../public/star.svg";
import ImagePreview from "../Image/ImagePreview";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";

type CardPropType = {
  title: string;
  arrayOfRequirements: string[];
  text: string;
  footer?: string;
  subFooter?: string;
};

const WhatWeLikeToSeeCard = ({
  title,
  arrayOfRequirements,
  text,
  footer,
  subFooter,
}: CardPropType) => {
  return (
    <>
      <Styles.LikeToSeeCardTitle>{title}</Styles.LikeToSeeCardTitle>
      {arrayOfRequirements.map((el, ind) => (
        <Styles.LikeToSeeCardReqirement key={`${el}${ind}`}>
          <ImagePreview src={starIMG} alt={starIMG} height="20" width="20" />
          <Styles.LikeToSeeCardReqirementText>
            {` ${el}`}
          </Styles.LikeToSeeCardReqirementText>
        </Styles.LikeToSeeCardReqirement>
      ))}
      <Styles.LikeToSeeCardText>{text}</Styles.LikeToSeeCardText>
      <Styles.LikeToSeeCardFooter>{footer}</Styles.LikeToSeeCardFooter>
      <Styles.LikeToSeeCardSubFooter>{subFooter}</Styles.LikeToSeeCardSubFooter>
    </>
  );
};

export default WhatWeLikeToSeeCard;
