import React, { useRef } from "react";
import parse from "html-react-parser";
import * as Styled from "../../styles/DappAuditService/Footer.styled";
import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import Image from "next/image";
import GetEstimationButton from "../GetEstimationButton";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const FooterBlock = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const data = {
    title:
      "Secure your dapp | and develop | a tokenomic model | with the CGS-team.",
    button: "Start with a call",
    buttonLink:
      "https://calendly.com/d/dwn-9yc-22t/client-meets-daniel-and-tech-department",
    image: {
      url: "https://landing-cgs.s3.amazonaws.com/016fcfc8-0eaa-452d-a663-9b74d9b601e1.svg",
    },
  };

  return (
    <Styled.ContentWrapper>
      <WrapperWithLine />
      <div>
        <Styled.TitleWrapper>
          <Subtitle>
            {data &&
              parse(
                data.title
                  .toLowerCase()
                  .replaceAll("|", "<br/>")
                  .replace(
                    "cgs-team",
                    '<span style="white-space: nowrap">cgs-team</span>'
                  )
              )}
          </Subtitle>
        </Styled.TitleWrapper>
        {data && (
          <Styled.ButtonWrapper ref={elRef}>
            <GetEstimationButton
              buttonLink={data?.buttonLink}
              buttonText={data.button}
              withEstimation
              buttonClassName="social-button"
            />
            <ButtonShareComponent />
          </Styled.ButtonWrapper>
        )}
      </div>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image.url}
            alt="dapp audit footer image"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.ContentWrapper>
  );
};

export default FooterBlock;
