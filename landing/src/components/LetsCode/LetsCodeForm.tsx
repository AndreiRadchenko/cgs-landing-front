import React from "react";
import * as StyledThisComp from "../../styles/LestCode.styles";
import Image from "next/image";
import { LetsCodeFormPropTypes } from "../../types/Button.types";
import FormWrapperIMG from "../../../public/formIconWrap.png";
import FormWrapperIMGMobile from "../../../public/formIconWrapMobile.png";
import CreateSupportForm from "../CreateSupportForm/CreateSupportForm";
import { useWindowDimension } from "../../hooks/useWindowDimension";

const LetsCodeForm = ({ setButtonIsHovered }: LetsCodeFormPropTypes) => {
  const { width } = useWindowDimension();

  return (
    <>
      <StyledThisComp.LetsCodeImageWrapper>
        {width && (
          <Image
            src={width >= 1200 ? FormWrapperIMG : FormWrapperIMGMobile}
            alt={"form wrapper alt img"}
          />
        )}
      </StyledThisComp.LetsCodeImageWrapper>
      <CreateSupportForm setButtonIsHovered={setButtonIsHovered} />
    </>
  );
};

export default LetsCodeForm;
