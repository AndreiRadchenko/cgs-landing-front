import React from "react";
import { useQueryClient } from "react-query";
import buttonArrow from "../../../public/HomePageDecoration/buttonArrow.svg";
import { queryKeys } from "../../consts/queryKeys";
import {
  ButtonArrow,
  Subtitle,
  FooterButtonWrapper,
  FooterLinkButton,
} from "../../styles/HomePage/General.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import { recoverLink } from "../../utils/recoverLink";

const BookBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.BookCallBlock;

  return (
    <>
      <Subtitle className="footer">
        Do you want to turn your ideas into{" "}
        <span className="blue">tech solutions</span>{" "}
        <FooterButtonWrapper>
          <FooterLinkButton
            href={data && data.buttonLink && recoverLink(data?.buttonLink)}
          >
            {data?.button}
            <ButtonArrow src={buttonArrow.src} />
          </FooterLinkButton>
        </FooterButtonWrapper>
      </Subtitle>
    </>
  );
};

export default BookBlock;
