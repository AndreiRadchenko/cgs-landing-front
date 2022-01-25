import React from "react";
import { IconContainer } from "./Footer.styled";
import Image from "next/image";
import Link from "next/link";

type Props = {
  icoUrl: string;
  href: string;
};

const FooterIcon = ({ icoUrl, href }: Props) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <IconContainer>
          <Image src={icoUrl} layout="fill" alt={icoUrl} />
        </IconContainer>
      </a>
    </Link>
  );
};

export default FooterIcon;
