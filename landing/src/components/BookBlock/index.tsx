import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import {
  Subtitle,
  FooterButtonWrapper,
  FooterWhatsAppContainer,
  FooterSection,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import ScrambleText from "../HomePage/ScrambleText";
import WhatsAppComponent from "../HomePage/WhatsAppComponent";
import GetEstimationButton from "../GetEstimationButton";

const BookBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.BookCallBlock;

  return (
    <FooterSection>
      <Subtitle className="footer">
        Do you want <br /> to turn your <br /> ideas into&nbsp;
        <br />
        <span className="blue solutions">
          {(typeof window !== "undefined" && (
            <ScrambleText text="tech solutions" />
          )) || <span className="blue">tech solutions</span>}
        </span>
      </Subtitle>
      <FooterWhatsAppContainer>
        {data && (
          <FooterButtonWrapper className="btn">
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              withEstimation
              buttonText={data.button}
            />
          </FooterButtonWrapper>
        )}
        <FooterButtonWrapper>
          <WhatsAppComponent />
        </FooterButtonWrapper>
      </FooterWhatsAppContainer>
    </FooterSection>
  );
};

export default BookBlock;
