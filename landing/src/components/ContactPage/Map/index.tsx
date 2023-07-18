import React from "react";
import Image from "next/image";

import Popup from "../Popup/Popup";

import * as Styled from "./Map.styled";
import { IContactPageData } from "../../../types/Admin/AdminContact.types";
import { useWindowDimension } from "../../../hooks/useWindowDimension";

type MapProps = Pick<IContactPageData, "location">;

export const Map = ({ location }: MapProps) => {
  const { width: displayWidth } = useWindowDimension();
  const { map, address } = location;

  return (
    <Styled.MapContainer>
      <Image
        alt="Our location"
        src={map.image?.url ? map.image?.url : ""}
        objectFit={displayWidth! > 1400 ? "contain" : "cover"}
        layout="fill"
      />
      <Styled.PointerImage className="pointerContainer">
        <svg
          width={displayWidth! > 1800 ? "37" : "27"}
          height={displayWidth! > 1800 ? "47" : "37"}
          viewBox="0 0 27 37"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.9179 0.660156C6.75183 0.660156 0.921875 6.49011 0.921875 13.6561C0.921875 22.5492 12.552 35.6049 13.0472 36.1564C13.5123 36.6744 14.3243 36.6735 14.7885 36.1564C15.2837 35.6049 26.9138 22.5492 26.9138 13.6561C26.9137 6.49011 21.0838 0.660156 13.9179 0.660156ZM13.9179 20.1947C10.3124 20.1947 7.37932 17.2615 7.37932 13.6561C7.37932 10.0507 10.3125 7.11753 13.9179 7.11753C17.5232 7.11753 20.4563 10.0507 20.4563 13.6561C20.4563 17.2615 17.5232 20.1947 13.9179 20.1947Z" />
        </svg>
        <Popup>{address}</Popup>
      </Styled.PointerImage>
    </Styled.MapContainer>
  );
};

export default Map;
