import React, { useEffect, useState } from "react";
import * as StyledThisComp from "./Footer.styled";
import logo from "../../../public/logo.png";
import { routersNew } from "../../utils/variables";
import ImagePreview from "../Image/ImagePreview";
import Link from "next/link";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import { disableScrollBarHandler } from "../../utils/disableScrollBarHandler";
import { useQueryClient } from "react-query";
import { IDataResponse } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";

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

  disableScrollBarHandler(isOpen);
  return (
    <StyledThisComp.HeaderNavContainer>
      <StyledThisComp.FlexRowContainer>
        <StyledThisComp.LogoLinkWrapper href={routersNew[0]}>
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
          <Link key={link.link + ind} href={routersNew[ind]} passHref>
            <StyledThisComp.ListItemNav key={link.link + ind}>
              <StyledThisComp.LinkText
                src={data.images[ind].image?.url || ""}
              />
            </StyledThisComp.ListItemNav>
          </Link>
        ))}
      </StyledThisComp.NavList>
    </StyledThisComp.HeaderNavContainer>
  );
};

export default FooterNew;
