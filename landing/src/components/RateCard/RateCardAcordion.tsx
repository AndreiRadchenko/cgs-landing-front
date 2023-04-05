import React, { useState } from "react";

import ArrowDown from "./SvgRateCard/ArrowDown";

import { IService } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardImageTitleWrapper,
  RateCardLine,
  RateCardServiceDropDown,
  RateCardServiceName,
} from "../../styles/RateCard.styled";
import RateCardServiceInfo from "./RateCardServiceInfo";
import Image from "next/image";

const RateCardAccordion = ({ service }: { service: IService }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <RateCardServiceDropDown onClick={handleActive}>
        <RateCardImageTitleWrapper>
          <Image
            src={service?.image?.url}
            height="51px"
            width="51px"
            objectFit="contain"
            alt="service image"
          />
          <RateCardServiceName isActive={isActive}>
            {service.name}
          </RateCardServiceName>
        </RateCardImageTitleWrapper>
        <ArrowDown isActive={isActive} />
      </RateCardServiceDropDown>
      {isActive && <RateCardServiceInfo levels={service.levels} />}
      <RateCardLine />
    </>
  );
};

export default RateCardAccordion;
