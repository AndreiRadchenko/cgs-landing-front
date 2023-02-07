import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "./Footer.styled";
import Link from "next/link";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { useQueryClient } from "@tanstack/react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import Image from "next/image";
import smallMountain from "/public/smallMountain.svg";
import { useOnScreen } from "../../hooks/useOnScreen";
import Logo from "../HeaderNavNew/Logo";

interface IFooterProps {
  className?: string;
}

const FooterNew = ({ className }: IFooterProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width, isOpen]);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;

  DisableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer ref={elRef} className={className}>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper href={"/"}>
          <Logo />
        </StyledThisComp.LogoLinkWrapper>
        <StyledThisComp.MiddleTextWrapper>
          <StyledThisComp.MailsWrapper>
            <StyledThisComp.Email href={`mailto:${data?.email}`}>
              <StyledThisComp.MailIcon
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isScrolled ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>{data?.email}</StyledThisComp.EmailText>
            </StyledThisComp.Email>
            <StyledThisComp.Email href={`mailto:${data?.hrEmail}`}>
              <StyledThisComp.MailIcon
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isScrolled ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>
                {data?.hrEmail}
              </StyledThisComp.EmailText>
            </StyledThisComp.Email>
          </StyledThisComp.MailsWrapper>
          <StyledThisComp.PrivacyPolicy href="/privacy-policy">
            Privacy Policy
          </StyledThisComp.PrivacyPolicy>
        </StyledThisComp.MiddleTextWrapper>
      </StyledThisComp.FlexRowContainer>
      <StyledThisComp.NavList>
        {data?.links.map((link, ind) => (
          <Link key={link.link + ind} href={link.link} passHref>
            <StyledThisComp.ListItemNav
              key={link.link + ind}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledThisComp.FooterImageWrapper>
                <Image
                  src={
                    data.images[ind]
                      ? data.images[ind].image?.url
                      : smallMountain
                  }
                  alt="footer icons img"
                  layout="fill"
                  objectFit="contain"
                />
              </StyledThisComp.FooterImageWrapper>
            </StyledThisComp.ListItemNav>
          </Link>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default FooterNew;
