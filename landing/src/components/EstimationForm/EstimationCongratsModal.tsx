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

import cross from "../../../public/closeBtn.svg";
import Image from "next/image";

const EstimationCongratsModal = () => {
  return (
    <EstimateModalWrapper>
      <EstimateModalShadowContainer>
        <EstimateModalContainer>
          <EstimateModalCross href={"/"}>
            <Image src={cross} alt="cross" />
          </EstimateModalCross>
          Thank you for completing the form. Our team makes every effort to
          contact you immediately with the results.
          <EstimateModalButton href={"/"}>Exit</EstimateModalButton>
          <EstimateModalBlock>
            <EstimateModalBlackBlock />
          </EstimateModalBlock>
        </EstimateModalContainer>
      </EstimateModalShadowContainer>
    </EstimateModalWrapper>
  );
};

export default EstimationCongratsModal;
