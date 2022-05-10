import React from "react";
import { IconContainer } from "./Footer.styled";
import Link from "next/link";
import ImagePreview from "../Image/ImagePreview";

type Props = {
  icoUrl: string;
  href: string;
};

const FooterIcon = ({ icoUrl, href }: Props) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <IconContainer>
          <ImagePreview src={icoUrl} layout="fill" alt={icoUrl} />
        </IconContainer>
      </a>
    </Link>
  );
};

export default FooterIcon;
