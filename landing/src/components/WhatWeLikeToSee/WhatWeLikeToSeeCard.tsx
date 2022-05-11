import React from "react";
import starIMG from "../../../public/star.svg";
import ImagePreview from "../Image/ImagePreview";
import * as Styles from "../../styles/WhatWeLikeToSee.styled";
import { SplitBrackets } from "../../utils/splitBrackets";

type CardPropType = {
  title?: string;
  arrayOfRequirements?: { point: string; _id: string }[];
  text?: string;
  footer?: string;
  subFooter?: string;
};

const WhatWeLikeToSeeCard = ({
  title = "",
  arrayOfRequirements = [],
  text = "",
  footer = "",
  subFooter = "",
}: CardPropType) => {
  return (
    <>
      <Styles.LikeToSeeCardTitle>
        <SplitBrackets text={title} />
      </Styles.LikeToSeeCardTitle>
      {arrayOfRequirements.map((el, ind) => (
        <Styles.LikeToSeeCardRequirement key={`${el.point}${ind}`}>
          <ImagePreview src={starIMG} alt={starIMG} height="20" width="20" />
          <Styles.LikeToSeeCardRequirementText>
            {" "}
            <SplitBrackets text={el.point} />
          </Styles.LikeToSeeCardRequirementText>
        </Styles.LikeToSeeCardRequirement>
      ))}
      <Styles.LikeToSeeCardText>
        <SplitBrackets text={text} />
      </Styles.LikeToSeeCardText>
      <Styles.LikeToSeeCardFooter>
        <SplitBrackets text={footer} />
      </Styles.LikeToSeeCardFooter>
      <Styles.LikeToSeeCardSubFooter>
        <SplitBrackets text={subFooter} />
      </Styles.LikeToSeeCardSubFooter>
    </>
  );
};

export default WhatWeLikeToSeeCard;
