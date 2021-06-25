import * as Styles from "./Button.style";

const Button: React.FC<
  { text: string; link: string; small?: boolean } & Record<any, any>
> = ({ link, text, small = false, ...rest }) => (
  <Styles.Button small={small} href={link} {...rest}>
    {text}
  </Styles.Button>
);

export default Button;
