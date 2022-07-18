import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./Footer.styled";
import logo from "../../../public/logo.png";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { useQueryClient } from "react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { footerIcons } from "../../consts";

const FooterNew = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowDimension();

  useEffect(() => {
    isOpen && width && width >= 768 && setIsOpen(false);
  }, [width, isOpen]);

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IDataResponse>(
    queryKeys.getFullHomePage
  )?.FooterBlock;

  console.log(data?.links);

  disableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper href={"/"}>
          <ImagePreview
            src={logo}
            alt={"logo cgs-team"}
            width={106}
            height={32}
          />
        </StyledThisComp.LogoLinkWrapper>
        <StyledThisComp.Email href={`mailto:${data?.email}`}>
          {data?.email}
        </StyledThisComp.Email>
      </StyledThisComp.FlexRowContainer>

      <StyledThisComp.NavList>
        {data?.links.map((link, ind) => (
          <Link key={link.link + ind} href={link.link} passHref>
            <StyledThisComp.ListItemNav key={link.link + ind}>
              <StyledThisComp.LinkText src={footerIcons[ind].src || ""} />
            </StyledThisComp.ListItemNav>
          </Link>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default FooterNew;
