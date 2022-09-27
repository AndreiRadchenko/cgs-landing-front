import React from "react";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../consts/queryKeys";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import {
  Subtitle,
  FooterButtonWrapper,
  FooterLinkButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import ButtonArrow from "../../utils/ButtonArrow";
import { recoverLink } from "../../utils/recoverLink";
import ScrambleText from "../HomePage/ScrambleText";

const BookBlock = () => {
  const { width, height } = useWindowDimension();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BookCallBlock;

  return (
    <>
      <Subtitle className="footer">
        Do you want <br /> to turn your <br /> ideas into&nbsp;
        <br />
        <span className="blue solutions">
          {(typeof window !== "undefined" && (
            <ScrambleText
              text="tech solutions"
              topOffset={
                width && height && (width < 768 || height > width)
                  ? -2.5 * window.innerHeight
                  : -5 * window.innerHeight
              }
            />
          )) ||
            "tech solutions"}
        </span>
        <FooterButtonWrapper>
          <FooterLinkButton
            target="_blank"
            rel="noopener noreferrer"
            href={data && data.buttonLink && recoverLink(data?.buttonLink)}
          >
            {data?.button}
            <ArrowContainer>
              <ButtonArrow />
            </ArrowContainer>
          </FooterLinkButton>
        </FooterButtonWrapper>
      </Subtitle>
    </>
  );
};

export default BookBlock;
