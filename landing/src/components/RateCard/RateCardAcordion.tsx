import React, { useState } from "react";

import ArrowDown from "./SvgRateCard/ArrowDown";

import { IService } from "../../types/Admin/AdminRateCard.types";

import {
  RateCardImageTitleWrapper,
  RateCardServiceDropDown,
  RateCardServiceName,
} from "../../styles/RateCard.styled";
import RateCardServiceInfo from "./RateCardServiceInfo";
import Image from "next/image";
import { useCollapse } from "react-collapsed";

const RateCardAccordion = ({ service }: { service: IService }) => {
  const [isActive, setIsActive] = useState(false);

  const { getToggleProps, getCollapseProps } = useCollapse({
    easing: "linear",
    isExpanded: isActive,
    collapsedHeight: 0,
  });

  const handleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <RateCardServiceDropDown
        isActive={isActive}
        {...getToggleProps({ onClick: handleActive })}
      >
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
      <div {...getCollapseProps()}>
        <RateCardServiceInfo levels={service.levels} />
      </div>
    </>
  );
};

export default RateCardAccordion;
