import React from "react";

import * as Styled from "../../styles/Portfolio.styled";
import BlackButtonComponent from "../BlackButtonWithArrow";
import { BlockBottom } from "./svg/BlockBottom";

export const CTABlock = () => {
  return (
    <Styled.CTACont>
      <Styled.BlockMainIcon>
        <BlockBottom />
      </Styled.BlockMainIcon>

      <Styled.CTAHeading>Level up your project</Styled.CTAHeading>
      <Styled.CTAText>
        Level up your projectImplement your ideas quicker than your competitors
        do. Enhance your project with CGS-team.
      </Styled.CTAText>
      <Styled.CTABtnsBlock>
        <BlackButtonComponent
          style={{ fontSize: "22px", letterSpacing: "1px" }}
          text={"Launch our cooperation"}
        />
        <Styled.CTAIconsBlock>
          <Styled.CTAIconWrapper>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0C4.9225 0 0 4.9225 0 11C0 13.42 0.77 15.6475 2.09 17.4625L0.5775 21.45L4.95 20.185C6.6825 21.34 8.7725 22 11 22C17.0775 22 22 17.0775 22 11C22 4.9225 17.0775 0 11 0ZM16.8575 15.565L15.675 16.72C14.4375 17.9575 11.165 16.61 8.2775 13.695C5.39 10.8075 4.0975 7.535 5.2525 6.325L6.435 5.1425C6.875 4.7025 7.6175 4.7025 8.085 5.1425L9.8175 6.875C10.4225 7.48 10.175 8.525 9.3775 8.7725C8.8275 8.965 8.4425 9.57 8.635 10.12C8.9375 11.4125 10.615 13.0075 11.8525 13.31C12.4025 13.4475 13.035 13.1175 13.2 12.5675C13.4475 11.77 14.4925 11.5225 15.0975 12.1275L16.83 13.86C17.27 14.3275 17.27 15.07 16.8575 15.565Z"
                fill="black"
              />
            </svg>
            <Styled.CTAIcon>WhatsApp</Styled.CTAIcon>
          </Styled.CTAIconWrapper>
          <Styled.CTAIconWrapper>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0.34375C4.92339 0.34375 0 5.11328 0 11C0 16.8867 4.92339 21.6562 11 21.6562C17.0766 21.6562 22 16.8867 22 11C22 5.11328 17.0766 0.34375 11 0.34375ZM16.4024 7.64414L14.5972 15.8855C14.4641 16.4699 14.1048 16.6117 13.6036 16.3367L10.8536 14.373L9.52742 15.6105C9.38105 15.7523 9.25686 15.8727 8.97298 15.8727L9.16815 13.1613L14.2645 8.70117C14.4863 8.51211 14.2157 8.40469 13.923 8.59375L7.6246 12.4352L4.91008 11.6145C4.32016 11.434 4.30685 11.043 5.03427 10.768L15.6395 6.80625C16.1319 6.63437 16.5621 6.92227 16.4024 7.64414Z"
                fill="black"
              />
            </svg>
            <Styled.CTAIcon>Telegram</Styled.CTAIcon>
          </Styled.CTAIconWrapper>
        </Styled.CTAIconsBlock>
      </Styled.CTABtnsBlock>
    </Styled.CTACont>
  );
};
