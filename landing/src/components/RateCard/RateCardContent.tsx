import React from "react";

import RateCardAccordion from "./RateCardAcordion";

import { IService } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardContentContainer,
  RateCardLine,
} from "../../styles/RateCard.styled";

const RateCardContent = ({ services }: { services: IService[] }) => {
  return (
    <RateCardContentContainer>
      <RateCardLine />
      {services.map((service, idx) => (
        <RateCardAccordion key={`${service.name}${idx}`} service={service} />
      ))}
    </RateCardContentContainer>
  );
};

export default RateCardContent;
