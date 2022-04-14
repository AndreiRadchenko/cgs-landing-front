import React, { useState } from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import LetsCodeForm from "./LetsCodeForm";

const LetsCode = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledThisComp.LetsCodeContainer>
      <StyledThisComp.FormContainer>
        <LetsCodeForm setButtonIsHovered={setIsHovered} />
      </StyledThisComp.FormContainer>
      <StyledThisComp.ImageContainer>
        <StyledThisComp.ImageTagsContainer>
          <StyledThisComp.h2CodeIconOpen content={"<h2>"} />
          <StyledThisComp.h2CodeIconClose content={"</h2>"} />
          <StyledThisComp.pCodeIcon content={"<p>"} />
        </StyledThisComp.ImageTagsContainer>
        <StyledThisComp.ImageCatContainer isHovered={isHovered} />
      </StyledThisComp.ImageContainer>
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCode;
