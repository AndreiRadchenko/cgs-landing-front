import React from "react";
import * as StyledThisComp from "../../styles/Partners.styled";
import { partnersArr } from "../../utils/variables";
import Image from "next/image";

const Partners = () => {
  return (
    <StyledThisComp.PartnersContainer>
      {partnersArr.map((item, idx) => (
        <StyledThisComp.PartnerImageWrapper>
          <Image key={idx} src={item} alt={"alt partners image"} />
        </StyledThisComp.PartnerImageWrapper>
      ))}
    </StyledThisComp.PartnersContainer>
  );
};

export default Partners;
