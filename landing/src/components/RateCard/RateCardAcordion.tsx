import React, { useState } from "react";

import ArrowDown from "./SvgRateCard/ArrowDown";

import { IService } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardLine,
  RateCardServiceDropDown,
  RateCardServiceName,
} from "../../styles/RateCard.styled";
import RateCardServiceInfo from "./RateCardServiceInfo";

const RateCardAccordion = ({ service }: { service: IService }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <RateCardServiceDropDown onClick={handleActive}>
        <RateCardServiceName isActive={isActive}>
          {service.name}
        </RateCardServiceName>
        <ArrowDown isActive={isActive} />
      </RateCardServiceDropDown>
      {isActive && <RateCardServiceInfo levels={service.levels} />}
      <RateCardLine />
    </>
  );
};

export default RateCardAccordion;
