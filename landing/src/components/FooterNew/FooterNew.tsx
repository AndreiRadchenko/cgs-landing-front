import React, { useEffect, useRef, useState } from "react";
import * as StyledThisComp from "./Footer.styled";
import logo from "../../../public/newHeaderLogo.svg";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { DisableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { useQueryClient } from "react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { ClickAudio, Source } from "../HeaderNavNew/HeaderNav.styled";

const FooterNew = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { width } = useWindowDimension();

  const handleClick = () => {
    audioRef.current?.play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width, isOpen]);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FooterBlock;

  DisableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer>
      <ClickAudio ref={audioRef}>
        <Source src="/music/headerMouseClick.mp3" type="audio/mpeg" />
      </ClickAudio>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper onClick={handleClick} href={"/"}>
          <ImagePreview
            src={logo.src}
            alt={"logo cgs-team"}
            width={106}
            height={32}
          />
        </StyledThisComp.LogoLinkWrapper>
        <StyledThisComp.Email
          onClick={handleClick}
          href={`mailto:${data?.email}`}
        >
          {data?.email}
        </StyledThisComp.Email>
      </StyledThisComp.FlexRowContainer>

      <StyledThisComp.NavList onClick={handleClick}>
        {data?.links.map((link, ind) => (
          <Link key={link.link + ind} href={link.link} passHref>
            <StyledThisComp.ListItemNav
              key={link.link + ind}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledThisComp.LinkText
                src={data.images[ind].image?.url}
                alt="footer icons img"
              />
            </StyledThisComp.ListItemNav>
          </Link>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default FooterNew;
