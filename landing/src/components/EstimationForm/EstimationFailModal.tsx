import React from "react";
import {
  EstimateModalBlackBlock,
  EstimateModalBlock,
  EstimateModalButton,
  EstimateModalContainer,
  EstimateModalCross,
  EstimateModalShadowContainer,
  EstimateModalWrapper,
} from "../../styles/EstimationForm.styled";
import Image from "next/image";
import cross from "../../../public/closeBtn.svg";

const EstimationFailModal = () => {
  return (
    <EstimateModalWrapper>
      <EstimateModalShadowContainer>
        <EstimateModalContainer>
          <EstimateModalCross>
            <Image src={cross} alt="cross" />
          </EstimateModalCross>
          We’re already doing your project’s estimation. You need a few minutes
          to finish the form.
          <br />
          Want to lose progress?
          <EstimateModalButton>Continue</EstimateModalButton>
          <EstimateModalBlock>
            <EstimateModalBlackBlock />
          </EstimateModalBlock>
        </EstimateModalContainer>
      </EstimateModalShadowContainer>
    </EstimateModalWrapper>
  );
};

export default EstimationFailModal;
