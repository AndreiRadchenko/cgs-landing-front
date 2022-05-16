import React from "react";
import Link from "next/link";
import ImagePreview from "../Image/ImagePreview";
import { IconContainer } from "../../styles/footer";

type Props = {
  icoUrl: any;
  href: string;
};

const FooterIcon = ({ icoUrl, href }: Props) => {
  return (
    <Link href={href}>
      <a target="_blank">
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
