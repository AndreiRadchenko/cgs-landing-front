import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import CatIconIMG from "../../../public/catIcon.png";
import LetsCodeForm from "./LetsCodeForm";
import ImagePreview from "../Image/ImagePreview";

const LetsCode = () => {

  return (
    <StyledThisComp.LetsCodeContainer>
      <StyledThisComp.FormContainer>
        <LetsCodeForm />
      </StyledThisComp.FormContainer>
      <StyledThisComp.ImageContainer>
        <StyledThisComp.ImageTagsContainer>
          <StyledThisComp.h2CodeIconOpen content={"<h2>"} />
          <StyledThisComp.h2CodeIconClose content={"</h2>"} />
          <StyledThisComp.pCodeIcon content={"<p>"} />
        </StyledThisComp.ImageTagsContainer>
        <StyledThisComp.ImageCatContainer>
          <Image layout="fill" src={CatIconIMG} alt={"img cat icon alt"} />
        </StyledThisComp.ImageCatContainer>
      </StyledThisComp.ImageContainer>
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCode;
