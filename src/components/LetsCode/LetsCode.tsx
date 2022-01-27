import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import CatIconIMG from "../../../public/cat-icon.svg";
import LetsCodeForm from "./LetsCodeForm";
import Image from "next/image";

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
