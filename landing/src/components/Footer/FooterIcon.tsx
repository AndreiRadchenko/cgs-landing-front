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
    <Link href={href} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <IconContainer>
          <ImagePreview
            src={icoUrl}
            layout="fill"
            objectFit="contain"
            alt={icoUrl}
          />
        </IconContainer>
      </a>
    </Link>
  );
};

export default FooterIcon;
