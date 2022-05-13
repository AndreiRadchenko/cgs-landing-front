import * as Styles from "./Button.style";

import { clickFeedbackButtons } from "services/event";

const Button: React.FC<
  { text: string; link: string; small?: boolean } & Record<any, any>
> = ({ link, text, small = false, ...rest }) => (
  <Styles.Button 
    small={small}
    href={link}
    onClick={(...args) => { 
      rest.onClick?.(...args);
      clickFeedbackButtons("#Read More");
    }}
    {...rest}>
    {text}
  </Styles.Button>
);

export default Button;
