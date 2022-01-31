import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import CatIconIMG from "../../../public/catIcon.png";
import LetsCodeForm from "./LetsCodeForm";
import ImagePreview from "../Image/ImagePreview";

const LetsCode = () => {
  return (
    <StyledThisComp.LetsCodeContainer>
      <StyledThisComp.h2CodeIconOpen content={"<h2>"} />
      <StyledThisComp.h2CodeIconClose content={"</h2>"} />
      <StyledThisComp.pCodeIcon content={"<p>"} />
      <StyledThisComp.LestCodeContent>
        <LetsCodeForm />
      </StyledThisComp.LestCodeContent>

      <StyledThisComp.CatIconWrapper>
        <ImagePreview
          src={CatIconIMG}
          placeholder="blur"
          alt={"img cat icon alt"}
        />
      </StyledThisComp.CatIconWrapper>
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCode;
