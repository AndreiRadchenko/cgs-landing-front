import React from "react";
import { useMediaQuery } from "@mui/material";

import { ServiceCard } from "./ServiceCard/ServiceCard";
import { MobileInfiniteText } from "../../../MobileInfiniteText/MobileInfiniteText";

import * as Styles from "./FreeServices.styled";
import { IFreeServicesComponent } from "../../../../types/ServicesComponent.types";

interface IServicesProps {
  freeServices?: IFreeServicesComponent;
}

export const FreeServices = ({ freeServices }: IServicesProps) => {
  const { title, services } = freeServices ?? {
    title: "",
    services: [{ subtitle: "", text: "" }],
  };

  return (
    <Styles.Container>
      <div>
        <MobileInfiniteText title={title} />
      </div>
      <div>
        <Styles.Title>{title}</Styles.Title>
        <Styles.ServiceList>
          {services.map((item, idx) => (
            <ServiceCard
              key={idx}
              idx={idx}
              subtitle={item.subtitle}
              text={item.text}
            />
          ))}
        </Styles.ServiceList>
      </div>
    </Styles.Container>
  );
};

export default FreeServices;
