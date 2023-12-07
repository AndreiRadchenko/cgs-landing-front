import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as StyledThisComp from "../../styles/Burger.styles";

import { queryKeys } from "../../consts/queryKeys";

import { IDataResponse } from "../../types/Admin/Response.types";

import { SplitBrackets } from "../../utils/splitBrackets";
import ButtonShareComponent from "../HomePage/ButtonShareComponent";

const BurgerFooter = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;

  return (
    <StyledThisComp.FooterWrapper>
      <StyledThisComp.MailsWrapper>
        <StyledThisComp.Mail href={`mailto:${data?.email}`}>
          <SplitBrackets text={data?.email} />
        </StyledThisComp.Mail>
        <StyledThisComp.Mail href={`mailto:${data?.hrEmail}`}>
          <SplitBrackets text={data?.hrEmail} />
        </StyledThisComp.Mail>
      </StyledThisComp.MailsWrapper>
      <StyledThisComp.FooterIconsWrapper>
        {data?.links.map((el, idx) => (
          <Link key={el.link} href={el.link} passHref>
            <StyledThisComp.FooterLink>
              <StyledThisComp.ImageWrapper>
                <Image
                  src={data.images[idx].image?.url || ""}
                  alt="burger footer icon image"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </StyledThisComp.ImageWrapper>
            </StyledThisComp.FooterLink>
          </Link>
        ))}
      </StyledThisComp.FooterIconsWrapper>
      <ButtonShareComponent />
      <StyledThisComp.PrivacyPolicyContainer>
        <StyledThisComp.BurgerPrivacy href="/privacy-policy">
          Privacy Policy
        </StyledThisComp.BurgerPrivacy>
      </StyledThisComp.PrivacyPolicyContainer>
    </StyledThisComp.FooterWrapper>
  );
};

export default BurgerFooter;
