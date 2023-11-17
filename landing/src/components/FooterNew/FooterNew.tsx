import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import Logo from "../HeaderNavNew/Logo";
import ExplanationEmailField from "./ExplanationEmailField/ExplanationEmailField";

import * as StyledThisComp from "./Footer.styled";
import { IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";

import smallMountain from "/public/smallMountain.svg";

interface IFooterProps {
  className?: string;
  setOpenFailedModal?: Dispatch<SetStateAction<boolean>>;
  clickFromEstimationForm?: boolean;
}

const useInViewport = <T extends Element>(ref: MutableRefObject<T | null>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const isInViewport = top <= window.innerHeight && bottom >= 0;
        setIsScrolled(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isScrolled;
};

const FooterNew = ({
  className,
  setOpenFailedModal,
  clickFromEstimationForm,
}: IFooterProps): JSX.Element => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;

  const [animationPlay, setAnimationPlay] = useState(false);

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useInViewport(elRef);

  useEffect(() => {
    if (isScrolled) {
      setAnimationPlay(true);
      const interval = setInterval(() => {
        setAnimationPlay((prevAnimationPlay) => !prevAnimationPlay);
      }, 5000);

      return () => clearInterval(interval);
    } else {
      setAnimationPlay(false);
    }
  }, [isScrolled]);

  return (
    <StyledThisComp.HeaderNavContainer ref={elRef} className={className}>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper
          onClick={(e) => {
            if (clickFromEstimationForm) {
              e.preventDefault();
              setOpenFailedModal!(true);
            }
          }}
          href={"/"}
        >
          <Logo cssClass={"footer"} />
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
                className={animationPlay ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>{data?.email}</StyledThisComp.EmailText>
              {data?.email && (
                <ExplanationEmailField
                  text={"If you want to become our client"}
                />
              )}
            </StyledThisComp.Email>
            <StyledThisComp.Email href={`mailto:${data?.hrEmail}`}>
              <StyledThisComp.MailIcon
                width="100%"
                height="100%"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={animationPlay ? "scrolled" : undefined}
              >
                <path d="M1.90909 2.88889H3.72727M3.72727 4.77778H5.54545M5.54545 6.66667H7.36364M7.36364 8.55556H9.18182M9.18182 10.4444H11M25.0909 2.88889H23.2727M23.2727 4.77778H21.4545M21.4545 6.66667H19.6364M19.6364 8.55556H17.8182M11 12.3333H12.8182H14.1818H16M17.8182 10.4444H16M1 1V18H26V1H1Z" />
              </StyledThisComp.MailIcon>
              <StyledThisComp.EmailText>
                {data?.hrEmail}
              </StyledThisComp.EmailText>
              {data?.email && (
                <ExplanationEmailField
                  text={"If you want to become our colleague"}
                />
              )}
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
                    data?.images[ind]
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
