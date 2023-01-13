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

const ButtonShareComponent = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.EditInformationBlock;

  const whatsAppIcon = (
    <svg
      width="14"
      height="14"
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
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 0.21875C3.13306 0.21875 0 3.25391 0 7C0 10.7461 3.13306 13.7812 7 13.7812C10.8669 13.7812 14 10.7461 14 7C14 3.25391 10.8669 0.21875 7 0.21875ZM10.4379 4.86445L9.28911 10.109C9.20444 10.4809 8.97581 10.5711 8.65685 10.3961L6.90685 9.14648L6.0629 9.93398C5.96976 10.0242 5.89073 10.1008 5.71008 10.1008L5.83427 8.37539L9.07742 5.53711C9.21855 5.4168 9.04637 5.34844 8.86008 5.46875L4.85202 7.91328L3.1246 7.39102C2.74919 7.27617 2.74073 7.02734 3.20363 6.85234L9.95242 4.33125C10.2657 4.22187 10.5395 4.40508 10.4379 4.86445Z"
        fill="#34AADF"
      />
    </svg>
  );

  return (
    <ButtonShareTextWrapper>
      or contact via
      <ButtonShareText
        href={data?.whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
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
