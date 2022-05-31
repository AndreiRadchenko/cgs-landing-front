import LinkedIn from "../../../public/linkedIn.svg";
import Twitter from "../../../public/twitter.svg";
import Facebook from "../../../public/facebook.svg";

import * as Styles from "./ShareOn.styled";

const ShareOn = () => {
  return (
    <Styles.Wrapper>
      <Styles.Text>SHARE ON:</Styles.Text>
      <Styles.IconBlock>
        <Styles.IconImage src={LinkedIn.src} />
      </Styles.IconBlock>
      <Styles.IconBlock>
        <Styles.IconImage src={Twitter.src} />
      </Styles.IconBlock>
      <Styles.IconBlock>
        <Styles.IconImage src={Facebook.src} />
      </Styles.IconBlock>
    </Styles.Wrapper>
  );
};

export default ShareOn;
