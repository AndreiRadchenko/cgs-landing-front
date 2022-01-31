import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import Image from "next/image";
import FormWrapperIMG from "../../../public/formIconWrap.png";
import CreateSupportForm from "../CreateSupportForm/CreateSupportForm";

const LetsCodeForm = () => {
  return (
    <StyledThisComp.LetsCodeContainer>
      <StyledThisComp.LetsCodeImageWrapper>
        <Image src={FormWrapperIMG} alt={"form wrapper alt img"} />
      </StyledThisComp.LetsCodeImageWrapper>
      <CreateSupportForm />
    </StyledThisComp.LetsCodeContainer>
  );
};

export default LetsCodeForm;
