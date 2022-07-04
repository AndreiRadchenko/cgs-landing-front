import React from "react";
import { icons } from "../../consts";

import * as Styles from "./ShareOn.styled";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

interface IShareOn {
  image: { url: string };
  title: string;
}

const ShareOn = ({ image, title }: IShareOn) => {
  const url = window.location.href;
  return (
    <Styles.Wrapper>
      <Styles.Text>SHARE ON:</Styles.Text>
      <LinkedinShareButton url={url} title={title}>
        <Styles.IconBlock>
          <Styles.IconImage src={icons[0].src} />
        </Styles.IconBlock>
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <Styles.IconBlock>
          <Styles.IconImage src={icons[1].src} />
        </Styles.IconBlock>
      </TwitterShareButton>
      <FacebookShareButton url={url} title={title} quote={title}>
        <Styles.IconBlock>
          <Styles.IconImage src={icons[2].src} />
        </Styles.IconBlock>
      </FacebookShareButton>
    </Styles.Wrapper>
  );
};

export default ShareOn;
