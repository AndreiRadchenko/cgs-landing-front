import React from "react";
import * as StyledThisComp from "../../styles/Partners.styled";
import { partnersArr } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";

const Partners = () => {
  return (
    <StyledThisComp.PartnersContainer>
      {partnersArr.map((item, idx) => (
        <StyledThisComp.PartnerImageWrapper key={idx}>
          <ImagePreview
            src={item}
            placeholder={"blur"}
            alt={"alt partners image"}
          />
        </StyledThisComp.PartnerImageWrapper>
      ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
