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

import WhatsUpGradIcon from "../../../public/whatsUp.svg";
import TelegramGradIcon from "../../../public/telegram.svg";

import Image from "next/image";

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
          <WhatsAppIconWrapper>
            <Image
              src={WhatsUpGradIcon}
              alt="Icon"
              layout="fill"
              objectFit="contain"
            />
          </WhatsAppIconWrapper>
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
          <TelegramIconWrapper>
            <Image
              src={TelegramGradIcon}
              alt="Icon"
              layout="fill"
              objectFit="contain"
            />
          </TelegramIconWrapper>
          Telegram
        </TelegramWrapper>
      </ButtonShareText>
    </ButtonShareTextWrapper>
  );
};

export default ButtonShareComponent;
