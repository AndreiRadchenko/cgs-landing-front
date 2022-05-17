import React from "react";
import Link from "next/link";
import { IconContainer } from "../../styles/footer";

type Props = {
  Icon: any;
  href: string;
};

const FooterIcon = ({ Icon, href }: Props) => {
  return (
    <Link href={href}>
      <a target="_blank">
        <IconContainer>
          <Icon />
        </IconContainer>
      </a>
    </Link>
  );
};

export default FooterIcon;
