import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { queryKeys } from "../../consts/queryKeys";
import {
  WhatsAppIconWrapper,
  ButtonShareText,
  ButtonShareTextWrapper,
  WhatsAppWrapper,
  TelegramWrapper,
  TelegramIconWrapper,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

const ButtonShareComponent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const whatsAppIcon = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0C3.1325 0 0 3.1325 0 7C0 8.54 0.49 9.9575 1.33 11.1125L0.3675 13.65L3.15 12.845C4.2525 13.58 5.5825 14 7 14C10.8675 14 14 10.8675 14 7C14 3.1325 10.8675 0 7 0ZM10.7275 9.905L9.975 10.64C9.1875 11.4275 7.105 10.57 5.2675 8.715C3.43 6.8775 2.6075 4.795 3.3425 4.025L4.095 3.2725C4.375 2.9925 4.8475 2.9925 5.145 3.2725L6.2475 4.375C6.6325 4.76 6.475 5.425 5.9675 5.5825C5.6175 5.705 5.3725 6.09 5.495 6.44C5.6875 7.2625 6.755 8.2775 7.5425 8.47C7.8925 8.5575 8.295 8.3475 8.4 7.9975C8.5575 7.49 9.2225 7.3325 9.6075 7.7175L10.71 8.82C10.99 9.1175 10.99 9.59 10.7275 9.905Z"
        fill="none"
      />
    </svg>
  );

  const telegramIcon = (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0ZM10.4379 4.79556L9.28911 10.2093C9.20444 10.5931 8.97581 10.6863 8.65685 10.5056L6.90685 9.21573L6.0629 10.0286C5.96976 10.1218 5.89073 10.2008 5.71008 10.2008L5.83427 8.41976L9.07742 5.48992C9.21855 5.36573 9.04637 5.29516 8.86008 5.41935L4.85202 7.94274L3.1246 7.40363C2.74919 7.28508 2.74073 7.02823 3.20363 6.84758L9.95242 4.24516C10.2657 4.13226 10.5395 4.32137 10.4379 4.79556Z"
        fill="#34AADF"
      />
    </svg>
  );

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        formType: "Contact us",
      });
    }
  };

  const handleTelegramClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "telegram_click",
        formType: "Contact us",
      });
    }
  };

  return (
    <ButtonShareTextWrapper>
      <span>or contact via</span>
      <ButtonShareText
        href={data?.whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
      >
        <WhatsAppWrapper>
          <WhatsAppIconWrapper>{whatsAppIcon}</WhatsAppIconWrapper>
          WhatsApp
        </WhatsAppWrapper>
      </ButtonShareText>
      <ButtonShareText
        href={data?.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleTelegramClick}
      >
        <TelegramWrapper>
          <TelegramIconWrapper>{telegramIcon}</TelegramIconWrapper>
          Telegram
        </TelegramWrapper>
      </ButtonShareText>
    </ButtonShareTextWrapper>
  );
};

export default ButtonShareComponent;
