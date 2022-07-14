import React from "react";
import { icons } from "../../consts";

import * as Styles from "./ShareOn.styled";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

interface IShareOn {
  title: string;
}

const ShareOn = ({ title }: IShareOn) => {
  const url = typeof window !== "undefined" && window.location.href;
  return (
    <Styles.Wrapper>
      <Styles.Text>SHARE ON:</Styles.Text>
      {url && (
        <LinkedinShareButton url={url} title={title}>
          <Styles.IconBlock>
            <Styles.IconImage src={icons[0].src} />
          </Styles.IconBlock>
        </LinkedinShareButton>
      )}
      {url && (
        <TwitterShareButton url={url} title={title}>
          <Styles.IconBlock>
            <Styles.IconImage src={icons[1].src} />
          </Styles.IconBlock>
        </TwitterShareButton>
      )}
      {url && (
        <FacebookShareButton url={url} title={title} quote={title}>
          <Styles.IconBlock>
            <Styles.IconImage src={icons[2].src} />
          </Styles.IconBlock>
        </FacebookShareButton>
      )}
    </Styles.Wrapper>
  );
};

export default ShareOn;
