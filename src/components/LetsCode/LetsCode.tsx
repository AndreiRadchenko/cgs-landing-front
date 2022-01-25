import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import CatIconIMG from "../../../public/cat-icon.svg";
import LetsCodeForm from "./LetsCodeForm";
import Image from "next/image";

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
        <Image src={CatIconIMG} alt={"img cat icon alt"} />
      </StyledThisComp.CatIconWrapper>
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCode;
