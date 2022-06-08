import React from "react";
import { icons } from "../../consts";

import * as Styles from "./ShareOn.styled";

const ShareOn = () => {
  return (
    <Styles.Wrapper>
      <Styles.Text>SHARE ON:</Styles.Text>
      {icons.map((item, i) => (
        <Styles.IconBlock key={i}>
          <Styles.IconImage src={item.src} />
        </Styles.IconBlock>
      ))}
    </Styles.Wrapper>
  );
};

export default ShareOn;
