import React from "react";
import * as Styled from "./footer.styles";
import SocialLinks from "../SocialLinks/social-links.component";
import { IFooter } from "../../../../types/components";
import { MobileSocialList } from "../../../../consts/lists";
import dayjs from "dayjs";

const Footer: React.FC<IFooter> = ({ socialList, fill }) => {
  return (
    <Styled.Wrapper>
      <div className="drop-box-footer" data-scroll={"Social"}>
        <p className="drop-box-footer-text">
          <a href="mailto:sales.codegeneration@gmail.com">
            sales.codegeneration@gmail.com
          </a>
        </p>
        <div className="footer-act">
          <SocialLinks socialList={MobileSocialList} />
        </div>
        <p className="drop-box-footer-text">
          Copyright {dayjs().format("YYYY")}
        </p>
        <div className="footer-dis">
          <SocialLinks socialList={MobileSocialList} />
        </div>
      </div>
    </Styled.Wrapper>
  );
};
export default Footer;
